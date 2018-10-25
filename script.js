let fetch = require("node-fetch");
let getUrls = require("get-urls");
let globalUrl = new Set();
let fs = require("fs");
let fstream = require("fstream");
let host;

async function callURL(url) {
    try {
        let response = await fetch(url);
        let result = await response.text();
        let urls = getUrls(result);
        let urlsArr = [];
        urls.forEach(ele => urlsArr.push(ele));
        await Promise.all(urlsArr.map(async (indUrl) => {
            indUrl = indUrl.split("?")[0].split("#")[0];
            if (RegExp(`^.*${host}.*`).test(indUrl)) { 
                if (globalUrl.has(indUrl)) {

                } else {
                    globalUrl.add(indUrl);
                    console.log(globalUrl.size);
                    await callURL(indUrl);                    
                }
            }
        }));
    } catch (error) {
    }
}


function writeResultsToFile() {
    let sitemap = Array.from(globalUrl).join("¬");
    let writeStream = fstream.Writer({path:"./test.txt"});
    writeStream.write(sitemap);
}

async function intMain() {
    console.log("running");
    let t1 = Date.now();
    host = "thebraintumourcharity";
    await callURL("https://www.thebraintumourcharity.org/");
    /*
    for (let url of globalUrl) {
        if (globalUrl.size < 200) {
            console.log('crawling' + url)
            await callURL(url);
        } else {
            callURL(url);
        }
        console.log(globalUrl.size);
    }
    */
    let t2 = Date.now();
    console.log(globalUrl.size/(t2 - t1)*1000);
    writeResultsToFile();
}

intMain();

