let fetch = require("node-fetch");
let getUrls = require("get-urls");
let globalUrl = new Set();


async function callURL(url) {
    try {
        let response = await fetch(url);
        let result = await response.text();
        let urls = getUrls(result);
        let urlsArr = [];
        urls.forEach(ele => urlsArr.push(ele));
        await Promise.all(urlsArr.map(async (indUrl) => {
            if (RegExp("https://bbc.co.uk/news").test(indUrl) || RegExp("https://www.bbc.co.uk/news").test(indUrl)) { 
                if (globalUrl.has(indUrl)) {

                } else {
                    globalUrl.add(indUrl);
                    console.log(globalUrl.size);
                    callURL(indUrl);                    
                }
            }
        }));
    } catch (error) {
    }
}




async function intMain() {
    console.log("running");
    let t1 = Date.now();
    await callURL("https://www.bbc.co.uk/news");
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

