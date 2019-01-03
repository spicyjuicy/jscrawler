let fetch = require("node-fetch");
let fstream = require("fstream");
let jsdom = require("jsdom");
let {
    JSDOM
} = jsdom;


async function main() {
    let urls = await getSitemaps("");
    await writeResultsToFile(urls.join("\n"), `sitemap.txt`);
}

main();

async function getSitemaps(sitemap, urls = []) {
    console.log(sitemap)
    let dom = new JSDOM("");
    let document = dom.window.document;
    let page = await (await fetch(sitemap)).text();
    document.body.innerHTML = page.split(/<\?xml.+?>/).length === 2 ? page.split(/<\?xml.+?>/)[1] : page;
    let sitemaps = [];
    document.querySelectorAll("sitemap > loc").forEach(ele => {
        sitemaps.push(ele.innerHTML);
    });

    await Promise.all(sitemaps.map(async subSitemap => {
        urls.push(await getSitemaps(subSitemap, urls));
    }));

    document.querySelectorAll("url > loc").forEach(loc => {
        urls.push(loc.innerHTML);

    });
    return urls;
}

async function writeResultsToFile(text, name) {
    let writeStream = fstream.Writer({
        path: `./${name}`
    });
    return writeStream.write(text);
}