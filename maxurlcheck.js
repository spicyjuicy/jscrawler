let host = `https://www.thebraintumourcharity.org`;

function getUrls(page) {
    let hrefReg = new RegExp(`<(?:[^<]+?)href=(?:"|')([^"']+?)(?:"|')(?:[^>]*)>`, `g`);
    let ex_url = page.match(hrefReg);
    let urls = ex_url.map(url => {
        hrefReg.lastIndex = 0;
        url = hrefReg.exec(url)[1];
        url[0] === '/' && (url = host + url);
        return url;
    });
    return urls;
}



//#region page
let urls = getUrls(`
<!DOCTYPE html>
<html lang="en">
    <head>
        <script>(function(o,n,e,t,a,g){var p=a+'/one/rt/js/one-tag.js?siteKey='+g,f=o.getElementsByTagName(n)[0],h=f.parentNode,l=o[e]('link'),s=o[e](n);l.rel='preload';l.href=p;l.as=n;s.id='thxTag';s.src=p;h[t](l,f);h[t](s,f);})(document,'script','createElement','insertBefore','https://eu2.thunderhead.com','ONE-F0X0OU0IUN-3972')</script>
    
        <meta charset="UTF-8">
        
        <title>Sitemap | The Brain Tumour Charity</title>
        
        <meta name="description" content="Visit our sitemap to find all the pages on our website. We&#39;re committed to fighting and defeating brain tumours.">
        
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><script type="text/javascript">window.NREUM||(NREUM={}),__nr_require=function(e,n,t){function r(t){if(!n[t]){var o=n[t]={exports:{}};e[t][0].call(o.exports,function(n){var o=e[t][1][n];return r(o||n)},o,o.exports)}return n[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<t.length;o++)r(t[o]);return r}({1:[function(e,n,t){function r(){}function o(e,n,t){return function(){return i(e,[c.now()].concat(u(arguments)),n?null:this,t),n?void 0:this}}var i=e("handle"),a=e(3),u=e(4),f=e("ee").get("tracer"),c=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],d="api-",l=d+"ixn-";a(p,function(e,n){s[n]=o(d+n,!0,"api")}),s.addPageAction=o(d+"addPageAction",!0),s.setCurrentRouteName=o(d+"routeName",!0),n.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,n){var t={},r=this,o="function"==typeof n;return i(l+"tracer",[c.now(),e,t],r),function(){if(f.emit((o?"":"no-")+"fn-start",[c.now(),r,o],t),o)try{return n.apply(this,arguments)}catch(e){throw f.emit("fn-err",[arguments,this,e],t),e}finally{f.emit("fn-end",[c.now()],t)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,n){m[n]=o(l+n)}),newrelic.noticeError=function(e){"string"==typeof e&&(e=new Error(e)),i("err",[e,c.now()])}},{}],2:[function(e,n,t){function r(e,n){if(!o)return!1;if(e!==o)return!1;if(!n)return!0;if(!i)return!1;for(var t=i.split("."),r=n.split("."),a=0;a<r.length;a++)if(r[a]!==t[a])return!1;return!0}var o=null,i=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var u=navigator.userAgent,f=u.match(a);f&&u.indexOf("Chrome")===-1&&u.indexOf("Chromium")===-1&&(o="Safari",i=f[1])}n.exports={agent:o,version:i,match:r}},{}],3:[function(e,n,t){function r(e,n){var t=[],r="",i=0;for(r in e)o.call(e,r)&&(t[i]=n(r,e[r]),i+=1);return t}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],4:[function(e,n,t){function r(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,o=t-n||0,i=Array(o<0?0:o);++r<o;)i[r]=e[n+r];return i}n.exports=r},{}],5:[function(e,n,t){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,n,t){function r(){}function o(e){function n(e){return e&&e instanceof r?e:e?f(e,u,i):i()}function t(t,r,o,i){if(!d.aborted||i){e&&e(t,r,o);for(var a=n(o),u=v(t),f=u.length,c=0;c<f;c++)u[c].apply(a,r);var p=s[y[t]];return p&&p.push([b,t,r,a]),a}}function l(e,n){h[e]=v(e).concat(n)}function m(e,n){var t=h[e];if(t)for(var r=0;r<t.length;r++)t[r]===n&&t.splice(r,1)}function v(e){return h[e]||[]}function g(e){return p[e]=p[e]||o(t)}function w(e,n){c(e,function(e,t){n=n||"feature",y[t]=n,n in s||(s[n]=[])})}var h={},y={},b={on:l,addEventListener:l,removeEventListener:m,emit:t,get:g,listeners:v,context:n,buffer:w,abort:a,aborted:!1};return b}function i(){return new r}function a(){(s.api||s.feature)&&(d.aborted=!0,s=d.backlog={})}var u="nr@context",f=e("gos"),c=e(3),s={},p={},d=n.exports=o();d.backlog=s},{}],gos:[function(e,n,t){function r(e,n,t){if(o.call(e,n))return e[n];var r=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,n,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return e[n]=r,r}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(e,n,t){function r(e,n,t,r){o.buffer([e],r),o.emit(e,n,t)}var o=e("ee").get("handle");n.exports=r,r.ee=o},{}],id:[function(e,n,t){function r(e){var n=typeof e;return!e||"object"!==n&&"function"!==n?-1:e===window?0:a(e,i,function(){return o++})}var o=1,i="nr@id",a=e("gos");n.exports=r},{}],loader:[function(e,n,t){function r(){if(!E++){var e=x.info=NREUM.info,n=l.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&n))return s.abort();c(y,function(n,t){e[n]||(e[n]=t)}),f("mark",["onload",a()+x.offset],null,"api");var t=l.createElement("script");t.src="https://"+e.agent,n.parentNode.insertBefore(t,n)}}function o(){"complete"===l.readyState&&i()}function i(){f("mark",["domContent",a()+x.offset],null,"api")}function a(){return O.exists&&performance.now?Math.round(performance.now()):(u=Math.max((new Date).getTime(),u))-x.offset}var u=(new Date).getTime(),f=e("handle"),c=e(3),s=e("ee"),p=e(2),d=window,l=d.document,m="addEventListener",v="attachEvent",g=d.XMLHttpRequest,w=g&&g.prototype;NREUM.o={ST:setTimeout,SI:d.setImmediate,CT:clearTimeout,XHR:g,REQ:d.Request,EV:d.Event,PR:d.Promise,MO:d.MutationObserver};var h=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1099.min.js"},b=g&&w&&w[m]&&!/CriOS/.test(navigator.userAgent),x=n.exports={offset:u,now:a,origin:h,features:{},xhrWrappable:b,userAgent:p};e(1),l[m]?(l[m]("DOMContentLoaded",i,!1),d[m]("load",r,!1)):(l[v]("onreadystatechange",o),d[v]("onload",r)),f("mark",["firstbyte",u],null,"api");var E=0,O=e(5)},{}]},{},["loader"]);</script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","queueTime":0,"licenseKey":"6a0e9d1882","agent":"","transactionName":"NgZaMkFTVhZVUUFfCQ9MfhNdUUwMW1waRQ8VBlUHQxxODFFFRgw1CBddC1JCbgxRRRtRAxU=","applicationID":"16345072","errorBeacon":"bam.nr-data.net","applicationTime":5547}</script>
        <meta name="format-detection" content="telephone=no" />
        <link rel="shortcut icon" href="https://assets.thebraintumourcharity.org/live/static/img/favicon.bca8ec8a8870.ico" type="image/x-icon">
        

        
        <link rel="stylesheet" href="https://assets.thebraintumourcharity.org/live/static/css/main.c839d318f233.css" type="text/css" media="all" />
        <link rel="stylesheet" href="https://assets.thebraintumourcharity.org/live/static/css/print.22cc14396f3c.css" type="text/css" media="print" />

        <meta name="p:domain_verify" content="f82a20d0a9bc7d51f0542624878eccff"/>

        
        
        <meta property="og:url" content="https://www.thebraintumourcharity.org/sitemap/" />
        <meta property="og:title" content="Sitemap | The Brain Tumour Charity" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Visit our sitemap to find all the pages on our website. We&#39;re committed to fighting and defeating brain tumours." />
        <meta property="og:image" content="https://assets.thebraintumourcharity.org/live/static/img/btc_logo_hi_res.74728883afd1.png" />

        

        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-34204774-3', 'auto');
            ga('send', 'pageview');
            setTimeout(
                    function(){
                        ga('send','event','Profitable Engagement','time on page more than 4 minutes')
                    },240000
            );
        </script>

        <!-- Inspectlet Embed Code -->
        <script type="text/javascript" id="inspectletjs">
            window.__insp = window.__insp || [];
            __insp.push(['wid', 2121677493]);
            (function() {
                function ldinsp(){if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js'; var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x);}
                setTimeout(ldinsp, 500); document.readyState != "complete" ? (window.attachEvent ? window.attachEvent('onload', ldinsp) : window.addEventListener('load', ldinsp, false)) : ldinsp();
            })();
        </script>

        <!-- Facebook Pixel Code -->
        <script>
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '183168412113910');
            fbq('track', 'PageView');
        </script>
        <noscript>
            <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=183168412113910&ev=PageView&noscript=1" />
        </noscript>
        <!-- End Facebook Pixel Code -->

        <!-- Start Visual Website Optimizer Asynchronous Code -->
        <script type='text/javascript'>
            var _vwo_code=(function(){
            var account_id=340849,
            settings_tolerance=2000,
            library_tolerance=2500,
            use_existing_jquery=false,
            /* DO NOT EDIT BELOW THIS LINE */
            f=false,d=document;return{use_existing_jquery:function(){return use_existing_jquery;},library_tolerance:function(){return library_tolerance;},finish:function(){if(!f){f=true;var a=d.getElementById('_vis_opt_path_hides');if(a)a.parentNode.removeChild(a);}},finished:function(){return f;},load:function(a){var b=d.createElement('script');b.src=a;b.type='text/javascript';b.innerText;b.onerror=function(){_vwo_code.finish();};d.getElementsByTagName('head')[0].appendChild(b);},init:function(){settings_timer=setTimeout('_vwo_code.finish()',settings_tolerance);var a=d.createElement('style'),b='body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}',h=d.getElementsByTagName('head')[0];a.setAttribute('id','_vis_opt_path_hides');a.setAttribute('type','text/css');if(a.styleSheet)a.styleSheet.cssText=b;else a.appendChild(d.createTextNode(b));h.appendChild(a);this.load('//dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&r='+Math.random());return settings_timer;}};}());_vwo_settings_timer=_vwo_code.init();
        </script>
        <!-- End Visual Website Optimizer Asynchronous Code -->

    </head>

    <body class="">
        
        <header id="site-header">
            
                <div class="upper">
    <div class="wrapper">
        <ul>
            
                <li><a href="https://www.thebraintumourcharity.org/media-centre/news/">News</a></li>
            
                <li><a href="https://shop.thebraintumourcharity.org/">Shop</a></li>
            
                <li><a href="https://www.thebraintumourcharity.org/media-centre/">Media Centre</a></li>
            
        </ul>
    </div>
</div>
            

            <div class="main wrapper">
                <a href="/" class="logo"><img src="https://assets.thebraintumourcharity.org/live/static/img/btc_logo_2x.35d3bed45c0a.png" alt="The official logo for The Brain Tumour Charity" /></a>
                
                
                
                <a href="https://thebraintumourcharity.safeandsecurewebservices.net/donate/" class="donate large-btn-clip">Donate</a>
                <a class="mobile-nav-open"></a>
            </div>

            <nav id="site-nav">
                <div id="mobile-search">
                    <div class="wrapper">
                        <form action="/search/" method="get">
                            <button type="submit" class="btn-clip"><img src="https://assets.thebraintumourcharity.org/live/static/img/mobile-search_2x.0eb11fe048f2.png" alt="Search The Brain Tumour Charity website using our search box" /></button>
                            <input id="search-q-box" type="text" placeholder="Search" class="btn-clip" name="q" value="" />
                        </form>
                    </div>
                </div>
                <div class="wrapper">
                    <ul>
                        <li id="mobile-donate" class="mobile-only"><a class="large-btn-clip" target="_blank" href="https://thebraintumourcharity.safeandsecurewebservices.net/donate/">Donate</a></li>

                        



    <li><a href="/">Home</a></li>





    <li class="parent">
        <a href="/our-research/">
            <span class="has_children"><span>+</span></span> <span>Our Research</span>
        </a>
        <div class="drop">
            <ul>
                



    <li class="parent">
        <a href="/our-research/a-cure-cant-wait/">
            <span class="has_children"><span>+</span></span> <span>A Cure Can&#39;t Wait</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/our-research/a-cure-cant-wait/early-diagnosis/">Early diagnosis</a></li>





    <li><a href="/our-research/a-cure-cant-wait/accelerating-progress/">Accelerating progress</a></li>





    <li><a href="/our-research/a-cure-cant-wait/understanding-tumour-growth/">Understanding tumour growth</a></li>





    <li><a href="/our-research/a-cure-cant-wait/enhancing-quality-life/">Enhancing quality of life</a></li>





    <li><a href="/our-research/a-cure-cant-wait/catalysing-new-treatments/">Catalysing new treatments</a></li>





    <li><a href="/our-research/a-cure-cant-wait/our-progress/">Our progress</a></li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/our-research/research-tumour-type/">
            <span class="has_children"><span>+</span></span> <span>Research by tumour type</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/our-research/research-tumour-type/diffuse-intrinsic-pontine-glioma/">Diffuse Intrinsic Pontine Glioma</a></li>





    <li><a href="/our-research/research-tumour-type/glioblastoma/">Glioblastoma research</a></li>





    <li><a href="/our-research/research-tumour-type/glioneuronal-brain-tumours/">Glioneuronal brain tumours</a></li>





    <li><a href="/our-research/research-tumour-type/high-grade-glioma/">High grade glioma research</a></li>





    <li><a href="/our-research/research-tumour-type/low-grade-gliomas/">Low grade glioma research</a></li>





    <li><a href="/our-research/research-tumour-type/medulloblastoma/">Medulloblastoma</a></li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/our-research/our-funding/">
            <span class="has_children"><span>+</span></span> <span>Our funding</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/our-research/our-funding/how-we-choose-what-to-fund/">How we choose what to fund</a></li>





    <li><a href="/our-research/our-funding/what-were-funding/">What we&#39;re funding</a></li>





    <li><a href="/our-research/our-funding/who-we-fund/">Who we fund</a></li>





    <li><a href="/our-research/our-funding/barriers-to-research/">Barriers to research</a></li>





    <li><a href="/our-research/our-funding/our-partnerships/">Our partnerships</a></li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/our-research/get-involved-in-research/">
            <span class="has_children"><span>+</span></span> <span>Get involved in research</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/our-research/get-involved-in-research/research-work-placement/">Research Work Placements</a></li>





    <li><a href="/our-research/get-involved-in-research/research-involvement-network/">Research Involvement Network</a></li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/our-research/for-researchers/">
            <span class="has_children"><span>+</span></span> <span>For researchers</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/our-research/for-researchers/funding-opportunities/">Funding opportunities</a></li>





    <li><a href="/our-research/for-researchers/manage-your-grant/">Manage your grant</a></li>





    <li><a href="/our-research/for-researchers/assessment-criteria/">Assessment criteria</a></li>





    <li><a href="/our-research/for-researchers/working-with-us/">Working with us</a></li>





    <li><a href="/our-research/for-researchers/patient-public-involvement/">Patient and public involvement</a></li>




            </ul>
        </div>
    </li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/understanding-brain-tumours/">
            <span class="has_children"><span>+</span></span> <span>Understanding Brain Tumours</span>
        </a>
        <div class="drop">
            <ul>
                



    <li class="parent">
        <a href="/understanding-brain-tumours/symptoms-and-information/">
            <span class="has_children"><span>+</span></span> <span>Symptoms and information</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/understanding-brain-tumours/symptoms-and-information/what-is-a-brain-tumour/">What is a brain tumour?</a></li>





    <li><a href="/understanding-brain-tumours/symptoms-and-information/adult-brain-tumour-symptoms/">Adult brain tumour symptoms</a></li>





    <li><a href="/understanding-brain-tumours/symptoms-and-information/child-brain-tumour-symptoms/">Child brain tumour symptoms</a></li>





    <li><a href="/understanding-brain-tumours/symptoms-and-information/brain-tumour-location-symptoms/">Brain tumour symptoms by location</a></li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/understanding-brain-tumours/getting-a-diagnosis/">
            <span class="has_children"><span>+</span></span> <span>Getting a diagnosis</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/understanding-brain-tumours/getting-a-diagnosis/how-brain-tumours-are-diagnosed/">How brain tumours are diagnosed</a></li>





    <li><a href="/understanding-brain-tumours/getting-a-diagnosis/how-brain-tumours-are-graded/">How brain tumours are graded</a></li>





    <li><a href="/understanding-brain-tumours/getting-a-diagnosis/scans-adults/">Scans (adults)</a></li>





    <li><a href="/understanding-brain-tumours/getting-a-diagnosis/scans-children/">Scans (children)</a></li>





    <li><a href="/understanding-brain-tumours/getting-a-diagnosis/biomarkers/">Biomarkers</a></li>





    <li><a href="/understanding-brain-tumours/getting-a-diagnosis/prognosis/">Prognosis</a></li>





    <li><a href="/understanding-brain-tumours/getting-a-diagnosis/brian/">BRIAN: The brain tumour databank</a></li>




            </ul>
        </div>
    </li>





    <li><a href="/understanding-brain-tumours/what-to-do-brain-tumour-diagnosis/">What to do after diagnosis</a></li>





    <li class="parent">
        <a href="/understanding-brain-tumours/types-of-brain-tumour-adult/">
            <span class="has_children"><span>+</span></span> <span>Adult brain tumour types</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/glioblastoma/">Glioblastoma</a></li>





    <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/astrocytoma/">Astrocytoma</a></li>





    <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/pituitary-adenoma/">Pituitary adenoma</a></li>





    <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/acoustic-neuroma-vestibular-schwannoma/">Acoustic neuroma</a></li>





    <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/meningioma/">Meningioma</a></li>





    <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/oligodendroglioma/">Oligodendroglioma</a></li>





    <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/haemangioblastoma/">Haemangioblastoma</a></li>





    <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/cns-lymphoma/">CNS lymphoma</a></li>





    <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/unspecified-glioma/">Unspecified glioma</a></li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/understanding-brain-tumours/types-brain-tumour-children/">
            <span class="has_children"><span>+</span></span> <span>Child brain tumour types</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/understanding-brain-tumours/types-brain-tumour-children/medulloblastoma/">Medulloblastoma</a></li>





    <li><a href="/understanding-brain-tumours/types-brain-tumour-children/dipg-diffuse-intrinsic-pontine-glioma/">DIPG</a></li>





    <li><a href="/understanding-brain-tumours/types-brain-tumour-children/ependymoma/">Ependymoma</a></li>





    <li><a href="/understanding-brain-tumours/types-brain-tumour-children/craniopharyngioma/">Craniopharyngioma</a></li>





    <li><a href="/understanding-brain-tumours/types-brain-tumour-children/embryonal-tumours/">Embryonal tumours</a></li>





    <li><a href="/understanding-brain-tumours/types-brain-tumour-children/pineoblastoma/">Pineoblastoma</a></li>





    <li><a href="/understanding-brain-tumours/types-brain-tumour-children/brainstem-glioma/">Brainstem glioma</a></li>





    <li><a href="/understanding-brain-tumours/types-brain-tumour-children/choroid-plexus-carcinoma/">Choroid plexus carcinoma</a></li>





    <li><a href="/understanding-brain-tumours/types-brain-tumour-children/germ-cell-tumours/">Germ cell tumour</a></li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/understanding-brain-tumours/clinical-trials/">
            <span class="has_children"><span>+</span></span> <span>Clinical trials</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/understanding-brain-tumours/clinical-trials/about-clinical-trials/">About clinical trials</a></li>





    <li><a href="/understanding-brain-tumours/clinical-trials/adaptive-clinical-trial/">Adaptive clinical trials</a></li>





    <li><a href="/understanding-brain-tumours/clinical-trials/clinical-trials-take-part/">Take part in a clinical trial</a></li>





    <li><a href="/understanding-brain-tumours/clinical-trials/clinical-trials-and-research-info-line/">Clinical trials and research info line</a></li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/understanding-brain-tumours/treating-brain-tumours/">
            <span class="has_children"><span>+</span></span> <span>Treating brain tumours</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/">Treatments for adults</a></li>





    <li><a href="/understanding-brain-tumours/treating-brain-tumours/child-treatments/">Treatments for children</a></li>





    <li><a href="/understanding-brain-tumours/treating-brain-tumours/complementary-therapies/">Complementary therapies</a></li>





    <li><a href="/understanding-brain-tumours/treating-brain-tumours/emerging-treatments/">Emerging treatments</a></li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/understanding-brain-tumours/navigating-the-system/">
            <span class="has_children"><span>+</span></span> <span>Navigating the system</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/understanding-brain-tumours/navigating-the-system/how-the-nhs-works/">How the NHS works</a></li>





    <li><a href="/understanding-brain-tumours/navigating-the-system/your-health-team-mdt/">Your health team (MDT)</a></li>





    <li><a href="/understanding-brain-tumours/navigating-the-system/your-childs-health-team-mdt/">Your child&#39;s health team (MDT)</a></li>





    <li><a href="/understanding-brain-tumours/navigating-the-system/getting-a-second-opinion/">Getting a second opinion</a></li>





    <li><a href="/understanding-brain-tumours/navigating-the-system/questions-to-ask/">Questions to ask</a></li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/understanding-brain-tumours/living-with-a-brain-tumour/">
            <span class="has_children"><span>+</span></span> <span>Living with a brain tumour</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/side-effects/">Side effects</a></li>





    <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/being-a-carer/">Being a carer</a></li>





    <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/travel-and-driving/">Travel and driving</a></li>





    <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/employment-and-brain-tumours/">Employment and brain tumours</a></li>





    <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/finances-and-government-benefits/">Finances and government benefits</a></li>





    <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/diet-nutrition/">Diet and nutrition</a></li>





    <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/getting-your-affairs-order/">Getting your affairs in order</a></li>





    <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/what-do-following-terminal-brain-tumour-diagnosis/">Terminal Diagnosis</a></li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/understanding-brain-tumours/resources/">
            <span class="has_children"><span>+</span></span> <span>Resources</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/understanding-brain-tumours/resources/jargon-buster/">Jargon buster</a></li>





    <li><a href="/understanding-brain-tumours/resources/books/">Books</a></li>





    <li><a href="/understanding-brain-tumours/resources/blogs/">Blogs</a></li>





    <li><a href="/understanding-brain-tumours/resources/animations-explaining-brain-tumours/">Animations explaining brain tumours</a></li>




            </ul>
        </div>
    </li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/get-support/">
            <span class="has_children"><span>+</span></span> <span>Get Support</span>
        </a>
        <div class="drop">
            <ul>
                



    <li class="parent">
        <a href="/get-support/support-groups/">
            <span class="has_children"><span>+</span></span> <span>Local support groups</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/get-support/support-groups/support-groups-list/">Local support groups list</a></li>





    <li><a href="/get-support/support-groups/member-led-support-group/">Run a local Support Group</a></li>





    <li><a href="/get-support/support-groups/phone-support-groups/">Phone Support Groups</a></li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/get-support/support-and-info-line/">
            <span class="has_children"><span>+</span></span> <span>Support and Info Line</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/get-support/support-and-info-line/benefits-clinic/">Benefits clinic</a></li>




            </ul>
        </div>
    </li>





    <li><a href="/get-support/young-adult-service/">Young Adults Service</a></li>





    <li class="parent">
        <a href="/get-support/children-and-families-service/">
            <span class="has_children"><span>+</span></span> <span>Children and Families Service</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/get-support/children-and-families-service/family-days/">Family Days</a></li>





    <li><a href="/get-support/children-and-families-service/education-resources/">Education resources</a></li>





    <li><a href="https://www.thebraintumourcharity.org/understanding-brain-tumours/resources/animations-explaining-brain-tumours/">Animations for children</a></li>





    <li><a href="/get-support/children-and-families-service/brainy-bag-order-form/">The Brainy Bag</a></li>





    <li><a href="/get-support/children-and-families-service/poems-for-young-children-with-brain-tumours/">Poems for children</a></li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/get-support/online-support/">
            <span class="has_children"><span>+</span></span> <span>Online support</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/get-support/online-support/facebook-support-groups/">Facebook Support Groups</a></li>





    <li><a href="/get-support/online-support/live-discussions/">Live discussions</a></li>





    <li><a href="/get-support/online-support/live-chat/">Live Chat</a></li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/get-support/for-healthcare-professionals/">
            <span class="has_children"><span>+</span></span> <span>Healthcare professionals</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/get-support/for-healthcare-professionals/brain-tumour-information-request/">Brain tumour information request</a></li>





    <li><a href="/get-support/for-healthcare-professionals/learning-resources/">Learning resources</a></li>




            </ul>
        </div>
    </li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/get-involved/">
            <span class="has_children"><span>+</span></span> <span>Get Involved</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/get-involved/events/">Take part in an event</a></li>





    <li class="parent">
        <a href="/get-involved/donate/">
            <span class="has_children"><span>+</span></span> <span>Make a donation</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/get-involved/donate/impact-your-money-makes/">The impact your money makes</a></li>





    <li><a href="/get-involved/donate/get-money-to-us/">Getting money to us</a></li>





    <li><a href="/get-involved/donate/leave-us-a-gift-in-your-will/">Leave a gift in your Will</a></li>





    <li><a href="/get-involved/donate/give-memory/">Give in memory</a></li>





    <li><a href="/get-involved/donate/other-ways-give/">Other ways to give</a></li>





    <li><a href="/get-involved/donate/trusts-and-foundations/">Trusts and Foundations</a></li>





    <li><a href="/get-involved/donate/co-fund-with-us/">Co-fund with us</a></li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/get-involved/fundraise-for-us/">
            <span class="has_children"><span>+</span></span> <span>Fundraise for us</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/get-involved/fundraise-for-us/ideas-generator/">Fundraising ideas</a></li>





    <li><a href="/get-involved/fundraise-for-us/get-your-school-college-or-uni-involved/">Get your school involved</a></li>





    <li><a href="/get-involved/fundraise-for-us/fundraise-at-work/">Fundraise at work</a></li>





    <li><a href="/get-involved/fundraise-for-us/fundraising-hints-and-tips/">Fundraising hints and tips</a></li>





    <li><a href="/get-involved/fundraise-for-us/meet-your-community-team/">Meet your community team </a></li>





    <li><a href="/get-involved/fundraise-for-us/fundraising-and-events-form/">Tell us your plans</a></li>





    <li><a href="/get-involved/fundraise-for-us/resources-fundraisers/">Fundraising resources</a></li>




            </ul>
        </div>
    </li>





    <li><a href="/get-involved/our-supporter-groups/">Our Supporter Groups</a></li>





    <li class="parent">
        <a href="/get-involved/how-your-company-can-help/">
            <span class="has_children"><span>+</span></span> <span>How your company can help</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/get-involved/how-your-company-can-help/partner-with-us/">Partner with us</a></li>





    <li><a href="/get-involved/how-your-company-can-help/ways-to-support-us/">Ways to support us</a></li>





    <li><a href="/get-involved/how-your-company-can-help/our-partners/">Our partners</a></li>




            </ul>
        </div>
    </li>





    <li><a href="/get-involved/volunteering/">Volunteering</a></li>





    <li class="parent">
        <a href="/get-involved/share-your-story/">
            <span class="has_children"><span>+</span></span> <span>Share your story</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/get-involved/share-your-story/share/">Share</a></li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/get-involved/campaigning-for-change/">
            <span class="has_children"><span>+</span></span> <span>Campaigning for change</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/get-involved/campaigning-for-change/what-were-campaigning/">What we&#39;re campaigning for</a></li>





    <li><a href="/get-involved/campaigning-for-change/campaign-with-us/">Campaign with us</a></li>




            </ul>
        </div>
    </li>




            </ul>
        </div>
    </li>





    <li class="parent">
        <a href="/about-us/">
            <span class="has_children"><span>+</span></span> <span>About Us</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/about-us/our-vision/">Our vision</a></li>





    <li><a href="/about-us/our-strategy/">Our strategy</a></li>





    <li class="parent">
        <a href="/about-us/who-we-are/">
            <span class="has_children"><span>+</span></span> <span>Who we are</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/about-us/who-we-are/our-history/">Our history</a></li>





    <li><a href="/about-us/who-we-are/senior-leadership-team/">Senior Leadership Team</a></li>





    <li><a href="/about-us/who-we-are/our-trustees/">Our Trustees</a></li>





    <li><a href="/about-us/who-we-are/scientific-advisors/">Our Advisors</a></li>





    <li><a href="/about-us/who-we-are/our-young-ambassadors/">Young Ambassadors</a></li>




            </ul>
        </div>
    </li>





    <li><a href="/about-us/why-choose-us/">Why choose us</a></li>





    <li><a href="/about-us/join-the-team/">Join the team</a></li>





    <li><a href="/about-us/our-high-profile-supporters/">Our high profile supporters</a></li>





    <li class="parent">
        <a href="/about-us/our-publications/">
            <span class="has_children"><span>+</span></span> <span>Our publications</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/about-us/our-publications/losing-myself-reality-life-brain-tumour/">Losing Myself</a></li>





    <li><a href="/about-us/our-publications/finding-myself/">Finding Myself in Your Hands</a></li>





    <li><a href="/about-us/our-publications/losing-my-place-reality-childhood-brain-tumour/">Losing My Place</a></li>





    <li><a href="https://www.thebraintumourcharity.org/our-research/a-cure-cant-wait/">A Cure Can&#39;t Wait: Our Research Strategy</a></li>





    <li><a href="/about-us/our-publications/grey-matters/">The Grey Matters</a></li>





    <li><a href="/about-us/our-publications/research-impact-report/">Research Impact Report</a></li>





    <li><a href="/about-us/our-publications/price-you-pay/">The Price You Pay</a></li>




            </ul>
        </div>
    </li>





    <li><a href="/about-us/annual-report-and-accounts/">Annual report and accounts</a></li>





    <li><a href="/about-us/partners-and-links/">Partners and links</a></li>





    <li class="parent">
        <a href="/about-us/our-accreditations/">
            <span class="has_children"><span>+</span></span> <span>Our accreditations</span>
        </a>
        <div class="drop">
            <ul>
                



    <li><a href="/about-us/our-accreditations/information-standard/">The Information Standard</a></li>




            </ul>
        </div>
    </li>





    <li><a href="/about-us/contact/">Contact us</a></li>




            </ul>
        </div>
    </li>




                        <li id="search">
                            <a href="#">Search</a>

                            <div class="drop">
                                <form action="/search/" method="get">
                                    <input type="text" placeholder="Search" class="btn-clip" name="q" value="" />
                                    <button type="submit" class="btn-clip">Go</button>
                                </form>
                            </div>
                        </li>

                        <li class="mobile-only"><a href="/media-centre/news/">News</a></li>
                        <li class="mobile-only"><a target="_blank" href="https://shop.thebraintumourcharity.org/">Shop</a></li>
                        <li class="mobile-only"><a href="/media-centre/">Media Centre</a></li>
                    </ul>
                </div>
            </nav>
        </header>

        
        <nav id="breadcrumb" class="dark">
            
<ul class="wrapper">
    <li class="previous"><span class="back">&laquo;</span><a href="/">Home</a> <span>&raquo;</span></li>
    <li class="active">Sitemap</li>
</ul>

        </nav>
        

        
            <div id="share-bar">
                <a target="_blank" title="Share this on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.thebraintumourcharity.org/sitemap/" class="facebook"></a>
                <a target="_blank" title="Share this on Twitter" href="https://twitter.com/intent/tweet?url=https%3A//www.thebraintumourcharity.org/sitemap/" class="twitter"></a>
                <a target="_blank" title="Share this on Pinterest" href="https://pinterest.com/pin/create/button/?url=https%3A//www.thebraintumourcharity.org/sitemap/?status=https%3A//www.thebraintumourcharity.org/sitemap/" class="pinterest"></a>
                <a target="_blank" title="Share this on LinkedIn" href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.thebraintumourcharity.org/sitemap/&title=&summary=&source=https%3A//www.thebraintumourcharity.org/sitemap/" class="linkedin"></a>
                <a href="javascript:window.print()" title="Print this page" class="print"></a>
                <a href="#" class="bookmark" title="Bookmark this page"></a>
            </div>
        

        <main>
            
    <div id="top" class="content-block text-block">
        <div class="wrapper">
            <h1>Sitemap</h1>

            <ul id="sitemap-nav" class="unstyled">
                <li><a href="#pages">Pages</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#stories">Stories</a></li>
                <li><a href="#support-groups">Support Groups</a></li>
                <li><a href="#supporters">Supporters</a></li>
            </ul>
        </div>
    </div>

    
    <div id="pages" class="content-block text-block sitemap-listing">
        <div class="wrapper">
            <h2>Pages <a href="#top" class="btn large-btn-clip">Back to top</a></h2>

            <ul>
                
                <li><a href="/">Home</a></li>
                
                <li><a href="/our-research/">Our Research</a></li>
                
                <li><a href="/our-research/new-research/">Our new research: 4.3 million</a></li>
                
                <li><a href="/our-research/a-cure-cant-wait/">A Cure Can&#39;t Wait</a></li>
                
                <li><a href="/our-research/a-cure-cant-wait/early-diagnosis/">Early diagnosis</a></li>
                
                <li><a href="/our-research/a-cure-cant-wait/early-diagnosis/adult-brain-tumour-diagnosis-pathway/">Adult Brain Tumour Diagnosis Pathway</a></li>
                
                <li><a href="/our-research/a-cure-cant-wait/accelerating-progress/">Accelerating progress</a></li>
                
                <li><a href="/our-research/a-cure-cant-wait/understanding-tumour-growth/">Understanding tumour growth</a></li>
                
                <li><a href="/our-research/a-cure-cant-wait/enhancing-quality-life/">Enhancing quality of life</a></li>
                
                <li><a href="/our-research/a-cure-cant-wait/catalysing-new-treatments/">Catalysing new treatments</a></li>
                
                <li><a href="/our-research/a-cure-cant-wait/our-progress/">Our progress</a></li>
                
                <li><a href="/our-research/a-cure-cant-wait/our-progress/the-research-impact-report/">The Research Impact Report</a></li>
                
                <li><a href="/our-research/biobanking-initiative/">Biobanking Initiative</a></li>
                
                <li><a href="/our-research/research-tumour-type/">Research by tumour type</a></li>
                
                <li><a href="/our-research/research-tumour-type/diffuse-intrinsic-pontine-glioma/">Diffuse Intrinsic Pontine Glioma Research</a></li>
                
                <li><a href="/our-research/research-tumour-type/diffuse-intrinsic-pontine-glioma/testing-new-drugs-in-children-with-high-grade-brain-tumours/">New drugs for childhood high grade brain tumours</a></li>
                
                <li><a href="/our-research/research-tumour-type/diffuse-intrinsic-pontine-glioma/h33-unravelling-the-role-of-this-protein-in-paediatric-dipg/">H3.3 - unravelling the role of this protein in paediatric DIPG</a></li>
                
                <li><a href="/our-research/research-tumour-type/glioblastoma/">Glioblastoma Research</a></li>
                
                <li><a href="/our-research/research-tumour-type/glioblastoma/beating-therapy-resistance-with-fluorescent-dye/">Beating therapy resistance with fluorescent dye</a></li>
                
                <li><a href="/our-research/research-tumour-type/glioblastoma/a-new-mouse-model-to-defeat-glioblastoma/">A new mouse model to defeat glioblastoma</a></li>
                
                <li><a href="/our-research/research-tumour-type/glioblastoma/shutting-down-the-energy-generators-in-brain-tumours/">Shutting down the energy generators in brain tumours </a></li>
                
                <li><a href="/our-research/research-tumour-type/glioblastoma/daxx-a-new-target-for-brain-tumour-drugs/">DAXX – a new target for brain tumour drugs</a></li>
                
                <li><a href="/our-research/research-tumour-type/glioblastoma/predicting-patient-survival-new-method-of-mri/">Predicting patient survival - a new method of MRI</a></li>
                
                <li><a href="/our-research/research-tumour-type/glioblastoma/boosting-immunity-to-beat-brain-tumours/">Boosting immunity to beat brain tumours</a></li>
                
                <li><a href="/our-research/research-tumour-type/glioneuronal-brain-tumours/">Glioneuronal brain tumour research</a></li>
                
                <li><a href="/our-research/research-tumour-type/glioneuronal-brain-tumours/fingerprinting-paediatric-glioneuronal-brain-tumours/">‘Fingerprinting’ paediatric glioneuronal brain tumours</a></li>
                
                <li><a href="/our-research/research-tumour-type/high-grade-glioma/">High grade glioma research</a></li>
                
                <li><a href="/our-research/research-tumour-type/high-grade-glioma/unwrapping-genes-to-find-new-treatments/">Unwrapping Genes To Find New Treatments</a></li>
                
                <li><a href="/our-research/research-tumour-type/high-grade-glioma/cancer-killing-viruses/">Cancer-killing viruses</a></li>
                
                <li><a href="/our-research/research-tumour-type/low-grade-gliomas/">Low grade glioma research</a></li>
                
                <li><a href="/our-research/research-tumour-type/low-grade-gliomas/seeking-patterns-in-low-grade-gliomas/">Seeking patterns in low grade glioma</a></li>
                
                <li><a href="/our-research/research-tumour-type/low-grade-gliomas/uncovering-the-role-of-fusion-genes/">Uncovering the role of fusion genes</a></li>
                
                <li><a href="/our-research/research-tumour-type/low-grade-gliomas/unlocking-the-origins-of-low-grade-gliomas/">Unlocking the origins of low grade gliomas</a></li>
                
                <li><a href="/our-research/research-tumour-type/low-grade-gliomas/testing-a-new-drug-combination-for-young-people-with-low-grade-brain-tumours/">Testing new drugs in childhood low-grade gliomas</a></li>
                
                <li><a href="/our-research/research-tumour-type/low-grade-gliomas/impact-of-the-headsmart-early-diagnosis-campaign/">Impact of the HeadSmart Early Diagnosis Campaign</a></li>
                
                <li><a href="/our-research/research-tumour-type/low-grade-gliomas/scanning-to-identify-the-best-treatments-for-each-child/">Scanning To Identify The Best Treatments For Each Child</a></li>
                
                <li><a href="/our-research/research-tumour-type/medulloblastoma/">Medulloblastoma research</a></li>
                
                <li><a href="/our-research/research-tumour-type/medulloblastoma/new-treatments-trialled-for-children-with-medulloblastoma-brain-tumours/">New treatments trialled for children with medulloblastoma</a></li>
                
                <li><a href="/our-research/research-tumour-type/medulloblastoma/medulloblastoma-new-drug-targets/">Medulloblastoma  - new models may be key to new drug treatments</a></li>
                
                <li><a href="/our-research/research-tumour-type/medulloblastoma/finding-new-treatments-for-aggressive-childhood-brain-tumours/">Finding New Treatments for Aggressive Childhood Brain Tumours</a></li>
                
                <li><a href="/our-research/research-tumour-type/brain-metastases/">Brain metastases</a></li>
                
                <li><a href="/our-research/research-tumour-type/brain-metastases/radiotherapy-and-blood-brain-barrier/">Radiotherapy and blood brain barrier</a></li>
                
                <li><a href="/our-research/research-tumour-type/brain-metastases/delivering-chemotherapy-directly-brain/">Delivering chemotherapy directly to the brain</a></li>
                
                <li><a href="/our-research/research-tumour-type/brain-metastases/targeted-radiotherapy-reduce-impact-memory/">Targeted radiotherapy to reduce impact on memory</a></li>
                
                <li><a href="/our-research/our-funding/">Our funding</a></li>
                
                <li><a href="/our-research/our-funding/how-we-choose-what-to-fund/">How we choose what to fund</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/">What we&#39;re funding</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/everest-centre/">The Everest Centre</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/everest-centre/everest-challenge/">Everest in the Alps</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/everest-centre/second-ascent-teams/">The second ascent teams</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/quest-cures-2016/">Quest for Cures 2016</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/quest-cures-2017/">Quest for Cures 2017</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/quality-life-awards/">Quality of Life 2016</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/quality-life-2017/">Quality of Life 2017</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/new-ideas-2016/">New Ideas 2016</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/new-ideas-2017/">New Ideas 2017</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/sgc/">Partnering with the SGC</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/pnet5-trial/">PNET5: transforming treatments for childhood brain tumours</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/clinical-research-fellowship/">Clinical Research Fellowship</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/understanding-role-transcription-factors-tumour-development/">Understanding the role of transcription factors in tumour development</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/using-nanobiopsy-characterise-tumour-cells/">Using nanobiopsy to characterise tumour cells</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/mapping-biomarkers-low-grade-tumour-using-mri/">Mapping biomarkers for low-grade tumours using a MRI</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/preventing-resistance-targeted-therapies/">Preventing resistance to targeted therapies</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/identifying-directed-therapies-adamantinomatous-craniopharyngiom/">Identifying directed therapies for Adamantinomatous Craniopharyngioma (ACP)</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/medulloblastoma-epigenome-regulation-treatment-merit/">Medulloblastoma Epigenome Regulation in Treatment (MERIT)</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/understanding-origins-medulloblastoma-subroups/">Understanding the origins of medulloblastoma subroups</a></li>
                
                <li><a href="/our-research/our-funding/what-were-funding/tessa-jowell-brain-matrix/">Tessa Jowell BRAIN MATRIX</a></li>
                
                <li><a href="/our-research/our-funding/who-we-fund/">Who we fund</a></li>
                
                <li><a href="/our-research/our-funding/who-we-fund/qa-with-dr-jason-adhikaree/">Q&amp;A with Dr Jason Adhikaree</a></li>
                
                <li><a href="/our-research/our-funding/who-we-fund/qa-with-dr-sylvia-kocialkowski/">Q&amp;A with Dr Sylvia Kocialkowski</a></li>
                
                <li><a href="/our-research/our-funding/who-we-fund/qa-with-professor-sebastian-brandner/">Q&amp;A with Professor Sebastian Brandner</a></li>
                
                <li><a href="/our-research/our-funding/who-we-fund/q-a-with-professor-denise-sheer/">Q&amp;A with Professor Denise Sheer</a></li>
                
                <li><a href="/our-research/our-funding/who-we-fund/qa-with-dr-daniel-tennant/">Q&amp;A with Dr Daniel Tennant</a></li>
                
                <li><a href="/our-research/our-funding/who-we-fund/qa-with-dr-david-michod/">Q&amp;A with Dr David Michod</a></li>
                
                <li><a href="/our-research/our-funding/who-we-fund/q-dr-janet-lindsay/">Q&amp;A with Dr Janet Lindsay</a></li>
                
                <li><a href="/our-research/our-funding/who-we-fund/q-dr-erica-wilson/">Q&amp;A with Dr Erica Wilson</a></li>
                
                <li><a href="/our-research/our-funding/who-we-fund/q-dr-paul-brennan/">Q&amp;A with Dr Paul Brennan</a></li>
                
                <li><a href="/our-research/our-funding/who-we-fund/q-professor-richard-gilbertson/">Q&amp;A with Professor Richard Gilbertson</a></li>
                
                <li><a href="/our-research/our-funding/who-we-fund/q-dr-david-walker/">Q &amp; A with Dr David Walker</a></li>
                
                <li><a href="/our-research/our-funding/barriers-to-research/">Barriers to research</a></li>
                
                <li><a href="/our-research/our-funding/our-partnerships/">Our partnerships</a></li>
                
                <li><a href="/our-research/get-involved-in-research/">Get involved in research</a></li>
                
                <li><a href="/our-research/get-involved-in-research/research-work-placement/">Research Work Placements</a></li>
                
                <li><a href="/our-research/get-involved-in-research/scientific-advisory-board/">Scientific Advisory Board</a></li>
                
                <li><a href="/our-research/get-involved-in-research/research-involvement-network/">Research Involvement Network</a></li>
                
                <li><a href="/our-research/get-involved-in-research/research-involvement-network-application-form/">Research Involvement Network application form</a></li>
                
                <li><a href="/our-research/for-researchers/">For researchers</a></li>
                
                <li><a href="/our-research/for-researchers/funding-opportunities/">Funding opportunities</a></li>
                
                <li><a href="/our-research/for-researchers/funding-opportunities/paediatric-low-grade-research-centre/">Research and Innovation Centre for Paediatric Low Grade Brain Tumours</a></li>
                
                <li><a href="/our-research/for-researchers/funding-opportunities/quest-for-cures-collaborative-discovery-teams/">Quest for Cures: Collaborative Discovery Teams</a></li>
                
                <li><a href="/our-research/for-researchers/funding-opportunities/new-ideas-awards/">New Ideas Awards</a></li>
                
                <li><a href="/our-research/for-researchers/funding-opportunities/expanding-theories/">Expanding Theories</a></li>
                
                <li><a href="/our-research/for-researchers/funding-opportunities/quality-of-life-call/">Quality of Life Call</a></li>
                
                <li><a href="/our-research/for-researchers/funding-opportunities/conferences-and-workshops/">Conferences and Workshops</a></li>
                
                <li><a href="/our-research/for-researchers/funding-opportunities/clinical-trials/">Clinical Trials</a></li>
                
                <li><a href="/our-research/for-researchers/funding-opportunities/clinical-research-training-fellowships/">Clinical Research Training Fellowships</a></li>
                
                <li><a href="/our-research/for-researchers/funding-opportunities/clinical-biomarkers-awards/">Clinical Biomarkers Awards</a></li>
                
                <li><a href="/our-research/for-researchers/funding-opportunities/future-leaders/">Future Leaders</a></li>
                
                <li><a href="/our-research/for-researchers/funding-opportunities/palliative-care/">Palliative Care</a></li>
                
                <li><a href="/our-research/for-researchers/funding-opportunities/glioma-clinical-trial/">Glioma Clinical Trial</a></li>
                
                <li><a href="/our-research/for-researchers/manage-your-grant/">Manage your grant</a></li>
                
                <li><a href="/our-research/for-researchers/assessment-criteria/">Assessment criteria</a></li>
                
                <li><a href="/our-research/for-researchers/working-with-us/">Working with us</a></li>
                
                <li><a href="/our-research/for-researchers/grant-review-and-monitoring-committee/">Grant Review and Monitoring committee</a></li>
                
                <li><a href="/our-research/for-researchers/patient-public-involvement/">Patient and public involvement</a></li>
                
                <li><a href="/our-research/research-answer-question-you/">Research is the answer. The question is up to you</a></li>
                
                <li><a href="/understanding-brain-tumours/">Understanding Brain Tumours</a></li>
                
                <li><a href="/understanding-brain-tumours/symptoms-and-information/">Symptoms and information</a></li>
                
                <li><a href="/understanding-brain-tumours/symptoms-and-information/what-is-a-brain-tumour/">What is a brain tumour?</a></li>
                
                <li><a href="/understanding-brain-tumours/symptoms-and-information/what-causes-brain-tumours/">What causes brain tumours?</a></li>
                
                <li><a href="/understanding-brain-tumours/symptoms-and-information/adult-brain-tumour-symptoms/">Symptoms of a brain tumour in adults</a></li>
                
                <li><a href="/understanding-brain-tumours/symptoms-and-information/adult-brain-tumour-symptoms/headaches/">Headaches</a></li>
                
                <li><a href="/understanding-brain-tumours/symptoms-and-information/adult-brain-tumour-symptoms/changes-vision/">Changes in vision</a></li>
                
                <li><a href="/understanding-brain-tumours/symptoms-and-information/child-brain-tumour-symptoms/">Symptoms of a brain tumour in children</a></li>
                
                <li><a href="/understanding-brain-tumours/symptoms-and-information/brain-tumour-location-symptoms/">Brain tumour symptoms by location</a></li>
                
                <li><a href="/understanding-brain-tumours/symptoms-and-information/childhood-brain-tumours/">Childhood brain tumours</a></li>
                
                <li><a href="/understanding-brain-tumours/symptoms-and-information/the-human-brain/">The human brain</a></li>
                
                <li><a href="/understanding-brain-tumours/symptoms-and-information/brain-cells/">Brain cells</a></li>
                
                <li><a href="/understanding-brain-tumours/symptoms-and-information/immune-system/">The Immune System</a></li>
                
                <li><a href="/understanding-brain-tumours/symptoms-and-information/symptoms/">Symptoms of a brain tumour</a></li>
                
                <li><a href="/understanding-brain-tumours/getting-a-diagnosis/">Getting a diagnosis</a></li>
                
                <li><a href="/understanding-brain-tumours/getting-a-diagnosis/how-brain-tumours-are-diagnosed/">How brain tumours are diagnosed</a></li>
                
                <li><a href="/understanding-brain-tumours/getting-a-diagnosis/how-brain-tumours-are-graded/">How brain tumours are graded</a></li>
                
                <li><a href="/understanding-brain-tumours/getting-a-diagnosis/scans-adults/">Scans (adults)</a></li>
                
                <li><a href="/understanding-brain-tumours/getting-a-diagnosis/scans-children/">Scans (children)</a></li>
                
                <li><a href="/understanding-brain-tumours/getting-a-diagnosis/biomarkers/">Biomarkers</a></li>
                
                <li><a href="/understanding-brain-tumours/getting-a-diagnosis/prognosis/">Prognosis</a></li>
                
                <li><a href="/understanding-brain-tumours/getting-a-diagnosis/prognosis/prognosis-specific-brain-tumours/">Prognosis for specific brain tumours</a></li>
                
                <li><a href="/understanding-brain-tumours/getting-a-diagnosis/brian/">Be part of BRIAN</a></li>
                
                <li><a href="/understanding-brain-tumours/getting-a-diagnosis/brian/expression-interest/">Expression of interest</a></li>
                
                <li><a href="/understanding-brain-tumours/getting-a-diagnosis/brian/brian-survey-thank-you/">BRIAN Survey Thank You</a></li>
                
                <li><a href="/understanding-brain-tumours/getting-a-diagnosis/brian/brian-patient-information-sheets/">BRIAN Patient Information Sheets</a></li>
                
                <li><a href="/understanding-brain-tumours/getting-a-diagnosis/brain-tumour-databank/">The brain tumour databank</a></li>
                
                <li><a href="/understanding-brain-tumours/getting-a-diagnosis/brain-tumour-databank/brain-tumour-databank-discussion-group/">Brain tumour databank discussion group</a></li>
                
                <li><a href="/understanding-brain-tumours/what-to-do-brain-tumour-diagnosis/">What to do after a brain tumour diagnosis</a></li>
                
                <li><a href="/understanding-brain-tumours/what-to-do-brain-tumour-diagnosis/brain-tumour-information-pack/">Brain Tumour information pack</a></li>
                
                <li><a href="/understanding-brain-tumours/newly-diagnosed/brain-tumour-information-pack/brain-tumour-information-pack-request-success/">Brain Tumour Information Pack Request Success</a></li>
                
                <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/">Types of brain tumour (adult)</a></li>
                
                <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/glioblastoma/">Glioblastoma</a></li>
                
                <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/astrocytoma/">Astrocytoma</a></li>
                
                <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/pituitary-adenoma/">Pituitary adenoma</a></li>
                
                <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/acoustic-neuroma-vestibular-schwannoma/">Acoustic neuroma</a></li>
                
                <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/meningioma/">Meningioma</a></li>
                
                <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/oligodendroglioma/">Oligodendroglioma</a></li>
                
                <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/haemangioblastoma/">Haemangioblastoma</a></li>
                
                <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/cns-lymphoma/">CNS lymphoma</a></li>
                
                <li><a href="/understanding-brain-tumours/types-of-brain-tumour-adult/unspecified-glioma/">Unspecified glioma</a></li>
                
                <li><a href="/understanding-brain-tumours/types-brain-tumour-children/">Types of brain tumour (children)</a></li>
                
                <li><a href="/understanding-brain-tumours/types-brain-tumour-children/medulloblastoma/">Medulloblastoma</a></li>
                
                <li><a href="/understanding-brain-tumours/types-brain-tumour-children/dipg-diffuse-intrinsic-pontine-glioma/">DIPG</a></li>
                
                <li><a href="/understanding-brain-tumours/types-brain-tumour-children/ependymoma/">Ependymoma</a></li>
                
                <li><a href="/understanding-brain-tumours/types-brain-tumour-children/craniopharyngioma/">Craniopharyngioma</a></li>
                
                <li><a href="/understanding-brain-tumours/types-brain-tumour-children/embryonal-tumours/">Embryonal tumours</a></li>
                
                <li><a href="/understanding-brain-tumours/types-brain-tumour-children/pineoblastoma/">Pineoblastoma</a></li>
                
                <li><a href="/understanding-brain-tumours/types-brain-tumour-children/brainstem-glioma/">Brainstem glioma</a></li>
                
                <li><a href="/understanding-brain-tumours/types-brain-tumour-children/choroid-plexus-carcinoma/">Choroid plexus carcinoma</a></li>
                
                <li><a href="/understanding-brain-tumours/types-brain-tumour-children/germ-cell-tumours/">Germ cell tumour</a></li>
                
                <li><a href="/understanding-brain-tumours/clinical-trials/">Clinical trials</a></li>
                
                <li><a href="/understanding-brain-tumours/clinical-trials/about-clinical-trials/">About clinical trials</a></li>
                
                <li><a href="/understanding-brain-tumours/clinical-trials/adaptive-clinical-trial/">Adaptive clinical trials</a></li>
                
                <li><a href="/understanding-brain-tumours/clinical-trials/clinical-trials-take-part/">Take part in a clinical trial</a></li>
                
                <li><a href="/understanding-brain-tumours/clinical-trials/clinical-trials-and-research-info-line/">Clinical trials and research info line</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/">Treating brain tumours</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/">Brain tumour treatments for adults</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/neurosurgery-adults/">Neurosurgery (adults)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/neurosurgery-adults/5-ala-pink-drink/">5-ALA: The Pink Drink</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/radiotherapy/">Radiotherapy for adults</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/chemotherapy/">Chemotherapy (adults)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/steroids/">Steroids (adults)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/watch-and-wait/">Watch and Wait</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/immunotherapy/">Immunotherapy</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/immunotherapy/checkpoint-inhibitors/">Checkpoint inhibitors</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/immunotherapy/monoclonal-antibodies/">Monoclonal antibodies</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/immunotherapy/cancer-vaccines/">Cancer vaccines</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/immunotherapy/oncolytic-viruses/">Oncolytic viruses</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/immunotherapy/adoptive-t-cell-therapy-act/">Adoptive T-cell therapy (ACT)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/immunotherapy/adjuvant-immunotherapies/">Adjuvant immunotherapies</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/immunotherapy/dc-vax-l/">DC Vax®-L</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/temozolomide/">Temozolomide</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/bevacizumab-avastin/">Bevacizumab (Avastin®)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/stereotactic-radiotherapy/">Stereotactic radiotherapy</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/antineoplaston-therapy/">Antineoplaston therapy</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/adult-treatments/clomipramine/">Clomipramine</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/child-treatments/">Treatment for brain tumours (children)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/child-treatments/neurosurgery/"> Neurosurgery (children)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/child-treatments/radiotherapy/">Radiotherapy (children)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/child-treatments/chemotherapy/">Chemotherapy (children)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/child-treatments/steroids/">Steroids (children)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/child-treatments/proton-beam-therapy/">Proton Beam Therapy</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/child-treatments/antineoplaston-therapy/">Antineoplaston therapy</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/complementary-therapies/">Complementary therapies</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/emerging-treatments/">Emerging treatments</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/emerging-treatments/brainpath/">BrainPath®</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/emerging-treatments/ced-convection-enhanced-delivery/">CED (Convection Enhanced Delivery)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/emerging-treatments/ttf-tumour-treating-fields/">TTF (Tumour Treating Fields)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/emerging-treatments/cannabis-derivatives/">Cannabis derivatives</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/treatments-licensed-other-illnesses/">Treatments licensed for other illnesses</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/treatments-licensed-other-illnesses/afatinib-giotrif/">Afatinib (Giotrif®)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/treatments-licensed-other-illnesses/aspirin/">Aspirin</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/treatments-licensed-other-illnesses/isotretinoin-roaccutane-rizuderm/">Isotretinoin (Roaccutane® or Rizuderm®)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/treatments-licensed-other-illnesses/losartan-cozar/">Losartan (Cozar®)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/treatments-licensed-other-illnesses/metformin-bolamyn-diagemet-glucient-glucophage-metabet/">Metformin (Bolamyn® / Diagemet® / Glucient® / Glucophage® / Metabet®)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/treatments-licensed-other-illnesses/levetiracetam-keppra/">Levetiracetam (Keppra®)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/treatments-licensed-other-illnesses/lapatinib-tyverb/">Lapatinib (Tyverb®)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/treatments-licensed-other-illnesses/celecoxib-celebrex/">Celecoxib (Celebrex®)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/treatments-licensed-other-illnesses/sildenafil-viagra-revatio-tadalafil-and-vardenafil-levitra/">Sildenafil (Viagra®, Revatio®), Tadalafil and Vardenafil (Levitra®)</a></li>
                
                <li><a href="/understanding-brain-tumours/treating-brain-tumours/dietary-supplements/">Dietary supplements</a></li>
                
                <li><a href="/understanding-brain-tumours/navigating-the-system/">Navigating the system</a></li>
                
                <li><a href="/understanding-brain-tumours/navigating-the-system/how-the-nhs-works/">How the NHS works</a></li>
                
                <li><a href="/understanding-brain-tumours/navigating-the-system/our-patient-guide/">Our Patient Guide</a></li>
                
                <li><a href="/understanding-brain-tumours/navigating-the-system/our-patient-guide/request-our-patient-guide/">Request our patient guide</a></li>
                
                <li><a href="/understanding-brain-tumours/navigating-the-system/our-patient-guide/patient-guide-download/">Patient Guide Download</a></li>
                
                <li><a href="/understanding-brain-tumours/navigating-the-system/your-health-team-mdt/">Your health team (MDT)</a></li>
                
                <li><a href="/understanding-brain-tumours/navigating-the-system/your-childs-health-team-mdt/">Your child&#39;s health team (MDT)</a></li>
                
                <li><a href="/understanding-brain-tumours/navigating-the-system/getting-a-second-opinion/">Getting a second opinion</a></li>
                
                <li><a href="/understanding-brain-tumours/navigating-the-system/questions-to-ask/">Questions to ask</a></li>
                
                <li><a href="/understanding-brain-tumours/navigating-the-system/thank-cns/">Thank your nurse</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/">Living with a brain tumour</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/side-effects/">Side effects</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/side-effects/personality-changes-and-brain-tumours/">Personality changes and brain tumours</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/side-effects/memory-difficulties-and-brain-tumours/">Memory difficulties and brain tumours</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/side-effects/communication-difficulties/">Communication difficulties</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/side-effects/fatigue-and-brain-tumours/">Fatigue and brain tumours</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/side-effects/fatigue-and-brain-tumours/coping-with-fatigue/">Coping with fatigue</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/side-effects/depression-and-brain-tumours/">Depression and brain tumours</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/side-effects/cognition-and-brain-tumours/">Cognition and brain tumours</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/side-effects/epilepsy-seizures-and-brain-tumours/">Seizures (epilepsy) and brain tumours</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/side-effects/learning-difficulties-children/">Learning difficulties in children</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/side-effects/sight-problems-and-brain-tumours/">Sight problems and brain tumours</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/side-effects/sight-problems-and-brain-tumours/coping-sight-problems/">Coping with sight problems</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/being-a-carer/">Being a carer</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/travel-and-driving/">Travel and driving</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/travel-and-driving/driving-and-brain-tumours/">Driving and brain tumours</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/travel-and-driving/travelling-and-brain-tumours/">Travelling and brain tumours</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/travel-and-driving/accessible-places-to-stay/">Accessible places to stay</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/employment-and-brain-tumours/">Employment and brain tumours</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/finances-and-government-benefits/">Finances and government benefits</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/finances-and-government-benefits/understanding-personal-independence-payment/">Understanding Personal Independence Payment (PIP)</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/diet-nutrition/">Diet and nutrition</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/diet-nutrition/diet/">Diet</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/diet-nutrition/helping-your-child-to-eat/">Helping your child to eat</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/diet-nutrition/ketogenic-diet/">Ketogenic Diet</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/getting-your-affairs-order/">Getting your affairs in order</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/getting-your-affairs-order/discretionary-trusts/">Discretionary trusts</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/getting-your-affairs-order/lasting-power-attorney/">Lasting Power of Attorney</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/getting-your-affairs-order/making-will/">Making a Will</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/what-do-following-terminal-brain-tumour-diagnosis/">What to do following a terminal brain tumour diagnosis</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/what-do-following-terminal-brain-tumour-diagnosis/financial-support-if-you-become-terminally-ill/">Financial support if you become terminally ill</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/what-do-following-terminal-brain-tumour-diagnosis/financial-support-if-you-have-lost-loved-one/">Financial support if you have lost a loved one</a></li>
                
                <li><a href="/understanding-brain-tumours/living-with-a-brain-tumour/what-do-following-terminal-brain-tumour-diagnosis/brain-donation/">Brain donation</a></li>
                
                <li><a href="/understanding-brain-tumours/resources/">Resources</a></li>
                
                <li><a href="/understanding-brain-tumours/resources/brain-tumour-factsheets/">Brain tumour factsheets</a></li>
                
                <li><a href="/understanding-brain-tumours/resources/jargon-buster/">Jargon buster</a></li>
                
                <li><a href="/understanding-brain-tumours/resources/books/">Books</a></li>
                
                <li><a href="/understanding-brain-tumours/resources/blogs/">Blogs</a></li>
                
                <li><a href="/understanding-brain-tumours/resources/animations-explaining-brain-tumours/">Animations explaining brain tumours</a></li>
                
                <li><a href="/understanding-brain-tumours/types-of-brain-tumour/">Types of brain tumour</a></li>
                
                <li><a href="/get-support/">Get Support</a></li>
                
                <li><a href="/get-support/support-groups/">Brain tumour support groups</a></li>
                
                <li><a href="/get-support/support-groups/support-groups-list/">Support groups list</a></li>
                
                <li><a href="/get-support/support-groups/member-led-support-group/">Run a local Support Group</a></li>
                
                <li><a href="/get-support/support-groups/phone-support-groups/">Phone Support Groups</a></li>
                
                <li><a href="/get-support/support-and-info-line/">Support and Info Line</a></li>
                
                <li><a href="/get-support/support-and-info-line/benefits-clinic/">Benefits clinic</a></li>
                
                <li><a href="/get-support/support-your-local-area/">Support in your local area</a></li>
                
                <li><a href="/get-support/support-events/">Support events</a></li>
                
                <li><a href="/get-support/support-events/information-days/">Information Days</a></li>
                
                <li><a href="/get-support/support-events/way-ahead-days/">Way Ahead Days</a></li>
                
                <li><a href="/get-support/young-adult-service/">Young Adult Service</a></li>
                
                <li><a href="/get-support/young-adult-service/information-request/">Young Adult Service info request</a></li>
                
                <li><a href="/get-support/young-adult-service/event-sign-up-complete/">Event sign up complete</a></li>
                
                <li><a href="/get-support/young-adult-service/thanks-voting/">Thanks for voting</a></li>
                
                <li><a href="/get-support/children-and-families-service/">Children and Families Service</a></li>
                
                <li><a href="/get-support/children-and-families-service/support-families/">Support for families</a></li>
                
                <li><a href="/get-support/children-and-families-service/family-days/">Family Days</a></li>
                
                <li><a href="/get-support/children-and-families-service/holidays-travel-insurance-and-family-life/">Holidays, travel insurance and family life</a></li>
                
                <li><a href="/get-support/children-and-families-service/education-resources/">Education resources</a></li>
                
                <li><a href="/get-support/children-and-families-service/animations-children/">Animations for children</a></li>
                
                <li><a href="/get-support/children-and-families-service/the-brainy-bag/">The Brainy Bag</a></li>
                
                <li><a href="/get-support/children-and-families-service/get-your-pyjamas/">Get your pyjamas</a></li>
                
                <li><a href="/get-support/children-and-families-service/brainy-bag-order-form/">Brainy Bag order form</a></li>
                
                <li><a href="/get-support/children-and-families-service/children-and-families-survey/">Children and Families survey</a></li>
                
                <li><a href="/get-support/children-and-families-service/poems-for-young-children-with-brain-tumours/">Poems for young children with brain tumours</a></li>
                
                <li><a href="/get-support/children-and-families-service/when-your-child-has-been-diagnosed-brain-tumour/">What to do when your child has been diagnosed with a brain tumour</a></li>
                
                <li><a href="/get-support/children-and-families-service/npid/">NPID</a></li>
                
                <li><a href="/get-support/children-and-families-service/npid/nurses-networking-social/">Nurses Networking Event</a></li>
                
                <li><a href="/get-support/online-support/">Online support</a></li>
                
                <li><a href="/get-support/online-support/facebook-support-groups/">Facebook support groups</a></li>
                
                <li><a href="/get-support/online-support/live-discussions/">Live discussions</a></li>
                
                <li><a href="/get-support/online-support/twitter-qa/">Twitter Q&amp;A</a></li>
                
                <li><a href="/get-support/online-support/live-chat/">Live Chat</a></li>
                
                <li><a href="/get-support/for-healthcare-professionals/">Healthcare professionals</a></li>
                
                <li><a href="/get-support/for-healthcare-professionals/brain-tumour-information-request/">Brain tumour information request</a></li>
                
                <li><a href="/get-support/for-healthcare-professionals/brain-tumour-information-request/materials-healthcare-professionals/">Materials for healthcare professionals</a></li>
                
                <li><a href="/get-support/for-healthcare-professionals/learning-resources/">Learning resources</a></li>
                
                <li><a href="/get-support/for-healthcare-professionals/learning-resources/nurse-ahp-2017/">Nurse and AHP Study Day 2017</a></li>
                
                <li><a href="/get-support/for-healthcare-professionals/nurse-and-allied-health-professional-conference-2018/">Nurse and Allied Health Professional Conference 2018</a></li>
                
                <li><a href="/get-support/support-family-and-friends/">Support for Family and Friends</a></li>
                
                <li><a href="/get-support/taking-care-your-mental-health/">Taking care of your mental health</a></li>
                
                <li><a href="/get-involved/">Get Involved</a></li>
                
                <li><a href="/get-involved/wearitout/">Wear It Out</a></li>
                
                <li><a href="/get-involved/wearitout/make-it/">Make It</a></li>
                
                <li><a href="/get-involved/wearitout/raise-it/">Raise it</a></li>
                
                <li><a href="/get-involved/wearitout/thank-you/">Thank you</a></li>
                
                <li><a href="/get-involved/wearitout/get-your-bandana-pack/">Get your Bandana Pack</a></li>
                
                <li><a href="/get-involved/christmas/">Come together for Christmas</a></li>
                
                <li><a href="/get-involved/christmas/thank-you-telling-us-your-festive-plans/">Thank you for telling us your festive plans!</a></li>
                
                <li><a href="/get-involved/christmas/christmas-angel-form/">Christmas Angel application form</a></li>
                
                <li><a href="/get-involved/christmas/time-last-year/">This time last year</a></li>
                
                <li><a href="/get-involved/thebrainybunch-christmas-quiz/">#TheBrainyBunch Christmas Quiz</a></li>
                
                <li><a href="/get-involved/thebrainybunch-christmas-quiz/christmas-quiz-resources/">#TheBrainyBunch Christmas Quiz Resources</a></li>
                
                <li><a href="/get-involved/star/">Be a Star this Christmas</a></li>
                
                <li><a href="/get-involved/thetwilightwalk/">The Twilight Walk</a></li>
                
                <li><a href="/get-involved/thetwilightwalk/thetwilightwalkvolunteers/">Volunteer at The Twilight Walk</a></li>
                
                <li><a href="/get-involved/thetwilightwalk/own-walk/">Hold Your Own Walk</a></li>
                
                <li><a href="/get-involved/thetwilightwalk/own-walk/thank-you-own-walk/">Thank you for registering to hold your Own Walk</a></li>
                
                <li><a href="/get-involved/thetwilightwalk/register-hold-your-own-walk/">Register to hold your own walk</a></li>
                
                <li><a href="/get-involved/thetwilightwalk/twilight-walk-2017-latest-info/">The Twilight Walk 2017: Sign up for the latest information</a></li>
                
                <li><a href="/get-involved/thetwilightwalk/twilight-walk-resources/">The Twilight Walk Resources</a></li>
                
                <li><a href="/get-involved/thetwilightwalk/thanks-letting-us-know/">Thanks for letting us know</a></li>
                
                <li><a href="/get-involved/events/">Take part in an event</a></li>
                
                <li><a href="/get-involved/brainy-bunch/">#TheBrainyBunch!</a></li>
                
                <li><a href="/get-involved/virgin-money-london-marathon/">Virgin Money London Marathon 2019</a></li>
                
                <li><a href="/get-involved/virgin-money-london-marathon/run-with-us/">Run with us</a></li>
                
                <li><a href="/get-involved/virgin-money-london-marathon/london-marathon-apply/">London Marathon apply</a></li>
                
                <li><a href="/get-involved/virgin-money-london-marathon/london-marathon-apply/thank-you-applying/">Thank you for applying</a></li>
                
                <li><a href="/get-involved/virgin-money-london-marathon/my-marathon/">My marathon</a></li>
                
                <li><a href="/get-involved/virgin-money-london-marathon/marathon-training-day/">Marathon training day</a></li>
                
                <li><a href="/get-involved/celebrating-you-awards/">Celebrating You Awards</a></li>
                
                <li><a href="/get-involved/celebrating-you-awards/award-categories/">Award categories</a></li>
                
                <li><a href="/get-involved/donate/">Make a donation</a></li>
                
                <li><a href="/get-involved/donate/impact-your-money-makes/">The impact your money makes</a></li>
                
                <li><a href="/get-involved/donate/get-money-to-us/">Getting money to us</a></li>
                
                <li><a href="/get-involved/donate/regular-giving/">Regular Giving</a></li>
                
                <li><a href="/get-involved/donate/leave-us-a-gift-in-your-will/">Leave a gift in your Will</a></li>
                
                <li><a href="/get-involved/donate/leave-us-a-gift-in-your-will/dedicating-your-gift/">Dedicating your gift </a></li>
                
                <li><a href="/get-involved/donate/leave-us-a-gift-in-your-will/how-to-leave-a-gift-in-your-will/">How to leave a gift in your Will</a></li>
                
                <li><a href="/get-involved/donate/leave-us-a-gift-in-your-will/writing-will/">Writing a will</a></li>
                
                <li><a href="/get-involved/donate/leave-us-a-gift-in-your-will/our-promises/">Our promises</a></li>
                
                <li><a href="/get-involved/donate/leave-us-a-gift-in-your-will/where-your-money-could-go/">Where your money could go</a></li>
                
                <li><a href="/get-involved/donate/leave-us-a-gift-in-your-will/things-to-consider/">Things to consider</a></li>
                
                <li><a href="/get-involved/donate/leave-us-a-gift-in-your-will/why-us/">Why remember us in your Will</a></li>
                
                <li><a href="/get-involved/donate/leave-us-a-gift-in-your-will/information-pack/">Request our free guide</a></li>
                
                <li><a href="/get-involved/donate/leave-us-a-gift-in-your-will/information-pack/thank-you-requesting-our-gift-will-guide/">Thank you for requesting our gift in Will guide</a></li>
                
                <li><a href="/get-involved/donate/give-memory/">Give in memory</a></li>
                
                <li><a href="/get-involved/donate/give-memory/funeral-donations/">Funeral donations</a></li>
                
                <li><a href="/get-involved/donate/give-memory/thank-you-requesting-giving-memory-pack/">Thank you for requesting a Giving in Memory pack</a></li>
                
                <li><a href="/get-involved/donate/other-ways-give/">Other ways to give</a></li>
                
                <li><a href="/get-involved/donate/trusts-and-foundations/">Trusts and Foundations</a></li>
                
                <li><a href="/get-involved/donate/co-fund-with-us/">Co-fund with us</a></li>
                
                <li><a href="/get-involved/donate/direct-debit-guarantee/">Direct Debit Guarantee</a></li>
                
                <li><a href="/get-involved/donate/donation-thank-you/">Thank you for your donation</a></li>
                
                <li><a href="/get-involved/donate/donation-increase-thank-you/">Thank you for increasing your donation</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/">Fundraise for us</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/fundraising-ideas/">Fundraising ideas</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/fundraising-ideas/row-for-it/">Row For It!</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/fundraising-ideas/tea-parties/">Bake sales and tea parties</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/ideas-generator/">Fundraising ideas</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/birthday-pledge-resources/">Birthday Pledge Resources</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/get-your-school-college-or-uni-involved/">Get your school involved</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/fundraise-at-work/">Fundraise at work</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/fundraising-hints-and-tips/">Fundraising hints and tips</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/meet-your-community-team/">Meet your community team </a></li>
                
                <li><a href="/get-involved/fundraise-for-us/fundraising-and-events-form/">Tell us your plans</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/fundraising-and-events-form/thank-you-telling-us-your-plans/">Thank you for telling us your plans!</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/tell-us-about-your-fundraising/">Tell us about your fundraising</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/fundraising-terms-and-conditions/">Fundraising terms and conditions</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/resources-fundraisers/">Fundraising resources</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/resources-fundraisers/other-fundraising-materials/">Request other fundraising materials</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/big-bandana-bake/">Big Bandana Bake</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/big-bandana-bake/big-bandana-bake-success/">Making your Big Bandana Bake a success</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/big-bandana-bake/lemon-cupcakes/">Lovely lemony cupcakes</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/big-bandana-bake/stem-ginger-flapjacks/">Spiced stem ginger flapjacks</a></li>
                
                <li><a href="/get-involved/fundraise-for-us/big-bandana-bake/carrot-cake/">Scrumptious carrot cake</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/">Our Supporter Groups</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/">Supporter Groups</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/setting-supporter-group/">Setting up a Supporter Group</a></li>
                
                <li><a href="/get-involved/how-your-company-can-help/">How your company can help</a></li>
                
                <li><a href="/get-involved/how-your-company-can-help/partner-with-us/">Partner with us</a></li>
                
                <li><a href="/get-involved/how-your-company-can-help/ways-to-support-us/">Ways to support us</a></li>
                
                <li><a href="/get-involved/how-your-company-can-help/payroll-giving/">Payroll giving</a></li>
                
                <li><a href="/get-involved/how-your-company-can-help/gifts-in-kind-volunteering/">Gifts in kind and volunteering</a></li>
                
                <li><a href="/get-involved/how-your-company-can-help/sponsorship-opportunities/">Sponsorship opportunities</a></li>
                
                <li><a href="/get-involved/how-your-company-can-help/our-partners/">Our partners</a></li>
                
                <li><a href="/get-involved/how-your-company-can-help/partnership-news/">Partnership news</a></li>
                
                <li><a href="/get-involved/volunteering/">Volunteering</a></li>
                
                <li><a href="/get-involved/volunteering/community-volunteering/">Volunteer in your community</a></li>
                
                <li><a href="/get-involved/volunteering/event-volunteering/">Volunteer at an event</a></li>
                
                <li><a href="/get-involved/volunteering/volunteer-our-hq/">Volunteer at our HQ</a></li>
                
                <li><a href="/get-involved/volunteering/volunteering-roles/">Current volunteering roles</a></li>
                
                <li><a href="/get-involved/volunteering/volunteering-roles/christmas-volunteering-opportunities/">Christmas Volunteering Opportunities</a></li>
                
                <li><a href="/get-involved/volunteering/volunteer-application-form/">Volunteer application form</a></li>
                
                <li><a href="/get-involved/volunteering/event-volunteer-registration/">Event volunteer registration</a></li>
                
                <li><a href="/get-involved/volunteering/volunteering-time/">Your volunteering time</a></li>
                
                <li><a href="/get-involved/volunteering/volunteering-community/">Our volunteering community</a></li>
                
                <li><a href="/get-involved/volunteering/meet-our-volunteers/">Meet our volunteers</a></li>
                
                <li><a href="/get-involved/volunteering/volunteering-faqs/">Volunteering FAQs</a></li>
                
                <li><a href="/get-involved/volunteering/review-our-information/">Review our information</a></li>
                
                <li><a href="/get-involved/volunteering/thank-you-your-application-volunteer/">Thank you for your application to volunteer</a></li>
                
                <li><a href="/get-involved/share-your-story/">Share your story</a></li>
                
                <li><a href="/get-involved/share-your-story/share/">Share</a></li>
                
                <li><a href="/get-involved/start-vlogging/">Start vlogging</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/">Campaigning for change</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/what-were-campaigning/">What we&#39;re campaigning for</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/what-were-campaigning/less-survivable-cancer-taskforce/">Less Survivable Cancer Taskforce</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/what-were-campaigning/campaigning-scotland/">Campaigning in Scotland</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/what-were-campaigning/tessa-jowell-brain-cancer-mission/">Tessa Jowell Brain Cancer Mission</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/what-were-campaigning/equal-access-treatment-and-care/">Equal access to treatment and care</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/what-were-campaigning/equal-access-treatment-and-care/pink-drink-5-ala/">Equal Access to The Pink Drink: 5-ALA</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/what-were-campaigning/what-we-think/">What we think</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/what-were-campaigning/headsmart/">Our HeadSmart campaign</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/what-were-campaigning/welfare-and-benefits-people-brain-tumours/">Welfare and Benefits</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/what-were-campaigning/welfare-and-benefits-people-brain-tumours/personal-independence-payment-pip/">Personal Independence Payment (PIP)</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/early-and-accurate-diagnosis/">Early and accurate diagnosis</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/brain-tumour-research-environment/">Brain Tumour Research Environment</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/campaign-with-us/">Campaign with us</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/campaign-with-us/thank-you-signing-campaign-us/">Thank you for signing up to campaign with us</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/campaign-with-us/local-campaigning/">Get involved with local campaigning</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/campaign-with-us/e-campaigner/">Get involved as an e-Campaigner</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/campaign-with-us/scottish-brain-tumour-debate/">The Scottish Brain Tumour Debate</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/campaign-with-us/funding-brain-tumour-research/">Funding for Brain Tumour Research</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/campaign-with-us/baroness-tessa-jowells-legacy/">Baroness Tessa Jowell’s legacy</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/election-2017/">Election 2017</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/election-2017/election-updates/">Election updates</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/recommendations-for-politicians/">Our recommendations</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/our-policy-collaborations/">Collaborations</a></li>
                
                <li><a href="/get-involved/campaigning-for-change/our-policy-collaborations/task-and-finish-working-group/">Department of Health Task and Finish Working Group</a></li>
                
                <li><a href="/get-involved/help-make-this-change/">Help make this change</a></li>
                
                <li><a href="/get-involved/help-make-this-change/issues/">The issues</a></li>
                
                <li><a href="/get-involved/help-make-this-change/advocacy-faqs/">Advocacy FAQs</a></li>
                
                <li><a href="/get-involved/help-make-this-change/cancer-registry/">The Cancer Registry</a></li>
                
                <li><a href="/get-involved/help-make-this-change/register-your-interest-form/">Register your interest</a></li>
                
                <li><a href="/get-involved/help-make-this-change/petition-research-brain-tumours/">Petition for research into brain tumours</a></li>
                
                <li><a href="/get-involved/help-make-this-change/policy-involvement-group/">Policy Involvement Group</a></li>
                
                <li><a href="/get-involved/supporter-group-faq/">Supporter Group FAQ</a></li>
                
                <li><a href="/get-involved/why-we-need-your-support/">Why we need your support</a></li>
                
                <li><a href="/get-involved/why-we-need-your-support/the-statistics-about-brain-tumours/">The statistics about brain tumours</a></li>
                
                <li><a href="/get-involved/why-we-need-your-support/our-fundraising-promise-to-you/">Our Fundraising Promise to you</a></li>
                
                <li><a href="/get-involved/share-your-experiences-our-new-film/">Share your experiences for our new film</a></li>
                
                <li><a href="/get-involved/get-involved-christmas/">Get involved this Christmas</a></li>
                
                <li><a href="/get-involved/fundraise-us-christmas/">Fundraise for us this Christmas</a></li>
                
                <li><a href="/get-involved/map/">Map</a></li>
                
                <li><a href="/get-involved/supporter-group-registration/">Supporter Group registration</a></li>
                
                <li><a href="/get-involved/discovery-days-2017/">Discovery Days 2017</a></li>
                
                <li><a href="/donations/">Donations</a></li>
                
                <li><a href="/about-us/">About Us</a></li>
                
                <li><a href="/about-us/our-vision/">Our vision</a></li>
                
                <li><a href="/about-us/our-strategy/">Our Strategy</a></li>
                
                <li><a href="/about-us/our-strategy/strategy-update/">Strategy progress</a></li>
                
                <li><a href="/about-us/who-we-are/">Who we are</a></li>
                
                <li><a href="/about-us/who-we-are/our-history/">Our history</a></li>
                
                <li><a href="/about-us/who-we-are/senior-leadership-team/">Senior Leadership Team</a></li>
                
                <li><a href="/about-us/who-we-are/our-trustees/">Our Trustees</a></li>
                
                <li><a href="/about-us/who-we-are/scientific-advisors/">Scientific and SAB Advisors</a></li>
                
                <li><a href="/about-us/who-we-are/our-young-ambassadors/">Young Ambassadors</a></li>
                
                <li><a href="/about-us/who-we-are/our-young-ambassadors/become-young-ambassador/">Become a Young Ambassador</a></li>
                
                <li><a href="/about-us/why-choose-us/">Why choose us</a></li>
                
                <li><a href="/about-us/join-the-team/">Join the team</a></li>
                
                <li><a href="/about-us/join-the-team/privacy-notice-job-applicants/">Privacy Notice  for Job Applicants</a></li>
                
                <li><a href="/about-us/our-high-profile-supporters/">Our high profile supporters</a></li>
                
                <li><a href="/about-us/our-publications/">Our publications</a></li>
                
                <li><a href="/about-us/our-publications/losing-myself-reality-life-brain-tumour/">Losing Myself</a></li>
                
                <li><a href="/about-us/our-publications/finding-myself/">Finding Myself in Your Hands</a></li>
                
                <li><a href="/about-us/our-publications/losing-my-place-reality-childhood-brain-tumour/">Losing My Place: The Reality of Childhood with a Brain Tumour</a></li>
                
                <li><a href="/about-us/our-publications/cure-cant-wait-our-research-strategy/">A Cure Can&#39;t Wait: Our Research Strategy</a></li>
                
                <li><a href="/about-us/our-publications/our-strategy-2015-2020/">Our Strategy 2015-2020</a></li>
                
                <li><a href="/about-us/our-publications/grey-matters/">The Grey Matters</a></li>
                
                <li><a href="/about-us/our-publications/election-manifestos/">Election manifestos</a></li>
                
                <li><a href="/about-us/our-publications/additional-statistics/">Additional Statistics</a></li>
                
                <li><a href="/about-us/our-publications/research-impact-report/">Research Impact Report</a></li>
                
                <li><a href="/about-us/our-publications/price-you-pay/">The Price You Pay</a></li>
                
                <li><a href="/about-us/annual-report-and-accounts/">Annual report and accounts</a></li>
                
                <li><a href="/about-us/annual-report-and-accounts/annual-review-2016-2017/">Annual Review 2016-2017</a></li>
                
                <li><a href="/about-us/partners-and-links/">Partners and links</a></li>
                
                <li><a href="/about-us/partners-and-links/surviving-terminal-cancer-film/">Surviving Terminal Cancer film</a></li>
                
                <li><a href="/about-us/our-accreditations/">Our accreditations</a></li>
                
                <li><a href="/about-us/our-accreditations/information-standard/">The Information Standard</a></li>
                
                <li><a href="/about-us/policies-and-procedures/">Policies and procedures</a></li>
                
                <li><a href="/about-us/privacy-policy/">Privacy policy</a></li>
                
                <li><a href="/about-us/complaints-policy/">Complaints Policy</a></li>
                
                <li><a href="/about-us/contact/">Contact us</a></li>
                
                <li><a href="/media-centre/">Media Centre</a></li>
                
                <li><a href="/media-centre/news/">News</a></li>
                
                <li><a href="/media-centre/information-journalists/">Information for journalists</a></li>
                
                <li><a href="/newly-diagnosed-pack-request-complete/">Newly diagnosed pack request complete</a></li>
                
                <li><a href="/brainy-bag-request-complete/">Brainy Bag request complete</a></li>
                
                <li><a href="/website-feedback/">Website feedback questionnaire</a></li>
                
                <li><a href="/sitemap/">Sitemap</a></li>
                
                <li><a href="/brian-wcit/">BRIAN WCIT</a></li>
                
                <li><a href="/shop2/">Our online shop</a></li>
                
                <li><a href="/dying-well/">Dying well</a></li>
                
                <li><a href="/phone-system-issue/">Telephone system issue</a></li>
                
                <li><a href="/frequently-asked-questions/">Frequently asked questions</a></li>
                
                <li><a href="/farm-support-cms-page/">FARM Support CMS page </a></li>
                
                <li><a href="/uk-brain-tumour-prevalence/">UK Brain Tumour Prevalence</a></li>
                
                <li><a href="/data-registry/">Data Registry </a></li>
                
                <li><a href="/test-page/">Test page {DO NOT MAKE LIVE}</a></li>
                
                <li><a href="/workplace-domain-verification/">Workplace Domain Verification</a></li>
                
                <li><a href="/glioblastoma-multiforme/">Glioblastoma Multiforme</a></li>
                
                <li><a href="/what-is-glioblastoma/">What is Glioblastoma?</a></li>
                
                <li><a href="/brain-cancer/">What is brain cancer</a></li>
                
                <li><a href="/brain-tumour-information-pack/">Brain Tumour information pack</a></li>
                
                <li><a href="/what-is-astrocytoma/">What is Astrocytoma</a></li>
                
                <li><a href="/what-is-pituitary-adenoma/">What is a Pituitary Adenoma?</a></li>
                
                <li><a href="/what-is-acoustic-neuroma-vestibular-schwannoma/">What is an acoustic neuroma?</a></li>
                
                <li><a href="/what-is-meningioma/">What is Meningioma?</a></li>
                
                <li><a href="/what-is-oligodendroglioma/">What is Oligodendroglioma?</a></li>
                
                <li><a href="/what-is-haemangioblastoma/">What is Haemangioblastoma?</a></li>
                
                <li><a href="/what-is-medulloblastoma/">What is Medulloblastoma?</a></li>
                
                <li><a href="/join-our-mailing-list/">Join Our Mailing List</a></li>
                
                <li><a href="/brian-patient-survey/">BRIAN Patient Survey</a></li>
                
                <li><a href="/what-is-dipg/">What is DIPG?</a></li>
                
                <li><a href="/what-is-ependymoma/">What is Ependymoma?</a></li>
                
                <li><a href="/what-is-craniopharyngioma/">What is Craniopharyngioma?</a></li>
                
                <li><a href="/what-is-brainstem-glioma/">What is brainstem glioma?</a></li>
                
                <li><a href="/brain-tumour-information-pack-fb/">Brain Tumour information pack</a></li>
                
                <li><a href="/prognosis-for-meningioma/">Prognosis for meningioma</a></li>
                
                <li><a href="/brain-tumour-treatments-chemotherapy/">Chemotherapy for adults</a></li>
                
                <li><a href="/brain-tumour-treatments-neurosurgery-adults/">Neurosurgery for adults</a></li>
                
                <li><a href="/brain-tumour-treatments-radiotherapy/">Radiotherapy for adults</a></li>
                
                <li><a href="/brain-tumour-treatments-steroids/">Steroids for adults with a brain tumour</a></li>
                
                <li><a href="/brain-tumour-treatments-child-neurosurgery/">Neurosurgery for children with a brain tumour</a></li>
                
                <li><a href="/brain-tumour-treatments-radiotherapy-children/">Radiotherapy for children with a brain tumour</a></li>
                
                <li><a href="/brain-tumour-treatments-chemotherapy-children/">Chemotherapy for children with a brain tumour</a></li>
                
                <li><a href="/brain-tumour-treatments-steroids-children/">Steroids for children with a brain tumour</a></li>
                
                <li><a href="/prognosis-for-oligodendroglioma/">Prognosis for oligodrendroglioma</a></li>
                
                <li><a href="/prognosis-for-astrocytoma/">Prognosis for astrocytoma</a></li>
                
                <li><a href="/prognosis-for-glioblastoma/">Prognosis for glioblastoma</a></li>
                
                <li><a href="/prognosis-for-medulloblastoma/">Prognosis for medulloblastoma</a></li>
                
                <li><a href="/prognosis-for-ependymoma/">Prognosis for ependymoma</a></li>
                
                <li><a href="/prognosis-for-dipg/">Prognosis for DIPG</a></li>
                
                <li><a href="/what-is-diffuse-midline-glioma/">What is Diffuse Midline Glioma?</a></li>
                
                <li><a href="/honouring-tessa-jowell/">Honouring Tessa Jowell</a></li>
                
                <li><a href="/prognosis-for-brain-tumours/">Prognosis for specific brain tumours</a></li>
                
                <li><a href="/brain-tumour-treatments-proton-beam-therapy-children/">Proton Beam Therapy for children with a brain tumour</a></li>
                
                <li><a href="/benefits-of-exercise/">The benefits of exercise when living with a brain tumour</a></li>
                
            </ul>
        </div>
    </div>
    

    
    <div id="events" class="content-block text-block sitemap-listing">
        <div class="wrapper">
            <h2>Events <a href="#top" class="btn large-btn-clip">Back to top</a></h2>

            <ul>
                
                <li><a href="/get-involved/events/young-adults-leeds-si-eventbrite/">Young Adults Leeds Meet Up</a></li>
                
                <li><a href="/get-involved/events/winter-wonderwheels-2018-eventbrite/">Winter Wonderwheels 2018</a></li>
                
                <li><a href="/get-involved/events/santa-run-2018/">Santa Run 2018</a></li>
                
                <li><a href="/get-involved/events/santa-city-2018/">Santa in the City 2018</a></li>
                
                <li><a href="/get-involved/events/christmas-party-brain-tumour-charity/">Christmas Party for The Brain Tumour Charity</a></li>
                
                <li><a href="/get-involved/events/four-seasons-hotel-hampshire-festive-fair/">Four Seasons Hotel Hampshire Festive Fair</a></li>
                
                <li><a href="/get-involved/events/birmingham-meet/">Birmingham meet up</a></li>
                
                <li><a href="/get-involved/events/barcelona-half-marathon-2019-eventbrite/">Barcelona Half Marathon 2019</a></li>
                
                <li><a href="/get-involved/events/sahara-trek-2019/">Sahara Trek 2019</a></li>
                
                <li><a href="/get-involved/events/thorpe-park-half-marathon-eventbrite/">Thorpe Park Half Marathon 2019</a></li>
                
                <li><a href="/get-involved/events/everest-alps-2019/">Everest in the Alps 2019</a></li>
                
                <li><a href="/get-involved/events/barcelona-marathon-2019-eventbrite/">Barcelona Marathon 2019</a></li>
                
                <li><a href="/get-involved/events/paris-half-marathon-2019-eventbrite/">Paris Half Marathon 2019</a></li>
                
                <li><a href="/get-involved/events/bath-half-2019-eventbrite/">Bath Half 2019</a></li>
                
                <li><a href="/get-involved/events/hampton-court-palace-half-marathon-2019-eventbrite/">Hampton Court Palace Half Marathon 2019</a></li>
                
                <li><a href="/get-involved/events/london-landmarks-half-marathon-2019-eventbrite/">London Landmarks Half Marathon 2019</a></li>
                
                <li><a href="/get-involved/events/greater-manchester-marathon-eventbrite/">Asics Greater Manchester Marathon</a></li>
                
                <li><a href="https://www.thebraintumourcharity.org/get-involved/fundraise-for-us/ideas-generator/obstacle-course/#LondonNorth">Tough Mudder: London North</a></li>
                
                <li><a href="/get-involved/events/brighton-marathon-2019-eventbrite/">Brighton Marathon 2019</a></li>
                
                <li><a href="/get-involved/events/paris-marathon-2019-eventbrite/">Paris Marathon 2019</a></li>
                
                <li><a href="/get-involved/events/virgin-money-london-marathon-2019/">Virgin Money London Marathon 2019</a></li>
                
                <li><a href="https://www.thebraintumourcharity.org/get-involved/fundraise-for-us/ideas-generator/obstacle-course/#LondonWest">Tough Mudder: London West</a></li>
                
                <li><a href="/get-involved/events/isle-wight-challenge-2019/">Isle of Wight Challenge 2019</a></li>
                
                <li><a href="https://www.thebraintumourcharity.org/get-involved/fundraise-for-us/ideas-generator/obstacle-course/#Midlands">Tough Mudder: Midlands</a></li>
                
                <li><a href="/get-involved/events/london-2-brighton-challenge-2019/">London 2 Brighton Challenge 2019</a></li>
                
                <li><a href="/get-involved/events/edinburgh-marathon-2019/">Edinburgh Marathon 2019</a></li>
                
                <li><a href="/get-involved/events/race-tower-2019/">Heineken Race to the Tower 2019</a></li>
                
                <li><a href="https://www.thebraintumourcharity.org/get-involved/fundraise-for-us/ideas-generator/obstacle-course/#Scotland">Tough Mudder: Scotland</a></li>
                
                <li><a href="/get-involved/events/peak-district-challenge-2019/">Peak District Challenge 2019</a></li>
                
                <li><a href="/get-involved/events/chiltern-challenge-2019/">Chiltern Challenge 2019</a></li>
                
                <li><a href="https://www.thebraintumourcharity.org/get-involved/fundraise-for-us/ideas-generator/obstacle-course/#Yorkshire">Tough Mudder: Yorkshire</a></li>
                
                <li><a href="/get-involved/events/prudential-ridelondon-surrey-100-2019-eventbrite/">Prudential RideLondon-Surrey 100 2019</a></li>
                
                <li><a href="https://www.thebraintumourcharity.org/get-involved/fundraise-for-us/ideas-generator/obstacle-course/#SouthWest">Tough Mudder: South West</a></li>
                
                <li><a href="https://www.thebraintumourcharity.org/get-involved/fundraise-for-us/ideas-generator/obstacle-course/#NorthWest">Tough Mudder: North West</a></li>
                
                <li><a href="/get-involved/events/great-north-run-2019-eventbrite/">Great North Run 2019</a></li>
                
                <li><a href="https://www.thebraintumourcharity.org/get-involved/fundraise-for-us/ideas-generator/obstacle-course/#LondonSouth1">Tough Mudder: London South 1</a></li>
                
                <li><a href="/get-involved/events/london-brighton-bike-ride-2019/">London to Brighton Bike Ride 2019</a></li>
                
                <li><a href="https://www.thebraintumourcharity.org/get-involved/fundraise-for-us/ideas-generator/obstacle-course/#LondonSouth2">Tough Mudder: London South 2</a></li>
                
                <li><a href="/get-involved/events/royal-parks-half-marathon-2019/">Royal Parks Half Marathon 2019</a></li>
                
            </ul>
        </div>
    </div>
    

    
    <div id="news" class="content-block text-block sitemap-listing">
        <div class="wrapper">
            <h2>News <a href="#top" class="btn large-btn-clip">Back to top</a></h2>

            <ul>
                
                <li><a href="/media-centre/news/latest-news/new-drug-discovered-could-prevent-spread-glioblast/">New drug discovered that could prevent the spread of glioblastoma cells</a></li>
                
                <li><a href="/media-centre/news/policy-news/brain-tumour-charity-meets-wales-assembly-members/">The Brain Tumour Charity meets with Wales Assembly Members</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/phil-spencer-joins-third-ascent-everest-alps/">Phil Spencer joins the third ascent of Everest In The Alps</a></li>
                
                <li><a href="/media-centre/news/blog-post/21-days-wellbeing/">21 days of wellbeing</a></li>
                
                <li><a href="/media-centre/news/research-news/monitoring-diffuse-midline-gliomas-liquid-biopsies/">Monitoring diffuse midline gliomas with liquid biopsies</a></li>
                
                <li><a href="/media-centre/news/latest-news/jess-mills-daughter-late-tessa-jowell-driving-chan/">Jess Mills, daughter of the late Tessa Jowell, is driving change for all those diagnosed with brain tumours</a></li>
                
                <li><a href="/media-centre/news/latest-news/our-young-ambassador-tyler-awarded-british-empire-/">Our Young Ambassador Tyler is awarded the British Empire Medal by Lord-Lieutenant of West Sussex</a></li>
                
                <li><a href="/media-centre/news/latest-news/somethings-changing/">Something&#39;s changing</a></li>
                
                <li><a href="/media-centre/news/support-news/support-school/">Support at school</a></li>
                
                <li><a href="/media-centre/news/research-news/personalising-treatments-children-medulloblastomas/">Personalising treatments for children with medulloblastomas</a></li>
                
                <li><a href="/media-centre/news/support-news/limited-access-prescription-medicinal-cannabis/">New guidance for prescription of medicinal cannabis but access is limited</a></li>
                
                <li><a href="/media-centre/news/support-news/building-relationships-your-childs-school/">Building relationships with your child&#39;s school</a></li>
                
                <li><a href="/media-centre/news/support-news/supporting-your-child-return-school/">Supporting your child to return to school after diagnosis or treatment</a></li>
                
                <li><a href="/media-centre/news/latest-news/our-petition-reaches-downing-street/">Our petition reaches Downing Street</a></li>
                
                <li><a href="/media-centre/news/policy-news/less-survivable-cancers-taskforce-petition/">Delivering the Less Survivable Cancers Taskforce petition to 10 Downing Street</a></li>
                
                <li><a href="/media-centre/news/research-news/signalling-pathway-regulates-medulloblastomas/">Signalling pathway regulates Group 3 medulloblastomas</a></li>
                
                <li><a href="/media-centre/news/policy-news/financial-consequences-of-a-brain-tumour/">Our UK-wide report highlights the financial consequences of a brain tumour diagnosis</a></li>
                
                <li><a href="/media-centre/news/policy-news/cannabis-based-medicines-available-november/">Cannabis-based medicinal products available by special prescription by 1 November</a></li>
                
                <li><a href="/media-centre/news/policy-news/launch-less-survivable-cancers-taskforce-petition/">Launch of The Less Survivable Cancers Taskforce petition</a></li>
                
                <li><a href="/media-centre/news/partnership-news/shepherd-neame-partnership/">Shepherd Neame Announces Charity Partnership</a></li>
                
                <li><a href="/media-centre/news/brian-news/brian-leading-data-revolution/">How The Brain Tumour Charity&#39;s project, BRIAN, is leading a data revolution</a></li>
                
                <li><a href="/media-centre/news/policy-news/government-announces-plan-improve-cancer-diagnosis/">UK Government announces plan to improve cancer diagnosis</a></li>
                
                <li><a href="/media-centre/news/support-news/doctors-hail-our-brain-tumour-information-schools/">Doctors hail our brain tumour information for schools</a></li>
                
                <li><a href="/media-centre/news/policy-news/policy-blog-day-two-conservative-party-conference/">Policy blog: Day two at Conservative Party conference</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/northwich-woodland-walk/">Northwich Woodland Walk</a></li>
                
                <li><a href="/media-centre/news/brian-news/transforming-patient-care-through-data/">BRIAN blog: How can charities support a transformation of patient care through data?</a></li>
                
                <li><a href="/media-centre/news/policy-news/policy-blog-day-one-conservative-party-conference/">Policy blog: Day one at Conservative Party conference</a></li>
                
                <li><a href="/media-centre/news/latest-news/nhs-launch-nhs-app-gp-practices-across-england/">NHS launch ‘NHS App’ in GP Practices across England</a></li>
                
                <li><a href="/media-centre/news/policy-news/policy-blog-last-day-2018-labour-party-conference/">Policy blog: The last day of the 2018 Labour Party conference</a></li>
                
                <li><a href="/media-centre/news/policy-news/policy-blog-day-three-2018-labour-party-conference/">Policy blog: Day three at the 2018 Labour Party annual conference</a></li>
                
                <li><a href="/media-centre/news/policy-news/policy-blog-day-two-2018-labour-party-conference/">Policy blog: Day two at the 2018 Labour Party annual conference</a></li>
                
                <li><a href="/media-centre/news/policy-news/policy-blog-brain-tumour-charity-labour-party-2018/">Policy blog: The Brain Tumour Charity at the Labour Party 2018 annual conference</a></li>
                
                <li><a href="/media-centre/news/research-news/tocagen-completes-recruitment-phase/">Tocagen completes recruitment for a Phase 3 clinical trial for high-grade gliomas</a></li>
                
                <li><a href="/media-centre/news/latest-news/third-sector-charity-or-the-year-2018-winner/">Your support was key to our Third Sector’s Charity of the Year 2018 award</a></li>
                
                <li><a href="/media-centre/news/latest-news/jack-morris-cbe-appointed-chair-our-trustees/">Jack Morris CBE appointed chair of our trustees</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/launching-our-new-gift-wills-campaign/">Launching our new gift in Wills campaign</a></li>
                
                <li><a href="/media-centre/news/policy-news/blog-update-less-survivable-cancers-taskforce/">Blog: Update from the Less Survivable Cancers Taskforce</a></li>
                
                <li><a href="/media-centre/news/policy-news/blog-scotland-steering-committee-scottish-parliame/">Blog: The Scotland Steering Committee at the Scottish Parliament</a></li>
                
                <li><a href="/media-centre/news/research-news/halting-immortality-mechanism-glioblastomas/">Halting the ‘immortality’ mechanism in glioblastomas</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/lewis-moody-foundation-raises-over-1million-people/">The Lewis Moody Foundation raises over £1million for people affected by brain tumours</a></li>
                
                <li><a href="/media-centre/news/policy-news/less-survivable-cancer-taskforce-doubling-survivab/">Less Survivable Cancer Taskforce doubling survivable statement</a></li>
                
                <li><a href="/media-centre/news/partnership-news/becg-partnership/">Our partnership with BECG</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-my-benefits-experience/">Blog: My benefits experience</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-keeping-cool-heat/">Blog: Keeping cool in the heat</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-outpatient-appointments-what-bring/">Blog: Outpatient appointments - what to bring and how to prepare</a></li>
                
                <li><a href="/media-centre/news/blog-post/enjoy-long-weekend-your-way/">Enjoy a long weekend your way</a></li>
                
                <li><a href="/media-centre/news/research-news/scientists-discover-chemical-can-kill-glioblastoma/">Scientists discover a chemical that can kill glioblastoma cells</a></li>
                
                <li><a href="/media-centre/news/policy-news/brain-tumour-charity-submits-dcvax-l-consultation/">The Brain Tumour Charity submits DCVax®-L consultation response</a></li>
                
                <li><a href="/media-centre/news/partnership-news/blue-apple-partnership/">Blue Apple Partnership</a></li>
                
                <li><a href="/media-centre/news/support-news/blog-daily-life-school-holidays/">Blog: Daily life in the school holidays</a></li>
                
                <li><a href="/media-centre/news/support-news/blog-travel-insurance-children-brain-tumour/">Blog: Travel insurance for children with a brain tumour</a></li>
                
                <li><a href="/media-centre/news/support-news/blog-holidays-and-breaks/">Blog: holidays and breaks for families with a brain tumour</a></li>
                
                <li><a href="/media-centre/news/policy-news/national-cancer-patient-experience-survey-2017/">Blog: National Cancer Patient Experience Survey (NCPES)</a></li>
                
                <li><a href="/media-centre/news/policy-news/parental-bereavement-leave-and-pay-bill-passes-fin/">Blog: Parental Bereavement (Leave and Pay) Bill passes final Parliamentary hurdle</a></li>
                
                <li><a href="/media-centre/news/general-news/third-sector-awards-finalist/">The Brain Tumour Charity finalist for Charity of the Year - Third Sector Awards</a></li>
                
                <li><a href="/media-centre/news/policy-news/developments-european-medicines-agency/">Developments for the European Medicines Agency</a></li>
                
                <li><a href="/media-centre/news/research-news/international-symposium-paediatric-neuro-oncology/">Blog: The International Symposium on Paediatric Neuro-oncology</a></li>
                
                <li><a href="/media-centre/news/latest-news/new-nice-guidelines-entitled-brain-tumours-primary/">The new NICE guidelines entitled ‘Brain tumours (primary) and brain metastases in adults’</a></li>
                
                <li><a href="/media-centre/news/research-news/different-cell-types-work-together-drive-tumour-sp/">Different cell types work together to drive tumour spread in paediatric high-grade gliomas</a></li>
                
                <li><a href="/media-centre/news/latest-news/celebrating-70th-birthday-nhs/">Celebrating the 70th birthday of the NHS</a></li>
                
                <li><a href="/media-centre/news/research-news/could-polio-virus-help-treat-brain-cancer/">Could the polio virus help treat brain cancer?</a></li>
                
                <li><a href="/media-centre/news/research-news/positive-results-recurrent-glioblastoma-drug/">Positive results from a drug treating recurrent glioblastoma</a></li>
                
                <li><a href="/media-centre/news/policy-news/government-announcement-personal-independence-paym/">Government announcement on Personal Independence Payment (PIP)</a></li>
                
                <li><a href="/media-centre/news/policy-news/blog-theresa-mays-speech-nhs/">Blog: Theresa May’s Speech on the NHS</a></li>
                
                <li><a href="/media-centre/news/policy-news/cannabis-oil-patients-right-choose/">Cannabis oil – A patient’s right to choose</a></li>
                
                <li><a href="/media-centre/news/research-news/understanding-epigenetics-in-glioblastoma/">Our interview with Dr Tom Millner: Understanding Epigenetics in Glioblastoma</a></li>
                
                <li><a href="/media-centre/news/policy-news/blog-parental-bereavement-leave-and-pay-bill-start/">Blog: Parental Bereavement (Leave and Pay) Bill – a start, but not yet enough</a></li>
                
                <li><a href="/media-centre/news/latest-news/identifying-markers-classify-previously-undetermin/">Identifying markers to classify previously undetermined glioblastomas</a></li>
                
                <li><a href="/media-centre/news/policy-news/should-patients-have-more-freedom-to-choose/">Patient choice: Should patients have more freedom to choose?</a></li>
                
                <li><a href="/media-centre/news/blog-post/meet-rosemary-volunteers-week/">Meet Rosemary this Volunteers Week</a></li>
                
                <li><a href="/media-centre/news/policy-news/blog-it-time-uk-have-right-try/">Blog: Is it time for the UK to have the right to try?</a></li>
                
                <li><a href="/media-centre/news/policy-news/children-and-young-people-cancer-coalition/">Children and Young People Cancer Coalition</a></li>
                
                <li><a href="/media-centre/news/research-news/early-findings-phase-3-clinical-trial-report-prom/">Early findings from a phase 3 clinical trial report promising results</a></li>
                
                <li><a href="/media-centre/news/latest-news/new-approach-brain-tumour-surgery-shows-improved-s/">A new approach to brain tumour surgery shows improved survival for individuals with high-grade gliomas</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/blog-will-make-difference/">Blog: A Will to make a difference</a></li>
                
                <li><a href="/media-centre/news/research-news/iota-pharmaceuticals-create-glioblastoma-drug-bank/">IOTA Pharmaceuticals announce the creation of a Glioblastoma Drug Bank</a></li>
                
                <li><a href="/media-centre/news/research-news/discovery-raises-hope-slowing-high-grade-brain-tum/">Discovery raises hope of slowing high-grade brain tumour growth</a></li>
                
                <li><a href="/media-centre/news/support-news/where-theres-will-theres-away/">Where there&#39;s a Will, there&#39;s a way</a></li>
                
                <li><a href="/media-centre/news/latest-news/treating-diffuse-midline-gliomas-oncolytic-virus/">Treating diffuse midline gliomas with an oncolytic virus</a></li>
                
                <li><a href="/media-centre/news/policy-news/government-pledges-increased-funding/">Welcoming the government’s pledge for increased funding for research into brain tumours</a></li>
                
                <li><a href="/media-centre/news/policy-news/tessa-jowell/">Tessa Jowell: A sad loss</a></li>
                
                <li><a href="/media-centre/news/policy-news/baroness-jowell-legacy/">Baroness Jowell changed things for the brain tumour community. Her legacy will live on.</a></li>
                
                <li><a href="/media-centre/news/latest-news/liquid-biopsy-detect-brain-tumour-biomarkers/">Liquid biopsy to detect brain tumour biomarkers</a></li>
                
                <li><a href="/media-centre/news/policy-news/blog-raising-issues-all-party-parliamentary-group/">Blog: Raising issues at the All-Party Parliamentary Group on Brain Tumours</a></li>
                
                <li><a href="/media-centre/news/latest-news/our-new-multi-million-pound-research-investment/">Our new multi-million pound research investment</a></li>
                
                <li><a href="/media-centre/news/partnership-news/pedalling-towards-cure/">Pedalling towards a cure</a></li>
                
                <li><a href="/media-centre/news/partnership-news/first-dates-cindy-thompson-mum-brain-tumour/">First Dates love is helping me cope with my mum’s brain tumour heartache</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/world-first-paralysed-man-complete-London-Marathon/">Simon Kindleysides becomes the world’s first paralysed man to complete the London Marathon</a></li>
                
                <li><a href="/media-centre/news/research-news/Research-work-placement-at-UCL/">Research work placement at UCL</a></li>
                
                <li><a href="/media-centre/news/latest-news/brain-tumour-patients-will-lead-way-new-global-can/">Brain tumour patients will lead the way in new global cancer databank</a></li>
                
                <li><a href="/media-centre/news/policy-news/house-commons-brain-tumour-debate/">Brain tumour debate sees Ministers pay tribute to Baroness Tessa Jowell</a></li>
                
                <li><a href="/media-centre/news/latest-news/today-sarah-jones-mp-lead-debate-brain-tumours-hou/">Today Sarah Jones MP is to lead a debate on brain tumours in the House of Commons</a></li>
                
                <li><a href="/media-centre/news/latest-news/using-car-t-cell-therapy-treat-diffuse-midline-gli/">Using CAR-T cell therapy to treat diffuse midline glioma</a></li>
                
                <li><a href="/media-centre/news/policy-news/scottish-parliament-brain-tumour-roundtable/">Blog: Scottish Parliament brain tumour roundtable</a></li>
                
                <li><a href="/media-centre/news/research-news/combination-therapy-treat-medulloblastoma/">Combination therapy to treat medulloblastoma</a></li>
                
                <li><a href="/media-centre/news/partnership-news/collaboration-key/">Collaboration is key</a></li>
                
                <li><a href="/media-centre/news/policy-news/discussion-brain-tumours-scottish-parliament/">MSP to chair discussion on brain tumours in Scottish Parliament</a></li>
                
                <li><a href="/media-centre/news/partnership-news/deliciously-ella-high-profile-supporter/">Deliciously Ella backs our ambitious work as one of our High Profile Supporters</a></li>
                
                <li><a href="/media-centre/news/research-news/aggressive-meningiomas-linked-single-gene/">Clinically aggressive meningiomas linked to single gene</a></li>
                
                <li><a href="/media-centre/news/policy-news/why-we-need-politicians-be-part-our-brainy-bunch/">Why we need politicians to be part of our Brainy Bunch</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/gabby-allen-opens-her-heart-about-her-funny-caring/">Gabby Allen opens her heart about her “funny, caring” dad losing his life to a brain tumour</a></li>
                
                <li><a href="/media-centre/news/research-news/understanding-survival-mechanism-gliomas/">Understanding the survival mechanism of gliomas</a></li>
                
                <li><a href="/media-centre/news/policy-news/the-high-price-of-a-brain-tumour-diagnosis/">The high price of a brain tumour diagnosis: our report out today</a></li>
                
                <li><a href="/media-centre/news/policy-news/prioritise-cancer-in-brexit-negotiations/">Joint letter asks Government to prioritise cancer in Brexit negotiations</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/everest-alps-challenge-set-raise-1million/">Everest in the Alps challenge set to raise £1million</a></li>
                
                <li><a href="/media-centre/news/blog-post/ask-researcher-top-5-things-learnt/">Ask the researcher: Top five things I’ve learnt and why you should go next time</a></li>
                
                <li><a href="/media-centre/news/latest-news/how-fitness-professional-living-brain-tumour-uniti/">How a fitness professional living with a brain tumour is uniting our community</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/phil-spencers-everest-alps-blog/">Phil Spencer’s Everest in the Alps blog</a></li>
                
                <li><a href="/media-centre/news/research-news/improving-diagnoses-tumour-molecular-profile/">Improving diagnoses through a tumour’s molecular profile</a></li>
                
                <li><a href="/media-centre/news/research-news/ask-researcher-night-proves-huge-success/">Ask the Researcher night proves a huge success</a></li>
                
                <li><a href="/media-centre/news/headsmart-news/philippa-forrester-headsmart-supporter/">Philippa Forrester becomes our High Profile Supporter championing HeadSmart</a></li>
                
                <li><a href="/media-centre/news/research-news/new-drug-crosses-blood-brain-barrier/">New drug demonstrates the ability to cross the blood-brain barrier</a></li>
                
                <li><a href="/media-centre/news/latest-news/russell-watson-becomes-one-our-high-profile-suppor/">Russell Watson becomes one of our High Profile Supporters</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/hal-cruttenden-to-host-celebrating-you-awards/">Our High Profile Supporter Hal Cruttenden will host our Celebrating You Awards 2018</a></li>
                
                <li><a href="/media-centre/news/latest-news/researchers-discover-new-target-immunotherapy/">Researchers discover a new target for immunotherapy</a></li>
                
                <li><a href="/media-centre/news/partnership-news/life-changing-new-partnership/">Life changing new partnership</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/theyre-teams-begin-second-ascent-everest-alps/">They’re off! The teams begin the second ascent of Everest in the Alps</a></li>
                
                <li><a href="/media-centre/news/research-news/researchers-develop-laboratory-chip-device/">Researchers develop a &#39;laboratory on chip&#39; device to detect cancerous stem cells</a></li>
                
                <li><a href="/media-centre/news/policy-news/tessa-jowell-calls-global-collaboration-uk-governm/">Tessa Jowell calls for global collaboration at UK government meeting</a></li>
                
                <li><a href="/media-centre/news/policy-news/experts-call-innovation-research-brain-tumours/">Experts call for innovation for research into brain tumours</a></li>
                
                <li><a href="/media-centre/news/policy-news/todays-uk-brain-cancer-summit-cabinet-office/">Today’s UK Brain Cancer summit at the Cabinet Office</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/seven-mums-scale-height-everest/">Seven mums take on the challenge of scaling the height of Everest on skiis in just four days</a></li>
                
                <li><a href="/media-centre/news/research-news/car-t-cell-therapy-potential-treat-brain-tumours/">CAR-T cell therapy has the potential to treat brain tumours</a></li>
                
                <li><a href="/media-centre/news/policy-news/top-level-brain-tumour-summit-follow-tessa-jowells/">Top-level brain tumour summit to follow Tessa Jowell’s call for change</a></li>
                
                <li><a href="/media-centre/news/blog-post/helping-love-blossom/">Helping love blossom</a></li>
                
                <li><a href="/media-centre/news/blog-post/all-you-need-love-and-maybe-bit-inspiration/">All you need is love… and maybe a bit of inspiration</a></li>
                
                <li><a href="/media-centre/news/latest-news/training-exo-suit-gears-london-marathon/">Training in an exo-suit gears up for the London Marathon</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/everest-alps-challenge-for-phil-spencer/">Everest in the Alps presents a mountainous training challenge for Phil Spencer</a></li>
                
                <li><a href="/media-centre/news/research-news/new-phase-2-clinical-trial-testing-immunotherapy/">New phase 2 clinical trial testing immunotherapy drug announced</a></li>
                
                <li><a href="/media-centre/news/latest-news/pioneering-fundraising-we-head-2018/">Pioneering fundraising as we head in to 2018</a></li>
                
                <li><a href="/media-centre/news/research-news/evening-our-researchers/">An evening with our researchers</a></li>
                
                <li><a href="/media-centre/news/research-news/anti-angiogenic-therapy-treat-glioblastoma/">Research News: Is anti-angiogenic therapy to treat glioblastomas a viable option?</a></li>
                
                <li><a href="/media-centre/news/blog-post/halve-harm/">Halve the harm!</a></li>
                
                <li><a href="/media-centre/news/policy-news/better-services-children-life-limiting-illnesses/">Families need better services for children with life-limiting illnesses, MPs are told</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/phil-spencer-takes-second-everest-alps-challenge/">Phil Spencer takes on the second Everest in the Alps challenge</a></li>
                
                <li><a href="/media-centre/news/latest-news/blog-elena-hardy-ballet-dancer-and-mum-two-warns-r/">Blog: Elena Hardy, a ballet dancer and  mum of two, warns of the risks of ignoring brain tumour symptoms</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/simon-kindleysides-London-Marathon-exo-suit/">Blog: Simon Kindleysides, a paralysed dad of three, to take on the London Marathon in an exo-suit</a></li>
                
                <li><a href="/media-centre/news/research-news/combination-therapy-glioblastoma-survival-rates/">Combination therapy could significantly improve glioblastoma survival rates</a></li>
                
                <li><a href="/media-centre/news/research-news/update-glioblastoma-adaptive-trials-pink-drink/">Our research update into glioblastoma, adaptive trials, and the ‘pink drink’</a></li>
                
                <li><a href="/media-centre/news/policy-news/baroness-jowell-calls-better-cancer-treatment-hous/">Baroness Jowell calls for better cancer treatment in House of Lords debate</a></li>
                
                <li><a href="/media-centre/news/policy-news/blog-tessa-jowells-house-lords-debate/">Blog: Tessa Jowell&#39;s House of Lords Debate</a></li>
                
                <li><a href="/media-centre/news/latest-news/what-adaptive-clinical-trial/">What is an adaptive clinical trial?</a></li>
                
                <li><a href="/media-centre/news/policy-news/tessa-jowell-highlights-devastating-effect-her-bra/">Tessa Jowell highlights the devastating effect of her brain tumour diagnosis</a></li>
                
                <li><a href="/media-centre/news/policy-news/tessa-jowell-lead-high-profile-cancer-debate/">Tessa Jowell to lead high-profile cancer debate</a></li>
                
                <li><a href="/media-centre/news/research-news/cancer-therapy-can-drive-tumour-regrowth/">Study reveals cancer therapy can also drive tumour regrowth</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/charity-ambassador-living-brain-tumour-take-london/">Charity ambassador living with a brain tumour to take on the London marathon</a></li>
                
                <li><a href="/media-centre/news/latest-news/launching-our-big-bandana-bake/">Launching our Big Bandana Bake</a></li>
                
                <li><a href="/media-centre/news/research-news/targeting-bodys-internal-clock-treat-glioblastoma/">Targeting the body’s internal clock to treat glioblastoma</a></li>
                
                <li><a href="/media-centre/news/brian-news/data-sharing-for-brain-tumour-cure/">Launching our data-sharing project in quest for brain tumour cure</a></li>
                
                <li><a href="/media-centre/news/blog-post/supporting-your-loved-one/">Supporting your loved one</a></li>
                
                <li><a href="/media-centre/news/research-news/announcing-our-co-funding-grants-worldwide-cancer/">Announcing our co-funding grants with Worldwide Cancer Research</a></li>
                
                <li><a href="/media-centre/news/blog-post/finding-right-words/">Finding the right words</a></li>
                
                <li><a href="/media-centre/news/research-news/research-shows-blood-brain-barrier-success/">Our funded research shows blood-brain barrier success</a></li>
                
                <li><a href="/media-centre/news/policy-news/new-years-resolutions-blog/">New Year’s resolutions blog</a></li>
                
                <li><a href="/media-centre/news/research-news/electronic-cap-improve-glioblastoma-survival/">Wearing an electronic cap to improve glioblastoma survival</a></li>
                
                <li><a href="/media-centre/news/research-news/blog-society-neuro-oncology-annual-meeting-pt2/">Blog: Society for Neuro-Oncology annual meeting Pt2</a></li>
                
                <li><a href="/media-centre/news/research-news/developing-vaccine-treat-diffuse-midline-glioma/">Developing a Vaccine to Treat Diffuse Midline Glioma</a></li>
                
                <li><a href="/media-centre/news/research-news/blog-society-neuro-oncology-annual-meeting/">Blog: Society for Neuro-Oncology annual meeting</a></li>
                
                <li><a href="/media-centre/news/policy-news/our-meeting-less-survivable-cancers-taskforce/">Our meeting with the Less Survivable Cancers Taskforce</a></li>
                
                <li><a href="/media-centre/news/latest-news/kings-college-hospital-appoints-our-first-clinical/">Kings College Hospital appoints our first Clinical Nurse Specialist</a></li>
                
                <li><a href="/media-centre/news/research-news/brain-cancer-drug-pac-1-approved-phase-1b-clinical/">Brain cancer drug, PAC-1 is approved for Phase 1(b) Clinical Trials</a></li>
                
                <li><a href="/media-centre/news/policy-news/msps-call-action-debate-brain-tumours/">MSPs call for action in debate on brain tumours</a></li>
                
                <li><a href="/media-centre/news/policy-news/blog-implications-scottish-parliament-brain-tumour/">Blog: The implications of the Scottish Parliament brain tumour debate</a></li>
                
                <li><a href="/media-centre/news/latest-news/launching-our-christmas-appeal/">Launching our Christmas Appeal</a></li>
                
                <li><a href="/media-centre/news/blog-post/the-big-meet-just-do-it/">Blog: The Big Meet - Just do it!</a></li>
                
                <li><a href="/media-centre/news/headsmart-news/headsmart-model-awareness-campaign/">HeadSmart “a model” for awareness campaigns in low-survival cancers</a></li>
                
                <li><a href="/media-centre/news/blog-post/top-tips-tackling-isolation/">Blog: Top Tips for Tackling Isolation</a></li>
                
                <li><a href="/media-centre/news/policy-news/blog-post-appg-brexit/">Blog: Post APPG Brexit</a></li>
                
                <li><a href="/media-centre/news/research-news/new-gene-therapy-to-treat-recurrent-glioblastomas/">New gene therapy could have potential to treat recurrent glioblastomas</a></li>
                
                <li><a href="/media-centre/news/policy-news/msps-debate-need-greater-awareness-brain-tumours/">MSPs to debate need for greater awareness of brain tumours in Scottish Parliament</a></li>
                
                <li><a href="/media-centre/news/latest-news/launching-our-employment-resources-patients/">Launching our Employment Resources for patients</a></li>
                
                <li><a href="/media-centre/news/latest-news/blog-brain-tumours-hot-soap-storyline/">Blog: Brain tumours – the hot soap storyline</a></li>
                
                <li><a href="/media-centre/news/latest-news/blog-meet-researcher-ally-rooney/">Blog: Meet the researcher: Ally Rooney</a></li>
                
                <li><a href="/media-centre/news/latest-news/rugby-legend-lewis-moody-heads-headwest-costa-rica/">Rugby legend Lewis Moody heads up the headwest Costa Rica coast-to-coast challenge</a></li>
                
                <li><a href="/media-centre/news/research-news/ovarian-cancer-drug-olaparib-to-treat-glioblastoma/">Ovarian cancer drug olaparib has the potential to treat glioblastoma</a></li>
                
                <li><a href="/media-centre/news/latest-news/new-glioblastoma-and-anaplastic-astrocytoma-book/">New glioblastoma and anaplastic astrocytoma book</a></li>
                
                <li><a href="/media-centre/news/support-news/ex-england-rugby-captain-lewis-moody-join-families/">Ex- England Rugby Captain Lewis Moody to join families at Gloucestershire Family Day</a></li>
                
                <li><a href="/media-centre/news/partnership-news/pedalling-defeat-brain-tumours/">Pedalling to defeat brain tumours</a></li>
                
                <li><a href="/media-centre/news/research-news/gene-therapy-for-recurrent-high-grade-gliomas/">Gene therapy to treat recurrent high-grade gliomas gets accelerated to Phase 3 clinical trials</a></li>
                
                <li><a href="/media-centre/news/policy-news/uniting-our-international-brain-tumour-community/">Blog: The uniting of our international brain tumour community</a></li>
                
                <li><a href="/media-centre/news/research-news/combination-treatment-targeting-glioblastoma/">A potential combination treatment targeting glioblastoma</a></li>
                
                <li><a href="/media-centre/news/policy-news/blog-hurdles-medical-research-face-snp/">Blog: The hurdles of medical research that face the SNP</a></li>
                
                <li><a href="/media-centre/news/research-news/using-supercomputers-diagnose-brain-tumours/">Using supercomputers to diagnose brain tumours</a></li>
                
                <li><a href="/media-centre/news/research-news/researchers-discover-mechanism-glioma-recurrence/">Researchers discover a potential mechanism for glioma recurrence</a></li>
                
                <li><a href="/media-centre/news/policy-news/blog-debate-key-conservative-party-conference/">Blog: Debate is key at the Conservative Party Conference</a></li>
                
                <li><a href="/media-centre/news/partnership-news/corporate-partners-unite/">Our corporate partners unite to tackle brain tumours</a></li>
                
                <li><a href="/media-centre/news/research-news/subgroups-identified-high-grade-gliomas-children/">New subgroups identified for high-grade gliomas in children</a></li>
                
                <li><a href="/media-centre/news/policy-news/data-sharing-discussion-labour-party-conference/">Blog: Data sharing discussion at the Labour Party conference</a></li>
                
                <li><a href="/media-centre/news/research-news/absence-protein-halts-growth-high-grade-gliomas/">Absence of protein halts the growth of high-grade gliomas</a></li>
                
                <li><a href="/media-centre/news/policy-news/public-petition-highlights-devastating-impact-DIPG/">A new public petition highlights the devastating impact of DIPG</a></li>
                
                <li><a href="/media-centre/news/policy-news/charity-coalition-patient-experience-monitoring/">Charity coalition demands patient experience continues to be measured</a></li>
                
                <li><a href="/media-centre/news/research-news/awarding-window-consortium-15-million-new-research/">Awarding the WINDOW Consortium £1.5 million for new research into glioblastoma</a></li>
                
                <li><a href="/media-centre/news/research-news/research-using-zika-virus-treat-glioblastoma/">The latest research developments using the Zika virus to treat glioblastoma</a></li>
                
                <li><a href="/media-centre/news/latest-news/not-so-tricky-conversation/">A (not so) tricky conversation</a></li>
                
                <li><a href="/media-centre/news/latest-news/launching-our-live-chat-service/">Launching our Live Chat service</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-are-we-brink-childhood-brain-tumour-breakthro/">Blog: Are we on the brink of a childhood brain tumour breakthrough?</a></li>
                
                <li><a href="/media-centre/news/latest-news/response-uk-governments-position-paper-science-inn/">A response to the UK Government’s position paper on science &amp; innovation</a></li>
                
                <li><a href="/media-centre/news/headsmart-news/headsmart-wins-national-lottery-award/">HeadSmart wins National Lottery Award</a></li>
                
                <li><a href="/media-centre/news/research-news/barcoding-brain-tumours/">Barcoding brain tumours</a></li>
                
                <li><a href="/media-centre/news/latest-news/our-response-life-sciences-industrial-strategy/">Our response to The Life Sciences Industrial Strategy</a></li>
                
                <li><a href="/media-centre/news/latest-news/martino-sclavi-talks-about-how-his-diagnosis-left-/">Martino Sclavi talks about how his diagnosis left him unable to read but inspired his first book</a></li>
                
                <li><a href="/media-centre/news/latest-news/united-states-food-and-drug-association-has-approv/">The United States Food and Drug Association has approved the investigation of a new immunotherapy drug targeting Glioblastoma</a></li>
                
                <li><a href="/media-centre/news/brian-news/world-first-patient-databank/">Launching our world-first patient Databank</a></li>
                
                <li><a href="/media-centre/news/latest-news/announcing-global-research-initiatives/">Announcing our award of £3.8 million for five global research initiatives</a></li>
                
                <li><a href="/media-centre/news/latest-news/supporting-trustedoctors-virtual-platform-allowing/">Supporting Trustedoctor’s virtual platform allowing brain tumour patients access to world leading doctors</a></li>
                
                <li><a href="/media-centre/news/research-news/nanoswimmers-could-transport-drugs/">Nanoswimmers could be used to transport drugs past the blood brain barrier</a></li>
                
                <li><a href="/media-centre/news/general-news/mothers-journey-through-grief-and-loss-displayed-n/">A mother’s journey through grief and loss</a></li>
                
                <li><a href="/media-centre/news/partnership-news/floor-wall-tee-help-us-defeat-brain-tumours/">Floor &amp; Wall Ltd tee off to help us defeat brain tumours</a></li>
                
                <li><a href="/media-centre/news/research-news/article-published-nature-communication-explains-wh/">New article explains why long-term survivors of childhood cancers develop meningiomas</a></li>
                
                <li><a href="/media-centre/news/research-news/experience-research/">Experience research into brain tumours hands-on</a></li>
                
                <li><a href="/media-centre/news/partnership-news/underbelly-launches-big-brain-benefit/">Underbelly launches The Big Brain Benefit</a></li>
                
                <li><a href="/media-centre/news/partnership-news/evolution-coaching-becomes-our-longest-standing-pa/">Evolution Coaching becomes our longest standing partner</a></li>
                
                <li><a href="/media-centre/news/research-news/new-breakthrough-medulloblastoma/">New breakthrough into Medulloblastoma </a></li>
                
                <li><a href="/media-centre/news/latest-news/launching-our-teenage-and-young-adult-service/">Launching our Teenage and Young Adult Service</a></li>
                
                <li><a href="/media-centre/news/latest-news/english-cancer-patient-experience-survey-published/">English Cancer Patient Experience Survey published</a></li>
                
                <li><a href="/media-centre/news/latest-news/tom-daley-front-our-bbc-lifeline-appeal/">Tom Daley to front our BBC Lifeline appeal</a></li>
                
                <li><a href="/media-centre/news/latest-news/samantha-dickson-brain-cancer-unit-discover-brain-/">The Samantha Dickson Brain Cancer Unit discover brain mechanism that could target future therapies</a></li>
                
                <li><a href="/media-centre/news/latest-news/blog-ed-kerry-distance-runner/">Blog: Ed Kerry, distance runner</a></li>
                
                <li><a href="/media-centre/news/latest-news/researchers-find-ultrasound-may-help-get-drugs-acr/">Researchers find that ultrasound may help get drugs across the blood-brain barrier</a></li>
                
                <li><a href="/media-centre/news/policy-news/welsh-government-publishes-second-cancer-survey/">Welsh government publishes second Cancer Patient Experience Survey</a></li>
                
                <li><a href="/media-centre/news/latest-news/call-routine-dna-test-be-offered-all-cancer-patien/">Call for routine DNA test to be offered to all cancer patients</a></li>
                
                <li><a href="/media-centre/news/research-news/5-ala-gets-fda-approval/">5-ALA gets FDA approval</a></li>
                
                <li><a href="/media-centre/news/partnership-news/aykroyd-sonss-toughest-challenge-yet/">Aykroyd &amp; Sons&#39;s toughest challenge yet</a></li>
                
                <li><a href="/media-centre/news/headsmart-news/vote-headsmart/">Vote for HeadSmart!</a></li>
                
                <li><a href="/media-centre/news/latest-news/researchers-develop-probe-helps-detect-cancers-cel/">Researchers develop a probe that helps detect cancers cells with almost 100% accuracy</a></li>
                
                <li><a href="/media-centre/news/research-news/launching-everest-centre-research-childhood-brain/">Launching The Everest Centre for research into childhood brain tumours</a></li>
                
                <li><a href="/media-centre/news/latest-news/scientists-have-discovered-lack-editing-could-be-d/">Scientists have discovered that a lack of ‘editing’ could be driving the most aggressive brain tumours</a></li>
                
                <li><a href="/media-centre/news/latest-news/scientists-have-discovered-protein-could-potential/">Scientists have discovered a protein that could potentially predict glioblastoma outcomes</a></li>
                
                <li><a href="/media-centre/news/policy-news/general-election-2017-result-no-overall-majority/">General Election 2017 Result: No overall majority as Labour make unexpected gains</a></li>
                
                <li><a href="/media-centre/news/latest-news/researchers-found-changes-blood/">Researchers from the University of Ohio have found changes in blood that are detectable five years before the diagnosis of brain cancer</a></li>
                
                <li><a href="/media-centre/news/latest-news/scientists-discover-enzyme-supports-brain-tumour-g/">Scientists discover enzyme that supports brain tumour growth</a></li>
                
                <li><a href="/media-centre/news/policy-news/less-survivable-cancers-taskforce-launch/">Proud to be part of the launch of Less Survivable Cancers Taskforce</a></li>
                
                <li><a href="/media-centre/news/latest-news/zika-virus-to--treat-glioblastomas/">Could the Zika virus be used to treat glioblastomas?</a></li>
                
                <li><a href="/media-centre/news/research-news/new-insight-into-medulloblastoma/">New insight into medulloblastoma</a></li>
                
                <li><a href="/media-centre/news/research-news/our-new-patient-led-data-bank-initiative/">Announcing our new patient-led data bank initiative</a></li>
                
                <li><a href="/media-centre/news/latest-news/co-funding-marie-curie-research/">We are co-funding Marie Curie’s call to address gaps in palliative and end of life care research</a></li>
                
                <li><a href="/media-centre/news/latest-news/university-fashion-show-raises-28000/">University fashion show raises £28,000 </a></li>
                
                <li><a href="/media-centre/news/blog-post/benefit-cut-equals-further-hurt-bereaved/">Benefit cut equals further hurt for the bereaved</a></li>
                
                <li><a href="/media-centre/news/latest-news/uk-research-use-cannabidiol-treat-brain-tumours/">UK research into the use of cannabidiol to treat brain tumours</a></li>
                
                <li><a href="/media-centre/news/partnership-news/team-ipreo-take-tough-mudder/">Team Ipreo take on Tough Mudder</a></li>
                
                <li><a href="/media-centre/news/policy-news/united-call-one-year-survival-targets/">United in the call for brain tumour one-year survival targets to be met</a></li>
                
                <li><a href="/media-centre/news/policy-news/snap-general-election-called-our-battle-continues/">As a snap general election is called, our battle continues</a></li>
                
                <li><a href="/media-centre/news/latest-news/blog-yasir-chowdhury-trainee-neurosurgeon/">Blog: Yasir Chowdhury, trainee neurosurgeon</a></li>
                
                <li><a href="/media-centre/news/policy-news/policy-blog-12-april-2017/">Policy blog - 12 April 2017</a></li>
                
                <li><a href="/media-centre/news/latest-news/immunotherapy-drug-trials/">Immunotherapy drug shows lack of promise in Phase 3 clinical trial for glioblastoma patients</a></li>
                
                <li><a href="/media-centre/news/latest-news/new-non-disruptive-brain-surgery-technology/">A new, non-disruptive brain surgery technology is now being used in London</a></li>
                
                <li><a href="/media-centre/news/latest-news/mental-health-quality-of-life/">We know mental health can affect those living with a brain tumour, but are we doing enough?</a></li>
                
                <li><a href="/media-centre/news/policy-news/how-has-devomanc-affected-brain-tumour-charity/">How has DevoManc affected The Brain Tumour Charity?</a></li>
                
                <li><a href="/media-centre/news/latest-news/encouraging-results-glioblastoma-patients-using-ne/">Encouraging results for glioblastoma patients using a new clinical approach to current treatments</a></li>
                
                <li><a href="/media-centre/news/latest-news/glasgows-32m-imaging-centre-excellence-has-now-ope/">Glasgow’s £32m Imaging Centre of Excellence has now opened</a></li>
                
                <li><a href="/media-centre/news/partnership-news/diageo-dinner-memory-much-loved-colleague/">Diageo dinner in memory of much-loved colleague</a></li>
                
                <li><a href="/media-centre/news/research-news/gene-editing-techniques/">Gene-editing techniques give new insight on key protein involved in medulloblastoma development</a></li>
                
                <li><a href="/media-centre/news/latest-news/research-reveals-new-genetic-errors-lead-glioma/">Pioneering research reveals new genetic errors that lead to an inherited risk of developing glioma </a></li>
                
                <li><a href="/media-centre/news/policy-news/our-work-house-lords-select-committee-charities/">Our work with House of Lords Select Committee on Charities</a></li>
                
                <li><a href="/media-centre/news/research-news/research-molecule-dipg-tumour/">New research uncovers a molecule that halts DIPG tumour growth</a></li>
                
                <li><a href="/media-centre/news/support-news/equal-access-benefits-brain-tumour-patients/">Delivering equal access to benefits for brain tumour patients</a></li>
                
                <li><a href="/media-centre/news/policy-news/cancer-patients-miss-out-access-clinical-trials/">Childhood cancer patients in the UK will miss out on access to clinical trials for new treatments</a></li>
                
                <li><a href="/media-centre/news/research-news/developments-leeds-research-brain-tumours/">Recent developments of our Leeds-based research into brain tumour treatment </a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-eams-failing-patients/">Blog: Is the EAMS failing patients?</a></li>
                
                <li><a href="/media-centre/news/research-news/water-insoluble-drug-high-grade/">Convection enhanced delivery of a water insoluble drug shows early promise in targeting high grade brain tumours</a></li>
                
                <li><a href="/media-centre/news/blog-post/women-labelled-mentally-ill-brain-tumour/">Are women being labelled as mentally ill when in fact the cause of their symptoms is potentially more deadly?</a></li>
                
                <li><a href="/media-centre/news/research-news/advanced-imaging-predict-glioblastoma-progression/">Clinical trial using an advanced imaging method could predict sites of glioblastoma tumour progression</a></li>
                
                <li><a href="/media-centre/news/support-news/trial-virtual-reality-mri-scan/">King’s College Hospital trials Virtual Reality MRI scanner app to help patients</a></li>
                
                <li><a href="/media-centre/news/research-news/precision-medicine-treating-child-brain-tumours/">New research shows benefits of precision medicine in treating brain tumours in children</a></li>
                
                <li><a href="/media-centre/news/blog-post/fleurs-story/">A siblings story - When Fleur’s sister Grace was diagnosed, her family world fell apart</a></li>
                
                <li><a href="/media-centre/news/research-news/cannabis-medication-shows-promise-gbm/">Cannabis-derived medication shows promise in Phase 2 clinical study</a></li>
                
                <li><a href="/media-centre/news/research-news/smart-needle-could-transform-neurosurgery/">Revolutionary new smart-needle could transform neurosurgery</a></li>
                
                <li><a href="/media-centre/news/latest-news/bbc-children-need-and-st-james-place-foundation/">BBC Children in Need and St James&#39;s Place Foundation award grants to our support services</a></li>
                
                <li><a href="/media-centre/news/policy-news/leading-biobanking-early-diagnosis/">The Brain Tumour Charity asked to lead on discussions around biobanking and early diagnosis</a></li>
                
                <li><a href="/media-centre/news/policy-news/brexit-research-brain-tumours/">Blog: What Brexit means for research into brain tumours</a></li>
                
                <li><a href="/media-centre/news/research-news/salmonella-target-brain-tumour-cells/">Scientists find unlikely ally in Salmonella to target brain tumour cells </a></li>
                
                <li><a href="/media-centre/news/research-news/dna-repair-protein-treatment-glioblastoma/">Targeting DNA repair protein for the treatment of glioblastoma</a></li>
                
                <li><a href="/media-centre/news/headsmart-news/mum-thanks-headsmart-after-sons-brain-tumour/">Mum thanks HeadSmart after son’s brain tumour diagnosis</a></li>
                
                <li><a href="/media-centre/news/blog-post/more-effective-brain-tumour-treatments/">Blog: Laying the foundations for more effective brain tumour treatments</a></li>
                
                <li><a href="/media-centre/news/headsmart-news/HeadSmart-campaign-relaunch/">HeadSmart campaign launches new website and drive to further reduce childhood brain tumour diagnosis times</a></li>
                
                <li><a href="/media-centre/news/research-news/immunotherapy-and-gene-therapy-glioblastoma/">Immunotherapy and gene therapy double attack against glioblastoma shows therapeutic potential </a></li>
                
                <li><a href="/media-centre/news/support-news/nhs-england-improve-access-clinical-nurse/">Working with NHS England to improve access to Clinical Nurse Specialists </a></li>
                
                <li><a href="/media-centre/news/policy-news/our-meeting-dvla-changes-announced/">Our meeting with the DVLA and the changes announced</a></li>
                
                <li><a href="/media-centre/news/research-news/metabolic-pathways-glioblastoma-growth/">Exploiting metabolic pathways used by glioblastoma cells to halt tumour growth</a></li>
                
                <li><a href="/media-centre/news/support-news/graces-vlog-life-brain-tumour/">Grace’s vlog: documenting life with a brain tumour</a></li>
                
                <li><a href="/media-centre/news/research-news/our-ambitions-exceed-those-cancer-research-uk/">Our ambitions exceed those of Cancer Research UK</a></li>
                
                <li><a href="/media-centre/news/research-news/research-round-dr-paul-brennan-university-edinburg/">A research round-up from Dr Paul Brennan at the University of Edinburgh</a></li>
                
                <li><a href="/media-centre/news/research-news/biobanking-workshop/">We are hosting the biobanking workshop initiative in London today</a></li>
                
                <li><a href="/media-centre/news/research-news/canadian-researchers-discover-cell-subgroups-treat/">Canadian researchers discover cell subgroups in treatment of paediatric ATRT brain cancer </a></li>
                
                <li><a href="/media-centre/news/latest-news/brain-tumour-patients-denied-life-extending-drug/">Brain tumour patients denied life-extending drug in ‘postcode lottery’</a></li>
                
                <li><a href="/media-centre/news/latest-news/new-proton-beam-centre-reading/">New Proton Beam centre begins construction in Reading</a></li>
                
                <li><a href="/media-centre/news/research-news/our-scientific-advisory-board/">We are proud to announce the formation of our Scientific Advisory Boards</a></li>
                
                <li><a href="/media-centre/news/policy-news/blog-brain-tumours-money/">Blog: Research into brain tumours - why money isn’t everything</a></li>
                
                <li><a href="/media-centre/news/research-news/new-biomarkers-improve-diagnosis/">New biomarker could improve the diagnosis of diffuse gliomas </a></li>
                
                <li><a href="/media-centre/news/research-news/why-were-investing-new-brain-tumour-fund/">Why we&#39;re investing in new brain tumour fund</a></li>
                
                <li><a href="/media-centre/news/latest-news/bbc-one-drama-missing/">Julien Baptiste in the BBC One drama The Missing, sheds light on effects of a brain tumour diagnosis</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/headeast-vietnam-cycle/">Headeast Vietnam cycle challenge battle first day typhoon to raise funds for research into brain tumours</a></li>
                
                <li><a href="/media-centre/news/research-news/edinburgh-glioblastoma-research-uses-zebrafish-cel/">Edinburgh research discovers new relationship between immune and glioblastoma cells</a></li>
                
                <li><a href="/media-centre/news/policy-news/review-informed-choice-released/">Review of Informed Choice released</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-unexpected-journey/">Blog: An unexpected journey</a></li>
                
                <li><a href="/media-centre/news/research-news/device-extends-survival-glioblastoma/">New device ‘extends survival’ for glioblastoma patients, trial finds</a></li>
                
                <li><a href="/media-centre/news/research-news/cancer-moonshot-2020-launches-brain-tumour-genome-/">Cancer Moonshot 2020 launches brain tumour genome project</a></li>
                
                <li><a href="/media-centre/news/policy-news/new-report-research-and-leaving-eu/">New report on research and leaving the EU</a></li>
                
                <li><a href="/media-centre/news/research-news/cutting-edge-mri/">Scotland sees installation of cutting-edge MRI technology</a></li>
                
                <li><a href="/media-centre/news/latest-news/our-patient-guide-launches/">Our Patient Guide to Brain Tumour Treatment and Services launches today</a></li>
                
                <li><a href="/media-centre/news/research-news/glioblastoma-pink-drink/">First stage of Addenbrooke’s trials of glioblastoma ‘pink drink’ research nears completion</a></li>
                
                <li><a href="/media-centre/news/research-news/brain-tumour-surgery-genomics-england/">Unique opportunity for surgery patients to help decode brain tumours</a></li>
                
                <li><a href="/media-centre/news/latest-news/walton-centre-liverpool-given-top-ranking/">Walton Centre in Liverpool given top ranking by health watchdog</a></li>
                
                <li><a href="/media-centre/news/research-news/brain-tumour-surgery-improve-survival/">Brain tumour surgery: experts call for change to improve survival </a></li>
                
                <li><a href="/media-centre/news/latest-news/actor-owain-arthur-thanks-the-charity/">Owain’s story: I couldn’t have played Glen without the charity</a></li>
                
                <li><a href="/media-centre/news/policy-news/task-and-finish-group-brain-tumour-research/">Task and Finish group on brain tumour research</a></li>
                
                <li><a href="/media-centre/news/latest-news/record-numbers-2016-twilight-walks/">Record numbers take part in our 2016 Twilight Walks</a></li>
                
                <li><a href="/media-centre/news/blog-post/brain-tumour-support-why-we-need-get-personal/">Blog: Support for brain tumours - why we need to get personal</a></li>
                
                <li><a href="/media-centre/news/research-news/charity-investment-research-amrc/">Charity Investment in Research: AMRC Findings</a></li>
                
                <li><a href="/media-centre/news/research-news/hope-ollie-fundraising-campaign/">Hope for Ollie following fundraising campaign</a></li>
                
                <li><a href="/media-centre/news/supporter-stories/louise-story-childrens-daddy-lives/">Louise’s story: My children’s daddy lives on through them</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/brain-tumour-dads-300-mile-cycling-team/">Brain tumour dad’s 300-mile cycling team raises nearly £138,000</a></li>
                
                <li><a href="/media-centre/news/latest-news/casualty-actors-praise-crucial-advice/">Casualty actors praise &#39;crucial advice&#39; from The Charity</a></li>
                
                <li><a href="/media-centre/news/latest-news/blog-olivers-story/">Blog: Oliver&#39;s story</a></li>
                
                <li><a href="/media-centre/news/latest-news/brain-tumour-blogger-wins-award/">Newcastle-Upon-Tyne brain tumour blogger wins North East charity award</a></li>
                
                <li><a href="/media-centre/news/latest-news/tom-daley-losing-his-dad/">Tom Daley talks candidly about losing his Dad to a brain tumour</a></li>
                
                <li><a href="/media-centre/news/latest-news/us-doctors-test-new-glioblastoma-drug-treatment/">US doctors test new glioblastoma drug treatment</a></li>
                
                <li><a href="/media-centre/news/latest-news/hospital-opens-world-class-cancer-centre/">Guy’s Hospital opens ‘world-class’ cancer centre in London</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/discover-adventure-our-iceland-trek-2017/">Discover Adventure on our Iceland Trek 2017</a></li>
                
                <li><a href="/media-centre/news/latest-news/microsofts-cancer-defeating-plan/">Microsoft&#39;s cancer defeating plans with ‘smart’ molecular systems</a></li>
                
                <li><a href="/media-centre/news/research-news/paediatric-brain-cancer-leukemia/">New report shows that paediatric brain cancer now more deadly than childhood leukemia in the US</a></li>
                
                <li><a href="/media-centre/news/latest-news/two-accolades-third-sector-awards/">The Brain Tumour Charity scoops two accolades at the prestigious Third Sector Awards</a></li>
                
                <li><a href="/media-centre/news/brian-news/nhs-approved-health-apps/">Plans to allow NHS-approved health apps to feed patients’ data into health records</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/remembering-a-charity/">This week we want to spread the word about writing a Will and remembering a charity</a></li>
                
                <li><a href="/media-centre/news/blog-post/my-bucket-list-memories/">My bucket list is creating magical memories for my kids</a></li>
                
                <li><a href="/media-centre/news/latest-news/appointment-professor-alan-palmer/">We are proud to announce the appointment of Professor Alan Palmer as our new trustee</a></li>
                
                <li><a href="/media-centre/news/latest-news/gps-increased-awareness-chemotherapy/">Cancer doctors call for GPs’ increased awareness of chemotherapy effects on teens and young adults</a></li>
                
                <li><a href="/media-centre/news/research-news/opening-europes-biggest-biomedical-lab/">London sees the opening of Europe’s biggest biomedical laboratory</a></li>
                
                <li><a href="/media-centre/news/research-news/obama-appoints-brain-tumour-professor/">President Obama appoints world-renown brain tumour professor to US National Cancer Advisory Board</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-ewan-and-kerrie/">Blog: Ewan and Kerrie&#39;s story</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-pete-and-christinas-story/">Blog: Pete and Christina&#39;s story</a></li>
                
                <li><a href="/media-centre/news/research-news/googles-deepmind-ai-brain-tumour/">Google’s DeepMind AI division to analyse brain tumour scans</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-mollys-story/">Blog: Molly&#39;s Story</a></li>
                
                <li><a href="/media-centre/news/partnership-news/casualty-star-jason-durr/">Casualty star, Jason Durr backs The Brain Tumour Charity in memory of Ella</a></li>
                
                <li><a href="/media-centre/news/support-news/perthshire-family-day/">Perthshire hosts Family Day for brain tumour families</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/charity-trustees-500-miles/">Charity trustees Andy and Tim walk 500 miles in memory of Joseph</a></li>
                
                <li><a href="/media-centre/news/latest-news/casualty-back-brain-tumour/">As Casualty back on air with brain tumour storyline – your verdict so far</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/extreme-cycle-challenge/">Places available on extreme cycle challenge to raise funds for childhood early diagnosis</a></li>
                
                <li><a href="/media-centre/news/research-news/robot-assisted-brain-surgery/">UK firm and King’s College London behind new robot-assisted brain surgery</a></li>
                
                <li><a href="/media-centre/news/blog-post/hollys-story/">Vlog: Holly’s story</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-zoe-story/">Blog: Zoe&#39;s story</a></li>
                
                <li><a href="/media-centre/news/research-news/scientists-further-their-understanding-how-glioma-/">Scientists further their understanding of how glioma cells adapt and thrive</a></li>
                
                <li><a href="/media-centre/news/research-news/genomics-england-recruiting/">Genomics England are now recruiting brain tumour participants</a></li>
                
                <li><a href="/media-centre/news/blog-post/nathan-and-haileys-story/">Blog: Nathan and Hailey’s Story</a></li>
                
                <li><a href="/media-centre/news/latest-news/thousands-surviving-decades-after-cancer-diagnosis/">Thousands surviving for decades after cancer diagnosis… But what about brain tumours?</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-neal-and-saras-story/">Blog: Neal and Sara&#39;s story</a></li>
                
                <li><a href="/media-centre/news/latest-news/top-bbc-drama-casualty/">The Brain Tumour Charity advises top BBC drama, Casualty, on brain tumour storyline</a></li>
                
                <li><a href="/media-centre/news/blog-post/diagnosis-times/">How long does it take to get diagnosed?</a></li>
                
                <li><a href="/media-centre/news/latest-news/st-andrew-teams-brain-tumour-charity/">St Andrews Fashion Show teams up with The Brain Tumour Charity</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/launching-our-iceland-2017-fundraising-trek/">Launching our Iceland 2017 fundraising trek</a></li>
                
                <li><a href="/media-centre/news/policy-news/financial-implications-brain-tumour/">Our research highlights the financial implications of a brain tumour diagnosis</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-ambers-story/">Blog: Amber’s story</a></li>
                
                <li><a href="/media-centre/news/policy-news/thousands-benefit-early-supportive-care-programme/">Thousands to benefit from Enhanced Supportive Care programme</a></li>
                
                <li><a href="/media-centre/news/supporter-stories/emily-morris-story/">&quot;I take one step at a time&quot; - Emily&#39;s story</a></li>
                
                <li><a href="/media-centre/news/policy-news/brain-tumour-patients-continue-report-poorer-exper/">Brain tumour patients continue to report a poorer experience of diagnosis, treatment and care</a></li>
                
                <li><a href="/media-centre/news/policy-news/nice-release-new-quality-standard-cancer-referral/">NICE release a new Quality Standard for cancer referral</a></li>
                
                <li><a href="/media-centre/news/research-news/newcastle-scientists-hail-new-understanding-glioma/">Newcastle scientists hail new understanding of glioma cell growth</a></li>
                
                <li><a href="/media-centre/news/research-news/washington-cancer-moonshot-summit-chaired-vice-pre/">Washington Cancer Moonshot summit chaired by Vice President Biden</a></li>
                
                <li><a href="/media-centre/news/research-news/researchers-identify-protein-could-help-prevent-gl/">Researchers identify a protein that could help prevent glioblastoma spreading</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-joshs-story/">Blog: Josh’s story</a></li>
                
                <li><a href="/media-centre/news/policy-news/the-eu-decision/">The EU decision: Our strategy continues</a></li>
                
                <li><a href="/media-centre/news/latest-news/new-ucl-study-finds-university-graduates-more-pron/">New UCL study finds university graduates more prone to brain tumours</a></li>
                
                <li><a href="/media-centre/news/latest-news/nhs-robotic-radiotherapy/">NHS England to double pioneering form of robotic radiosurgery</a></li>
                
                <li><a href="/media-centre/news/policy-news/government-publishes-formal-response/">Government publishes formal response to calls for more spending on research into brain tumours</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-dylans-story/">Blog: Dylan’s story</a></li>
                
                <li><a href="/media-centre/news/latest-news/losing-my-place-report-published/">Losing My Place: The Reality of Childhood with a Brain Tumour published today</a></li>
                
                <li><a href="/media-centre/news/research-news/lab-experience/">UCL Institute of Child Health looking for research lab volunteers</a></li>
                
                <li><a href="/media-centre/news/policy-news/cancer-registry-data/">Government recommendations for the cancer registry data</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/launching-twilight-walks-2016/">Launching The Twilight Walks 2016</a></li>
                
                <li><a href="/media-centre/news/research-news/research-announced-today/">Research initiatives totalling £4.3 million announced today by The Brain Tumour Charity</a></li>
                
                <li><a href="/media-centre/news/research-news/genetically-modified-polio-virus-used-trials-treat/">Genetically-modified polio virus used in trials treating glioblastoma</a></li>
                
                <li><a href="/media-centre/news/latest-news/who-updated-classification-tumours/">WHO releases updated Classification of Tumours of the Central Nervous System</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/sarahs-challenge/">Fundraiser runs 1,000 miles in memory of her mum</a></li>
                
                <li><a href="/media-centre/news/policy-news/national-cancer-diagnosis-audit-will-better-unders/">The National Cancer Diagnosis Audit will better understand the journey to diagnosis</a></li>
                
                <li><a href="/media-centre/news/blog-post/shona-daughter-brain-donation/">Shona Floyd on her daughter Tasha’s brain donation to further help research into DIPG</a></li>
                
                <li><a href="/media-centre/news/general-news/experts-deliver-glowing-verdict/">Experts deliver glowing verdict as we work towards defeating brain tumours</a></li>
                
                <li><a href="/media-centre/news/latest-news/sean-parker-pledges-250-million/">Ex-Facebook President Sean Parker pledges $250million to research immunotherapy for cancer treatment</a></li>
                
                <li><a href="/media-centre/news/policy-news/petitions-committee-report-research-funding-brain-/">Petitions Committee report on research funding for brain tumours debated in House of Commons</a></li>
                
                <li><a href="/media-centre/news/research-news/new-imaging-technique/">New imaging technique for cancer drugs trialled in the UK</a></li>
                
                <li><a href="/media-centre/news/latest-news/proton-beamy-university-college-london/">Proton Beam construction underway at University College London Hospital</a></li>
                
                <li><a href="/media-centre/news/research-news/genetic-test-childhood-brain-tumour/">New genetic test offers hope of more effective childhood cancer treatments</a></li>
                
                <li><a href="/media-centre/news/headsmart-news/bournemouth-headsmart/">Brain tumour survivor backs Bournemouth HeadSmart card distribution</a></li>
                
                <li><a href="/media-centre/news/policy-news/debate-westminster-called-following-petition-resea/">MPs to debate brain tumour petition report</a></li>
                
                <li><a href="/media-centre/news/latest-news/launch-our-devolved-nations-manifestos/">The launch of our devolved nations Manifestos</a></li>
                
                <li><a href="/media-centre/news/latest-news/brain-tumour-charitys-response-uk-government-propo/">The Brain Tumour Charity’s response to UK Government proposals on PIP</a></li>
                
                <li><a href="/media-centre/news/research-news/new-research-funding-announcement-open-source-rese/">Our new research partnership with the Structural Genomics Consortium</a></li>
                
                <li><a href="/media-centre/news/general-news/cancer-patient-designs-cancer-board-badges/">Cancer patient designs ‘Cancer on board’ badges</a></li>
                
                <li><a href="/media-centre/news/latest-news/petitions-committees-report-funding-research-brain/">The Petitions Committee’s report on funding for research in to brain tumours is released today</a></li>
                
                <li><a href="/media-centre/news/latest-news/our-volunteer-Paul-wins-award/">Paul Nicholson wins Healthcare Volunteer of the Year award </a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-dr-paul-brennan-cut-brain-tumour-diagnosis/">Blog: Dr Paul Brennan - How can we cut delays to brain tumour diagnosis?</a></li>
                
                <li><a href="/media-centre/news/latest-news/brain-tumour-awareness-month/">Brain Tumour Awareness Month</a></li>
                
                <li><a href="/media-centre/news/latest-news/healthcare-agency-charity-of-the-year/">Healthcare agency chooses The Brain Tumour Charity as their Team Charity for 2016</a></li>
                
                <li><a href="/media-centre/news/latest-news/french-neurosurgeons-use-virtual-reality-map-brain/">French neurosurgeons use Virtual Reality to map brain tumour during surgery</a></li>
                
                <li><a href="/media-centre/news/latest-news/many-nhs-mri-machines-are-out-date-according-recen/">Many NHS MRI machines are out of date according to a recent report</a></li>
                
                <li><a href="/media-centre/news/policy-news/introducing-manifestos-scotland-wales-ni/">Introducing manifestos for Scotland, Wales and Northern Ireland</a></li>
                
                <li><a href="/media-centre/news/brian-news/public-health-england-blog/">Public Health England blog outlines the vital importance of collecting cancer patient data</a></li>
                
                <li><a href="/media-centre/news/latest-news/professor-richard-gilbertson-our-new-chair-grant-r/">Professor Richard Gilbertson is our new Chair of the Grant Review and Monitoring committee</a></li>
                
                <li><a href="/media-centre/news/support-news/my-brother-has-a-brain-tumour/">Introducing our latest animation: My Brother has a Brain Tumour </a></li>
                
                <li><a href="/media-centre/news/latest-news/sheffield-childrens-hospital-pioneers-new-sat-nav-/">Sheffield Children’s Hospital pioneers new ‘sat nav’ of the brain to map tumours</a></li>
                
                <li><a href="/media-centre/news/latest-news/parents-boy-who-died-brain-tumour-create-videogame/">Parents of boy who died from a brain tumour create videogame experience</a></li>
                
                <li><a href="/media-centre/news/latest-news/bandanas-brain-tumours-2016/">#WearItOut for Bandanas for Brain Tumours 2016</a></li>
                
                <li><a href="/media-centre/news/policy-news/finding-myself-report/">The reality of brain tumour treatment and care: new report for policy makers</a></li>
                
                <li><a href="/media-centre/news/latest-news/american-researchers-explore-cell-enzyme-potential/">American researchers explore cell enzyme as a potential paediatric brain tumour treatment</a></li>
                
                <li><a href="/media-centre/news/latest-news/research-developments-2016-what-experts-think/">Research developments in 2016: what the experts think</a></li>
                
                <li><a href="/media-centre/news/latest-news/uk-based-scientists-study-trace-metal-elements-ide/">UK-based scientists study trace metal elements to identify brain tumours</a></li>
                
                <li><a href="/media-centre/news/blog-post/earl-spencer-why-i-support-brain-tumour-charity/">Blog: Earl Spencer - Why I support The Brain Tumour Charity</a></li>
                
                <li><a href="/media-centre/news/latest-news/cambridge-university-scientists-develop-new-blood-/">Cambridge University scientists develop new blood test for childhood cancers including brain tumours</a></li>
                
                <li><a href="/media-centre/news/latest-news/tech-firm-virtual-reality-cancer-immunotherapy/">New Zealand tech firm produce virtual reality cancer immunotherapy visualisation</a></li>
                
                <li><a href="/media-centre/news/latest-news/american-researchers-trial-experimental-drugs/">American researchers trial experimental drugs that may halt brain tumour growth</a></li>
                
                <li><a href="/media-centre/news/policy-news/appg-brain-tumours-week/">APPG on Brain Tumours this week</a></li>
                
                <li><a href="/media-centre/news/latest-news/nhs-proton-beam-centres-aim-treat-game-changing-15/">NHS proton beam centres aim to treat a “game-changing” 1,500 patients a year</a></li>
                
                <li><a href="/media-centre/news/research-news/deadly-viruses-could-help-destroy-glioma-tumours/">How the deadly Lassa and Ebola viruses could help destroy brain tumour cells</a></li>
                
                <li><a href="/media-centre/news/latest-news/children-and-young-people-survey-extended/">Children and young people survey extended</a></li>
                
                <li><a href="/media-centre/news/latest-news/tributes-after-tasha-loses-brain-tumour-fight/">Tributes after Tasha loses brain tumour fight</a></li>
                
                <li><a href="/media-centre/news/policy-news/new-nice-guideline-brain-tumours/">New NICE guideline on brain tumours</a></li>
                
                <li><a href="/media-centre/news/latest-news/be-star-christmas-campaign-launches/">Be a Star Christmas campaign launches</a></li>
                
                <li><a href="/media-centre/news/latest-news/ten-year-olds-scan-delay-after-brain-tumour-battle/">Ten-year-old&#39;s scan delay after brain tumour battle</a></li>
                
                <li><a href="/media-centre/news/latest-news/china-joins-glioblastoma-australian-clinical-trial/">China joins glioblastoma Australian clinical trial project</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-post-computer-games-can-build-memory-skills-a/">Computer games can build memory skills and a sharper mind – could they help brain tumour patients?</a></li>
                
                <li><a href="/media-centre/news/research-news/american-research-identifies-glioblastoma-limiti/">American research identifies glioblastoma-limiting drug</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/record-breaking-rower-pays-tribute-team-ocean-valo/">Record-breaking rower pays tribute to team Ocean Valour</a></li>
                
                <li><a href="/media-centre/news/supporter-stories/story-hope-alice-and-emma/">Story of hope: Alice and Emma</a></li>
                
                <li><a href="/media-centre/news/research-news/breakthrough-brain-tumour-liquid-biopsy/">Breakthrough in brain tumour liquid biopsy</a></li>
                
                <li><a href="/media-centre/news/research-news/gm-algae-holds-potential-breakthrough-treating-bra/">GM algae holds potential breakthrough in treating brain tumours</a></li>
                
                <li><a href="/media-centre/news/policy-news/youre-invited-our-appg-brain-tumours/">You&#39;re invited to our APPG on brain tumours</a></li>
                
                <li><a href="/media-centre/news/latest-news/emergency-diagnosis-more-likely-brain-tumour-patie/">Emergency diagnosis more likely for brain tumour patients</a></li>
                
                <li><a href="/media-centre/news/research-news/canadian-scientists-develop-game-changer-blood-bra/">Canadian scientists develop ‘game-changer’ blood-brain barrier treatment</a></li>
                
                <li><a href="/media-centre/news/policy-news/-patent-bill-blocked-house-commons/">Off-patent Drugs Bill blocked at House of Commons</a></li>
                
                <li><a href="/media-centre/news/research-news/american-brain-tumour-association-awards-1million-/">The American Brain Tumour Association awards $1million for innovative research</a></li>
                
                <li><a href="/media-centre/news/research-news/protein-discovery-could-lead-more-effective-treatm/">Protein discovery could lead to more effective treatment</a></li>
                
                <li><a href="/media-centre/news/policy-news/young-ambassador-meets-caroline-lucas-mp/">Young Ambassador meets Caroline Lucas MP</a></li>
                
                <li><a href="/media-centre/news/policy-news/clinicians-back-patent-bill/">Clinicians back Off-patent drugs Bill</a></li>
                
                <li><a href="/media-centre/news/policy-news/our-response-accelerated-access-review/">Our response to the Accelerated Access Review</a></li>
                
                <li><a href="/media-centre/news/latest-news/latest-figures-reveal-cancer-diagnosis-times-vary-/">Latest figures reveal where people live could influence cancer diagnosis times</a></li>
                
                <li><a href="/media-centre/news/support-news/gbm-diagnosis-inspires-innovative-patient-support-/">GBM diagnosis inspires innovative patient support strategy</a></li>
                
                <li><a href="/media-centre/news/research-news/diamonds-used-identify-cancerous-tumour-cells/">Diamonds used to identify cancerous tumour cells</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/chris-white-mp-writes-about-twilight-walk-warwick/">Chris White MP writes about The Twilight Walk Warwick</a></li>
                
                <li><a href="/media-centre/news/research-news/new-research-allows-neurosurgeons-see-gbm-tumour-c/">New research allows neurosurgeons to ‘see’ GBM tumour cells</a></li>
                
                <li><a href="/media-centre/news/latest-news/northern-irelands-patient-experience/">Northern Ireland’s first nationwide survey into cancer patient experience is published</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-post-new-treatments-brain-tumours-we-need-thi/">Blog: New treatments for brain tumours: we need to think differently - Prof. Susan Short</a></li>
                
                <li><a href="/media-centre/news/research-news/rabbit-virus-brain-tumours/">How a rabbit virus can work against brain tumour cells</a></li>
                
                <li><a href="/media-centre/news/research-news/american-federal-agency-approves-new-medical-devic/">American federal agency approves new medical device for use in treatment of glioblastoma</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/amelia-gebruers-pride-of-britain/">Our ten-year-old supporter Amelia Gebruers wins a Pride of Britain award</a></li>
                
                <li><a href="/media-centre/news/research-news/gamma-knife-radiosurgery/">Bristol pioneers new development in Gamma Knife radiosurgery</a></li>
                
                <li><a href="/media-centre/news/research-news/deadline-closes-our-latest-funding-calls/">Deadline closes for our latest research funding calls</a></li>
                
                <li><a href="/media-centre/news/research-news/off-patent-bill-2015/">Campaign with us to unlock drugs</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/blog-post-make-difference-and-leave-gift-your-will/">Blog: Make a difference and leave a gift in your Will</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-life-lab-amies-research-experience/">Blog: Life in the Lab - Amie&#39;s research experience</a></li>
                
                <li><a href="/media-centre/news/latest-news/tv-presenter-sue-perkins-reveals-she-living-brain-/">TV presenter Sue Perkins reveals she is living with a brain tumour</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-my-mother-had-terminal-brain-tumour-who-could/">Blog: My mother had a terminal brain tumour. Who could possibly understand?</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/victory-team-ocean-valour-reach-uk/">Victory as team Ocean Valour reach the UK</a></li>
                
                <li><a href="/media-centre/news/latest-news/new-cancer-research-statistics-fast-and-simple-dia/">New Cancer Research statistics on fast and simple diagnosis</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-journey-across-atlantic-helping-drive-earlier/">Blog: Journey across the Atlantic helping to drive earlier diagnosis</a></li>
                
                <li><a href="/media-centre/news/latest-news/patient-questionnaires-could-flag-learning-difficu/">Patient questionnaires could flag learning difficulties in children treated for a brain tumour</a></li>
                
                <li><a href="/media-centre/news/latest-news/our-response-new-independent-cancer-taskforce-repo/">Our response to new Independent Cancer Taskforce report</a></li>
                
                <li><a href="/media-centre/news/latest-news/losing-myself-report-reveals-hardship-and-isolatio/">Losing Myself report reveals the hardship and isolation faced by brain tumour patients</a></li>
                
                <li><a href="/media-centre/news/latest-news/brain-tumour-charity-founders-awarded-mbes/">The Brain Tumour Charity Founders awarded MBE&#39;s</a></li>
                
                <li><a href="/media-centre/news/latest-news/building-connections-better-care/">Building connections to better care</a></li>
                
                <li><a href="/media-centre/news/latest-news/mums-team-ocean-valour-share-their-messages/">Mums of team Ocean Valour share their messages</a></li>
                
                <li><a href="/media-centre/news/research-news/top-10-neuro-oncology-uncertainties-identified-jam/">‘Top 10 Neuro-Oncology Uncertainties’, identified by the James Lind Alliance</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/brain-tumour-charity-shortlisted-100k-grant-masoni/">The Brain Tumour Charity shortlisted for a £100K grant from the Masonic Samaritan Fund</a></li>
                
                <li><a href="/media-centre/news/latest-news/defeating-brain-tumours-our-new-strategy-2015-2020/">Defeating Brain Tumours: Our New Strategy 2015-2020</a></li>
                
                <li><a href="/media-centre/news/fundraising-news/balloons-fly-high-sainsburys-celebrates-charity-pa/">Balloons fly high as Sainsbury’s celebrates charity partnership</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-caring-my-husband-not-burden-i-wish-things-we/">Caring for my husband is not a burden. But I wish things were different.</a></li>
                
                <li><a href="/media-centre/news/support-news/carers-week-2015/">Carers Week 2015</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-saving-young-lives-how-can-we-help/">Blog: Saving young lives - how can we help?</a></li>
                
                <li><a href="/media-centre/news/support-news/charity-hosts-first-paediatric-brain-tumour-inform/">The Charity hosts first Paediatric Brain Tumour Information Day</a></li>
                
                <li><a href="/media-centre/news/support-news/why-do-clinical-trials-matter/">&#39;Why do clinical trials matter?&#39;</a></li>
                
                <li><a href="/media-centre/news/research-news/ok-ask-about-clinical-research/">Ok to Ask about clinical research</a></li>
                
                <li><a href="/media-centre/news/support-news/new-report-suggests-doctors-should-order-fewer-ina/">A new report suggests doctors should order fewer ‘inappropriate’ diagnostic tests</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-why-are-too-many-brain-tumour-patients-robbed/">Blog: Why are too many brain tumour patients robbed of a dignified death?</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-how-we-spend-your-money-question-choice/">Blog: How we spend your money - a question of choice</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-should-it-be-luxury-have-clinical-nurse-speci/">Blog: Should it be a luxury to have a clinical nurse specialist?</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-when-work-doesnt-work-tackling-employment-pro/">Blog: When work doesn’t work - tackling employment problems</a></li>
                
                <li><a href="/media-centre/news/blog-post/blog-brain-tumour-patients-want-try-new-treatments/">Brain tumour patients want to try new treatments. Why isn’t it happening?</a></li>
                
                <li><a href="/media-centre/news/research-news/breakthrough-high-grade-glioma-genetics/">Breakthrough on high grade glioma genetics</a></li>
                
            </ul>
        </div>
    </div>
    

    
    <div id="stories" class="content-block text-block sitemap-listing">
        <div class="wrapper">
            <h2>Stories <a href="#top" class="btn large-btn-clip">Back to top</a></h2>

            <ul>
                
                <li><a href="/get-involved/share-your-story/fiona-mental-health/">Fiona&#39;s Story</a></li>
                
                <li><a href="/get-involved/share-your-story/esmes-story/">Esme&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/shonas-story/">Shona&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/coppings-story/">The Copping&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/kates-twilight-walk/">Kate&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/davids-cordiner-story/">David&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/litas-story/">Lita&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/daniels-story/">Daniel&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/vickys-story/">Vicky&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/tylers-story/">Tyler&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/tashas-story/">Tasha&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/ruths-story/">Ruth&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/pieros-story/">Piero&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/phils-story/">Phil&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/lorraines-story/">Lorraine&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/kierans-story/">Kieran&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/kates-story/">Kate&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/jacks-story/">Jack&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/harveys-story/">Harvey&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/grahams-story/">Graham&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/fionas-story/">Fiona&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/emmas-story/">Emma&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/duncans-story/">Duncan&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/dominics-story/">Dominic&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/davids-tumour-story/">David&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/davids-story/">David&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/colins-story/">Colin&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/brads-story/">Brad&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/berries-story/">Berrie&#39;s story</a></li>
                
                <li><a href="/get-involved/share-your-story/bens-story/">Ben&#39;s story</a></li>
                
            </ul>
        </div>
    </div>
    

    
    <div id="support-groups" class="content-block text-block sitemap-listing">
        <div class="wrapper">
            <h2>Support Groups <a href="#top" class="btn large-btn-clip">Back to top</a></h2>

            <ul>
                
                <li><a href="/get-support/support-your-local-area/ask-erwin-south-london-brain-tumour-support-group/">South London Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/milton-keynes-support-group/">Milton Keynes Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/shropshire-support-group/">Shropshire Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/isle-wight-brain-tumour-support-group/">Isle of Wight Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/leeds-support-group/">Leeds Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/sussex-brain-tumour-support-group/">Sussex Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/hillingdon-support-group/">Hillingdon Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/lincolnshire-support-group/">Lincolnshire Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/medway-support-group/">Medway Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/gloucestershire-brain-tumour-support-group-glouces/">Gloucestershire Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/gloucestershire-brain-tumour-support-group-chelten/">Cheltenham Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/wolverhampton-brain-tumour-support-group/">Wolverhampton Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/worcestershire-brain-tumour-support-group/">Worcestershire Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/herefordshire-brain-tumour-support-group/">Herefordshire Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/st-georges-hospital-low-grade-brain-tumour-support/">St George&#39;s Hospital Low Grade Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/somerset-brain-tumour-support-group/">Somerset Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/staffordshire-brain-tumour-support-group/">Staffordshire Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/bristol-brain-tumour-support-group/">Bristol Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/high-wycombe-support-group/">Brainwaves High Wycombe Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/walsall-brain-tumour-support-group/">Walsall Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/birmingham-support-group/">Birmingham Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/cornwall-brain-tumour-support-group-truro/">Cornwall Brain Tumour Support Group Truro</a></li>
                
                <li><a href="/get-support/support-your-local-area/cornwall-brain-tumour-support-group-liskeard/">Cornwall Brain Tumour Support Group Liskeard</a></li>
                
                <li><a href="/get-support/support-your-local-area/devon-brain-tumour-support-group/">Devon Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/leicester-brainwaves-support-group/">Leicester Brainwaves Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/nottingham-brainwaves-support-group/">Nottingham Brainwaves Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/norfolk-brain-tumour-support-group/">Norfolk Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/little-grey-cells-brain-tumour-support-group/">Little Grey Cells Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/manchester-living-and-beyond-cancer/">Manchester Living With and Beyond Cancer</a></li>
                
                <li><a href="/get-support/support-your-local-area/northwich-support-group/">Northwich Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/sheffield-support-group/">Sheffield Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/newcastle-support-group/">Newcastle Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/liverpool-support-group/">Liverpool Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/hampshire-brain-tumour-support-group/">Hampshire Brain Tumour Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/dorset-brain-tumour-support-group-dorchester/">Dorset Brain Tumour Support Group Dorchester</a></li>
                
                <li><a href="/get-support/support-your-local-area/dorset-brain-tumour-support-group-bournemouth/">Dorset Brain Tumour Support Group Bournemouth</a></li>
                
                <li><a href="/get-support/support-your-local-area/romford-support-group/">Romford Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/cambridge-support-group/">Cambridge Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/glasgow-support-group/">Glasgow Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/fife-support-group/">Fife Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/edinburgh-support-group/">Edinburgh Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/dundee-support-group/">Dundee Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/ayrshire-support-group/">Ayrshire Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/meningioma-uk-north-london-support-group/">Meningioma UK North London Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/london-support-group-maggies/">London Support Group with Maggie’s</a></li>
                
                <li><a href="/get-support/support-your-local-area/coventry-brainwaves-support-group/">Coventry Brainwaves Support Group</a></li>
                
                <li><a href="/get-support/support-your-local-area/south-west-wales-support-group/">South West Wales Support Group</a></li>
                
            </ul>
        </div>
    </div>
    

    
    <div id="supporters" class="content-block text-block sitemap-listing">
        <div class="wrapper">
            <h2>Supporters <a href="#top" class="btn large-btn-clip">Back to top</a></h2>

            <ul>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-think-pink-fund/">The Think Pink Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-phil-garner-fund/">The Phil Garner Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-jon-fredrickson-fund/">The Jon Fredrickson Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-peter-jordan-fund/">The Peter Jordan Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-stephen-geldard-fund/">The Stephen Geldard Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-bethany-walker-fund/">The Bethany Walker Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-shaun-lee-johnstone-fund/">The Shaun Lee Johnstone Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-simon-seivewright-fund/">The Simon Seivewright Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-john-lote-memorial-fund/">The John Lote Memorial Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-paul-cupis-fund/">The Paul Cupis Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-alex-thompson-fund/">The Alex Thompson Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-sue-robson-fund/">The Sue Robson Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-paul-crichton-charitable-fund/">The Paul Crichton Charitable Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-graeme-turner-fund/">The Graeme Turner Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-mandy-david-mcgowan-fund/">The Mandy &amp; David McGowan Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-addie-brady-foundation/">The Addie Brady Foundation</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-adam-butler-fund/">The Adam Butler Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-john-clover-memorial-fund/">The John Clover Memorial Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-remembering-sarah-fund/">The Remembering Sarah Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-jennifer-amy-fund/">The Jennifer Amy Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-john-louis-armstrong-fund/">The John &quot;Louis&quot; Armstrong Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-jean-wright-fund/">The Jean Wright Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-hayley-mills-fund/">The Hayley Mills Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-small-but-mighty-fund/">The Small but Mighty Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-khushil-pandya-fund/">The Khushil Pandya Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-liam-pridmore-fund/">The Liam Pridmore Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-repper-brothers-fund/">The Repper Brothers Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-paul-young-fund/">The Paul Young Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-dennis-ralph-fund/">The Dennis Ralph Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-anne-marie-oriordan-fund/">The Anne-Marie O&#39;Riordan Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/bobbys-fund/">Bobby&#39;s Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-jas-badhesha-memorial-fund/">The Jas Badhesha Memorial Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-nick-ryan-fund/">The Nick Ryan Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-neil-hamilton-fund/">The Neil Hamilton Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-heads-up-fund/">The Heads Up Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-catherine-lynn-smith-fund/">The Catherine Lynn Smith Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-hannah-louise-jones-fund/">The Hannah Louise Jones Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-clare-kemlo-fund/">The Clare Kemlo Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-alan-thomas-fund/">The Alan Thomas Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-emma-sim-fund/">The Emma Sim Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-alec-normand-fund/">The Alec Normand Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-judy-dcruz-fund/">The Judy D&#39;cruz Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-alex-bolt-fund/">The Alex Bolt Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-peter-moreton-fund/">The Peter Moreton Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-richard-mannering-fund/">The Richard Mannering Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-jane-fuller-fund/">The Jane Fuller Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-b-hive-fund/">The B-Hive Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-ian-widdup-fund/">The Ian Widdup Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-peter-blunt-fund/">The Peter Blunt Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-brain-tumour-super-trooper-fund/">The Brain Tumour Super Trooper Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-silas-pullen-fund/">The Silas Pullen Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-george-grant-superman-fund/">The George Grant Superman Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-danielle-mcgriskin-fund/">The Danielle McGriskin Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-david-philips-crooks-fund/">The David Philips Crooks Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-pamela-price-fund/">The Pamela Price Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/super-sams-fund/">Super Sam&#39;s Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-sophie-elin-harper-fund/">The Sophie Elin Harper Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-ian-roberts-fund/">The Ian Roberts Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-jamie-maciver-fund/">The Jamie Maciver Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-simon-huxtable-fund/">The Simon Huxtable Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-reecie-nelsons-superstars-fund/">The Reecie Nelson&#39;s Superstars Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-niamh-ella-power-fund/">The Niamh-Ella Power Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/alis-angels/">Ali&#39;s Angels</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-loveukeira-fund/">The LoveUKeira Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-kim-smith-fund/">The Kim Smith Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-nick-hart-fund/">The Nick Hart Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-leanne-marie-thorp-fund/">The Leanne Marie Thorp Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-mark-lingard-fund/">The Mark Lingard Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-tracy-vindel-fund/">The Tracy Vindel Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-william-doolin-fund/">The William Doolin Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-john-mills-fund/">The John Mills Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-dan-knight-fund/">The Dan Knight Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-isabel-rigby-fund/">The Isabel Rigby Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-colin-nugent-fund/">The Colin Nugent Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-stuart-steel-fund/">The Stuart Steel Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-mathews-magic-fund/">The Mathew&#39;s Magic Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/amelias-research-fund/">Amelia&#39;s Research Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-frank-riding-memorial-fund/">The Frank Riding Memorial Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-fifi-fund/">The Fifi Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-richard-baker-fund/">The Richard Baker Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-sandy-woollett-fund/">The Sandy Woollett Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-robert-odowd-fund/">The Robert O&#39;Dowd Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/alfies-journey-fund/">Alfie Bear&#39;s Journey Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-john-tainton-fund/">The John Tainton Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-tonk-clarkson-fund/">The Tonk Clarkson Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-59-hearts-fund/">The 59 Hearts Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-martin-vizzard-memorial-fund/">The Martin Vizzard Memorial Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/lucies-little-smiles/">Lucie&#39;s Little Smiles</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-imogen-whitby-fund/">The Imogen Whitby Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-ella-fosbury-hill-fund/">The Ella Fosbury-Hill Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-isobel-kelley-fund/">The Isobel Kelley Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-christopher-knowles-fund/">The Christopher Knowles Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-monika-newsum-smith-fund/">The Monika Newsum-Smith Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-susanna-twiddy-fund/">The Susanna Twiddy Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-bradley-chilton-fund/">The Bradley Chilton Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-alex-wooff-fund/">The Alex Wooff Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/angies-fund/">Angie&#39;s  Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-christopher-clarke-fund/">The Christopher Clarke Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-carrie-masheter-fund/">The Carrie Masheter Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-kate-stevens-fund/">The Kate Stevens Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-chris-murphy-fund/">The Chris Murphy Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-susannah-lees-fund/">The Susannah Lees Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-shaun-mcbride-fund/">The Shaun McBride Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-kevin-ackling-fund/">The Kevin Ackling Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-dave-parry-fund/">The Dave Parry Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-brain-tumour-warrior-fund/">The Brain Tumour Warrior Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-chloe-glynn-fund/">The Chloe Glynn Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-eleanor-french-fund/">The Eleanor French Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-andrea-fiandaca-fund/">The Andrea Fiandaca Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-freyas-fabulous-fund/">The Freya&#39;s Fabulous Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-harriet-downing-fund/">The Harriet Downing Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-molly-bubb-fund/">The Molly Bubb Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-harry-jones-memorial-fund/">The Harry Jones Memorial Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-gina-rose-going-strong-fund/">The Gina Rose Going Strong Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-kate-fenney-memorial-fund/">The Kate Fenney Memorial Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-alan-sansom-fund/">The Alan Sansom Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/cariss-cure-crusade/">Cariss&#39; Cure Crusade</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-travis-moore-fund/">The Travis Moore Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-melissa-crouch-fund/">The Melissa Crouch Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-amanda-beach-fund/">The Amanda Beach Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-beryl-skippen-fund/">The Beryl Skippen Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-andy-petersen-fund/">The Andy Petersen Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-connor-roscoe-fund/">The Connor Roscoe Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-amanda-shannon-fund/">The Amanda Shannon Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-ian-slee-fund/">The Ian Slee Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-john-lucas-fund/">The John Lucas Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-tasha-floyd-fund/">The Tasha Floyd Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-michael-barry-fund/">The Michael Barry Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-alice-murphy-fund/">The Alice Murphy Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-charlie-todd-fund/">The Charlie Todd Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-luke-frost-fund/">The Luke Frost Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-smile-of-arran-fund/">The Smile of Arran Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-becky-palmer-fund/">The Becky Palmer Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-john-onions-fund/">The John O&#39;Nions Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-andrew-sherwood-fund/">The Andrew Sherwood Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-niamh-silk-fund/">The Niamh Silk Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-ray-smith-fund/">The Ray Smith Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-dean-wood-fund/">The Dean Wood Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-andrew-pud-leigh-fund/">The Andrew &#39;Pud&#39; Leigh Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-holly-locke-memorial-fund/">The Holly Locke Memorial Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-andrew-stringer-fund/">The Andrew Stringer Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-nia-lane-fund/">The Nia Lane Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-brains-unite-fund/">The Brains Unite Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-alfie-jack-morland-fund/">The Alfie Jack Morland Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-ryan-piggott-fund/">The Ryan Piggott Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-jim-brewster-fund/">The Jim Brewster Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-robert-lilley-fund/">The Robert Lilley Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-chloe-pyne-fund/">The Chloe Pyne Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-cameron-buchanan-fund/">The Cameron Buchanan Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/emily-olivers-fighting-fund/">Emily Oliver&#39;s Fighting Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-claire-rowland-fund/">The Claire Rowland Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-richard-carr-fund/">The Richard Carr Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-damien-hughes-fund/">The Damien Hughes Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-jack-bray-fund/">The Jack Bray Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-alfie-say-fund/">The Alfie Say Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-andreas-papadopoulos-fund/">The Andreas Papadopoulos Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-caroline-cowan-fund/">The Caroline Cowan Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-chris-thomson-fund/">The Chris Thomson Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-cy-lapwood-fund/">The Cy Lapwood Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-sarah-kitchener-perrow-fund/">The Sarah Kitchener Perrow Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-david-whatley-fund/">The David Whatley Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-benjamin-reep-fund/">The Benjamin Reep Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-miranda-worgan-fund/">The Miranda Worgan Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-keith-collins-fund/">The Keith Collins Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-laura-fischer-beards-fund/">The Laura Fischer-Beards Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-barbara-wood-fund/">The Barbara Wood Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-ali-ling-fund/">The Ali Ling Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-djg-cancer-fund/">The DJG Cancer Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-steven-strange-fund/">The Steven Strange Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-christopher-morgan-jones-fund/">The Christopher Morgan Jones Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-beating-brain-tumours-fund/">The Beating Brain Tumours Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-richard-smart-fund/">The Richard Smart Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-heads-up-for-henry-fund/">The Heads Up for Henry Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/bens-brain-battle-fund/">Ben&#39;s Brain Battle Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-dawn-wardlow-fund/">The Dawn Wardlow Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-dr-gordon-lambert-fund/">The Dr Gordon Lambert Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-ann-jackson-fund/">The Ann Jackson Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-gordon-king-memorial-fund/">The Gordon King Memorial Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-christian-simpson-fund/">The Christian Simpson Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-frolics-fund/">The Frolics Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-kieron-clark-fund/">The Kieron Clark Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-rebekah-bagguley-fund/">The Rebekah Bagguley Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-great-minds-fund/">The Great Minds Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-linzi-geddes-fund/">The Linzi Geddes Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-geert-cloet-fund/">The Geert Cloet Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-steve-harris-shy-memorial-fund/">The Steve Harris (SHY) Memorial Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-kuly-ral-memorial-fund/">The Kuly Ral Memorial Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-antony-wills-fund/">The Antony Wills Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-andrea-barcroft-fund/">The Andrea Barcroft Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-edward-dyson-fund/">The Edward Dyson Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-alice-margot-lyra-mason-fund/">The Alice Margot Lyra Mason Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/lizzies-fund/">Lizzie&#39;s Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-pat-alvey-fund/">The Pat Alvey Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-raj-rana-fund/">The Raj Rana Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/saving-amys-brain/">Saving Amy&#39;s Brain</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-ruby-lois-barnard-brady-fund/">The Ruby Lois Barnard Brady Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-lee-howell-fund/">The Lee Howell Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-trevor-atkins-fund/">The Trevor Atkins Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-matthew-smith-fund/">The Matthew Smith Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-duncan-mclean-fund/">The Duncan McLean Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-simon-ellison-fund/">The Simon Ellison Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-anne-marie-ramalingum-fund/">The Anne-Marie Ramalingum Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-steve-ellis-fund/">The Steve Ellis Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-beautiful-minds-fund/">The Beautiful Minds Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-alistair-good-fund/">The Alistair Good Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-richard-hall-bats-fund/">The Richard Hall BATs Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-angela-robinson-memorial-fund/">The Angela Robinson Memorial Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-hollie-bell-fund/">The Hollie Bell Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/jessica-greens-fund/">Jessica Green&#39;s Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-peta-jane-gath-fund/">The Peta-Jane Gath Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-jackie-sutherland-memorial-fund/">The Jackie Sutherland Memorial Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-annabel-goode-fund/">The Annabel Goode Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-jonathan-bristow-fund/">The Jonathan Bristow Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-jake-lucas-david-kershaw-fund/">The Jake Lucas David Kershaw Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-christopher-ward-fund/">The Christopher Ward Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-alistair-hare-fund/">The Alistair Hare Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-henry-barnfield-fund/">The Henry Barnfield Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-sophies-smile-fund/">The Sophie&#39;s Smile Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-karyn-bent-fund/">The Karyn Bent Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-elizabeth-poole-fund/">The Elizabeth Poole Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-tony-elia-fund/">The Tony Elia Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-dr-louise-coast-smith-memorial-fund/">The Dr Louise Coast-Smith Memorial Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-ben-sambrook-fund/">The Ben Sambrook Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-donna-ryan-fund/">The Donna Ryan Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-june-powell-fund/">The June Powell Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-peter-wright-fund/">The Peter Wright Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/adis-mission-fund/">Adi&#39;s Mission Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-alex-cripps-fund/">The Alex Cripps Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-vicky-williams-fund/">The Vicky Williams Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-selina-keshav-fund/">The Selina Keshav Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-susan-shaw-fund/">The Susan Shaw Fund</a></li>
                
                <li><a href="/get-involved/our-supporter-groups/supporter-groups/groups/the-james-willetts-fund/">The James Willetts Fund</a></li>
                
            </ul>
        </div>
    </div>
    

        </main>
        
            
<form id="newsletter" method="POST">
    <div class="wrapper">
    
        <p class="signup">Sign up to receive email updates about our work and how to get involved with fundraising, events, volunteering and campaigning.</p>
    
        <div class="form">
            
                <input class="btn-clip" id="id_first_name" maxlength="40" name="first_name" placeholder="First Name *" required="required" type="text" />
            
                <input class="btn-clip" id="id_last_name" maxlength="40" name="last_name" placeholder="Surname *" required="required" type="text" />
            
                <input class="btn-clip wide" id="id_email" maxlength="254" name="email" placeholder="Email Address *" required="required" type="email" />
            
            <button type="submit" class="large-btn-clip">Submit</button>
        </div>
    </div>
    <div class="wrapper">
        <p class="gdpr">We promise to keep your data safe and you can unsubscribe at any time in the future. More information is in our <a href="/about-us/privacy-policy/">Privacy Policy</a>.</p>
    </div>
</form>

        

        <footer id="site-footer">
            <div class="wrapper">
            

                <div class="content">
                    <div class="left">
                        <a href="#" class="logo"><img src="https://assets.thebraintumourcharity.org/live/static/img/btc_logo_white_2x.e9c229a26080.png" alt="The Brain Tumour Charity official logo, in white" /></a>
                    </div>
                    <div class="right">
                        
<ul>

    <li><a href="/">Home</a></li>

    <li><a href="/understanding-brain-tumours/">Understanding Brain Tumours</a></li>

    <li><a href="/get-involved/">Get Involved</a></li>

    <li><a href="/get-involved/campaigning-for-change/what-were-campaigning/headsmart/">Our HeadSmart campaign</a></li>

    <li><a href="/about-us/join-the-team/">Join the team</a></li>

    <li><a href="/frequently-asked-questions/">FAQs</a></li>

</ul>
<ul>

    <li><a href="/our-research/">Our Research</a></li>

    <li><a href="/get-support/">Get Support</a></li>

    <li><a href="/about-us/">About Us</a></li>

    <li><a href="/about-us/privacy-policy/">Privacy policy</a></li>

    <li><a href="/about-us/complaints-policy/">Complaints Policy</a></li>

    <li><a href="/sitemap/">Sitemap</a></li>

</ul>

<div class="buttons">

    
    <a href="https://thebraintumourcharity.safeandsecurewebservices.net/donate" class="large-btn-clip">Make a donation</a>
    

    

    
    <a href="/about-us/contact/" class="large-btn-clip">Contact us</a>
    

</div>
                    </div>
                    <div class="lower">
                        <div class="left">
                            <ul id="social">
                                
                                    <li><a href="https://www.facebook.com/thebraintumourcharity" class="facebook"></a></li>
                                
                                    <li><a href="https://twitter.com/braintumourorg" class="twitter"></a></li>
                                
                                    <li><a href="https://www.youtube.com/user/braintumourcharity" class="youtube"></a></li>
                                
                                    <li><a href="https://www.pinterest.com/braintumourorg" class="pinterest"></a></li>
                                
                                    <li><a href="https://instagram.com/thebraintumourcharity" class="instagram"></a></li>
                                
                                    <li><a href="http://thebraintumourcharity.blogspot.co.uk/" class="blog"></a></li>
                                
                            </ul>
                        </div>
                        <div class="right">
                            
<div class="logos">
    
    <a href="https://www.amrc.org.uk" target="_blank">
    <img src="https://assets.thebraintumourcharity.org/live/media/filer_public/b5/cc/b5cc4f8c-634f-4091-9679-1ecff72243fd/amrc.png" alt="amrc logo" />
    </a>
    
    <a href="https://www.helplines.org/" target="_blank">
    <img src="https://assets.thebraintumourcharity.org/live/media/filer_public/98/c7/98c764a8-6327-493b-84f6-c29de2e8b7d5/helplines.png" alt="None" />
    </a>
    
    <a href="https://www.fundraisingregulator.org.uk" target="_blank">
    <img src="https://assets.thebraintumourcharity.org/live/media/filer_public/bb/10/bb105e9d-c290-420d-a556-c67355571644/fundraisingregulator_logo_103x32_lr.png" alt="None" />
    </a>
    
    
    <img src="https://assets.thebraintumourcharity.org/live/media/filer_public/8b/8b/8b8b2401-6d21-47d3-a5db-b96668760688/tsa_coty2018_web.png" alt="None" />
    
    
</div>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <p>&copy; The Brain Tumour Charity 2018 Registered Charity no. 1150054 (England and Wales) SC045081 (Scotland) Company no. 08266522</p>
                    <p>Designed, built and managed by <a href="https://wearefarm.com" target="_blank" title="FARM Digital">FARM</a></p>
                </div>
            
            </div>
        </footer>
        
            
        

        

        
            <script>
                var site_domain = "https://www.thebraintumourcharity.org";
                var current_page_url = "https://www.thebraintumourcharity.org/sitemap/";
            </script>
            <script src="https://assets.thebraintumourcharity.org/live/static/js/scripts.min.88b23caae99a.js"></script>
        

        

        
        

        <!-- Google Tag Manager -->
        <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-WBP4FG"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WBP4FG');</script>
        <!-- End Google Tag Manager -->
        <script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "The Brain Tumour Charity",
            "url": "https://www.thebraintumourcharity.org",
            "sameAs": [
                "https://www.facebook.com/thebraintumourcharity",
                "https://twitter.com/braintumourorg",
                "https://www.youtube.com/user/braintumourcharity",
                "https://www.pinterest.com/braintumourorg",
                "https://instagram.com/thebraintumourcharity",
                "http://thebraintumourcharity.blogspot.co.uk"
            ],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hartshead House, 61-65 Victoria Road",
                "addressLocality": "Farnborough",
                "addressRegion": "Hampshire",
                "postalCode": "GU14 7PA"
            },
            "telephone": "01252 749990",
            "logo": "https://www.thebraintumourcharity.orghttps://assets.thebraintumourcharity.org/live/static/img/btc_logo_hi_res.74728883afd1.png"
        }
        </script>
        
        <script type="text/javascript" src="https://tbtc.whoson.com/include.js?domain=www.thebraintumourcharity.org"></script>
        
            <script type="text/javascript">if (typeof sWOTrackPage == "function") { sWOTrackPage();} </script>
        

        

    </body>
</html>
`)
//#endregion

console.log(urls);