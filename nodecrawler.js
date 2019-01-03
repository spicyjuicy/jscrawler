// WARNING - DO NOT USE WITHOUT CLIENT AUTHORIZATION \\
let sleep = m => new Promise(r => setTimeout(r, m));
let fetch = require("node-fetch");
let readline = require('readline-sync');

//Maximum number of call in a second
let limitPerSecond = 0;
//Maximum 
let maxNumberOfThreads = 0;
let cutOffLimit = 50;

let host = "https://projectge.com";
let domainCheck = new RegExp(`https?://(?:www\.)*.+?\.projectge.com/`);

let globalUrl = {};
let fstream = require("fstream");
let excludes = [".bin", ".mp4", ".svg", ".JPG", ".jpg", ".jpeg", ".png", ".bmp", ".gif", ".ttf", ".zip", ".7z", ".bz2", ".tar", ".exe", ".dll", ".pdf", ".psd", ".ico", ".css", ".js", ".aspx"];

async function writeResultsToFile(text, name) {
    let writeStream = fstream.Writer({
        path: `./${name}`
    });
    return writeStream.write(text);
}

async function recursiveCheck() {
    let urlsToCheck = Object.entries(globalUrl).filter(ele => !ele[1]).map(ele => ele[0]);
    if (!urlsToCheck.length) {
        return Promise.resolve("Done");
    }
    let splitUrls = splitForFetch(urlsToCheck);

    for (let i = 0; i < splitUrls.length; i++) {
        let startTime = Date.now(),
            endTime = startTime + 1000 * maxNumberOfThreads * 1 / limitPerSecond;
        await Promise.all(splitUrls[i].map(async (ele, i) => {
            return (await delay(1000 / limitPerSecond * i, function (input) {
                console.log("fetching", input);
                return callURL(input,endTime);
            }))(ele);
        }));
    }
    return await recursiveCheck();
}

async function callURL(url, endTime) {
    return fetch(url).then(async res => {
        globalUrl[url] = res.status;
        let page = await res.text();
        let urlsToParse = Array.from(getUrls(page));
        let newUrls = urlsToParse.filter(ele => {
            return domainCheck.test(ele) && !excludes.some(extension => ele.includes(extension));
        });
        newUrls.forEach(ele => {
            if (Object.entries(globalUrl).length < cutOffLimit) {
                globalUrl[ele] || (globalUrl[ele] = null);
            }
        });
        if (Date.now() < endTime) {
            await sleep(endTime - Date.now());
        }
        return Promise.resolve("Done");
    }).catch(async () => {
        globalUrl[url] = 500;
        if (Date.now() < endTime) {
            await sleep(endTime - Date.now());
        }
        return Promise.resolve("Done");
    });
}

async function intMain() {
    let runFunction = areYouSure();
    if (runFunction) {
        let t1 = Date.now();
        globalUrl[host] = null;
        await recursiveCheck();
        let t2 = Date.now();
        console.log(Math.floor((t2 - t1) / 10) / 10, Object.entries(globalUrl).filter(ele => ele[1] !== null).length);
        await writeResultsToFile(JSON.stringify(globalUrl, null, 4), "crawlertest.json");
    } else {
        console.log("Stopping Function");
    }
}

function areYouSure() {
    let answer1 = readline.question(`Please confirm you would like to run this function against ${host} (Y/N)? `);
    if ([`yes`, `y`].includes(answer1.toLowerCase())) {
        if (maxNumberOfThreads > 5 || limitPerSecond > 10 || maxNumberOfThreads === 0 || limitPerSecond === 0) {
            let answer2 = readline.question(`You selected 1 or more high values: Max Number Of threads: ${maxNumberOfThreads}, Max Calls Per Second: ${limitPerSecond}. Are you Sure? (Y/N)? `);
            if ([`yes`, `y`].includes(answer2.toLowerCase())) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function splitForFetch(arrayToSplit) {
    let splitArray = [];
    while (arrayToSplit.length) {
        splitArray.push(arrayToSplit.splice(-maxNumberOfThreads));
    }
    return splitArray;
}

function getUrls(page) {
    let hrefReg = new RegExp(`<(?:[^<]+?)href=(?:"|')([^"']+?)(?:"|')(?:[^>]*)>`, `g`);
    let ex_url = page.match(hrefReg);
    let urls = ex_url.map(url => {
        hrefReg.lastIndex = 0;
        url = hrefReg.exec(url)[1];
        url = url.slice(0, 2) === `./` ? url.slice(2) : url;
        url = url[0] === `?` ? host : url;
        url.includes(`http`) || (url[0] === `/` ? (url = host + url) : url = `${host}/${url}`);
        return url;
    });
    let urlSet = new Set();
    urls.forEach(url => {
        urlSet.add(url);
    })
    return urlSet;
}

async function delay(t, v) {
    return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, v), t)
    });
}

intMain()