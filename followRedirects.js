let fetch = require("node-fetch");
let fstream = require("fstream");
let sitemap = ``.split("\n");

function writeResultsToFile(text, name) {
    let writeStream = fstream.Writer({
        path: `./${name}`
    });
    writeStream.write(text);
}

async function checkRedirects(urls) {
    let redirectedUrls = await Promise.all(urls.map(async ele => {
        let res = await fetch(ele).catch(err => {
            return "ERROR";
        });
        if (res.ok) {
            if (res.redirected) {
                return res.url;
            } else {
                return ele;
            }
        } else {
            return "ERROR";
        }
    }));
    return redirectedUrls;
}

async function main() {
    let redirectedUrls = await checkRedirects(sitemap);
    writeResultsToFile(redirectedUrls.join("\n"),"redirectedURLS.txt");
}

main();