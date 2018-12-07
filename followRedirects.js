let fetch = require("node-fetch");
let fstream = require("fstream");
let sitemap = `https://www.thunderhead.com/
https://www.thunderhead.com/one-engagement-hub/
https://www.thunderhead.com/one-engagement-hub/value-of-one/
https://www.thunderhead.com/one-engagement-hub/one-for-your-industry/
https://www.thunderhead.com/useful-stuff/forrester-wave-customer-journey-analytics-platforms-2018
https://www.thunderhead.com/how-to-get-started-with-customer-engagement/
https://www.thunderhead.com/about/
https://www.thunderhead.com/news/
https://www.thunderhead.com/news/
https://www.thunderhead.com/press-coverage/
https://www.thunderhead.com/useful-stuff/
https://www.thunderhead.com/useful-stuff/
https://www.thunderhead.com/useful-stuff/forrester-wave-customer-journey-analytics-platforms/
https://www.thunderhead.com/blog/
https://www.thunderhead.com/support/
https://www.thunderhead.com/careers/
https://www.thunderhead.com/contact/
https://www.thunderhead.com/
https://www.thunderhead.com/one-engagement-hub/
https://www.thunderhead.com/one-engagement-hub/value-of-one/
https://www.thunderhead.com/one-engagement-hub/one-for-your-industry/
https://www.thunderhead.com/one-engagement-hub/one-for-your-industry/energy/
https://www.thunderhead.com/one-engagement-hub/one-for-your-industry/utilities/
https://www.thunderhead.com/one-engagement-hub/one-for-your-industry/one-for-insurance/
https://www.thunderhead.com/customer-engagement-with-interest/
https://www.thunderhead.com/one-engagement-hub/one-for-your-industry/one-for-telco/
https://www.thunderhead.com/one-engagement-hub/one-for-your-industry/automotive/
https://www.thunderhead.com/one-engagement-hub/one-for-your-industry/one-for-travel/
https://www.thunderhead.com/one-engagement-hub/one-for-your-industry/one-for-retail/
https://www.thunderhead.com/one-engagement-hub/one-for-your-industry/sport/
https://www.thunderhead.com/how-to-get-started-with-customer-engagement/
https://www.thunderhead.com/about/
https://www.thunderhead.com/about/meet-the-team/
https://www.thunderhead.com/useful-stuff/
https://www.thunderhead.com/campaign-supernova/
https://www.thunderhead.com/news/
https://www.thunderhead.com/careers/
https://www.thunderhead.com/contact/
https://www.thunderhead.com/support/
https://www.thunderhead.com/accessibility/
https://www.thunderhead.com/terms-use-privacy/terms-of-use/
https://www.thunderhead.com/terms-use-privacy/privacy-policy/
https://www.thunderhead.com/terms-use-privacy/cookie-policy/
https://www.thunderhead.com/system-requirements/
https://www.thunderhead.com/sitemap/
https://www.thunderhead.com/contact/
https://www.thunderhead.com/careers/
https://www.thunderhead.com/support/
https://www.thunderhead.com/support/
https://www.thunderhead.com/accessibility/
https://www.thunderhead.com/sitemap/
https://www.thunderhead.com/terms-use-privacy/
https://www.thunderhead.com/system-requirements/`.split("\n");

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