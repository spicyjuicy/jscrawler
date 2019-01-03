let fstream = require("fstream");
//#region sitemap
let sitemap = ``.split("\n");
//#endregion
let sitemapOb = {};
sitemap.forEach((ele) => {
    let path = ele.split('//')[1].split('/');
    recurThing(path, sitemapOb);
});
writeResultsToFile(JSON.stringify(sitemapOb,null,4),"sitemapOb.json");

function writeResultsToFile(text, name) {
    let writeStream = fstream.Writer({
        path: `./${name}`
    });
    writeStream.write(text);
}

function recurThing(path, obj) {
    if (path.length === 0) {

    } else {
        if (obj.hasOwnProperty(path[0])) {
            recurThing(path.slice(1), obj[path[0]]);
        } else {
            obj[path[0]] = {};
            recurThing(path.slice(1), obj[path[0]]);
        }
    }
}



let myString = "";
function recurThing2(prop,level,path) {
    let nextLevel = ++level;
    Object.keys(prop).forEach(key => {
        if (Object.keys(prop[key]).length) {
            myString += `${"\t".repeat(level)}${key}${"\t".repeat(8-level+1)}${`${path}/${key}`}\n`; 
            recurThing2(prop[key],nextLevel,`${path}/${key}`);
        } else {
            myString += `${"\t".repeat(level)}${key}${"\t".repeat(8-level)}${key}\t${`${path}/${key}`}\n`;       
        }
    })
}

recurThing2(sitemapOb,0,"");

writeResultsToFile(myString,"testProps.txt");