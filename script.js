let fetch = require("node-fetch");
let getUrls = require("get-urls");
let globalUrl = {};
let fstream = require("fstream");
let excludes = [".bin", ".mp4", ".svg", ".JPG", ".jpg", ".php", ".jpeg", ".png", ".bmp", ".gif", ".ttf", ".zip", ".7z", ".bz2", ".tar", ".exe", ".dll", ".pdf", ".psd", ".ico", ".css", ".js", ".aspx"];
let t1 = Date.now();
let counter = 0;
let host = "https://www.bbc.co.uk/news";
let timeToEnd = t1 + 1000*10;

function writeResultsToFile() {
    let sitemap = Array.from(globalUrl).join("\n");
    let writeStream = fstream.Writer({path:"./test.txt"});
    writeStream.write(sitemap);
}

async function recursiveCheck() {
    let urlsToCheck = Object.entries(globalUrl).filter(ele => !ele[1]).map(ele => ele[0]);
    let t2 = Date.now();
    if (!urlsToCheck.length || t2 > timeToEnd) {
        return Promise.resolve("Done");
    }
    await Promise.all(urlsToCheck.map(async ele => {
        console.log(ele)
        return callURL(ele);
    }));
    console.log(counter + urlsToCheck.length);
    return recursiveCheck();
}

async function callURL(url) {
    return fetch(url).then(async res => {
        globalUrl[url] = res.status;
        let page = await res.text();
        let urlsToParse = Array.from(getUrls(page));
        let newUrls = urlsToParse.filter(ele => {
            console.log(ele);
            return ele.includes(host) && !excludes.some(extension => ele.includes(extension));
        });
        newUrls.forEach(ele => {
            globalUrl[ele] || (globalUrl[ele] = null);
        });
        return Promise.resolve("Done");
    }).catch(error => {
        globalUrl[url] = 500;
        return Promise.resolve("Done");
    });
}

async function intMain() {
    globalUrl["https://www.bosch-home.es/"] = null;
    await recursiveCheck();
    writeResultsToFile();
}

intMain()