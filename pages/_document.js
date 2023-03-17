import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Nanda Kumar B M</title>
        <meta itemprop="name" content="NandaKumar | Software Dev" />
        <meta
          itemprop="description"
          content="Software Developer - MERN stack. I convert web designs into web application. I help businesses to go online with Shopify. Shopify storefront development. Shopify integration to existing web application. Application deployment and management. Continuous integration of new features. Contact for complete web solution for businesses. 
    Believes in HARD WORK over LUCK."
        />
        <meta name="viewport" content="width=device-width" />
        <meta itemprop="image" content="/logoblk.png" />
        <meta name="twitter:title" content="Nanda Kumar | Software Dev" />
        <meta
          name="twitter:description"
          content="Software Developer - MERN stack. I convert web designs into web application. I help businesses to go online with Shopify. Shopify storefront development. Shopify integration to existing web application. Application deployment and management. Continuous integration of new features. Contact for complete web solution for businesses. 
    Believes in HARD WORK over LUCK."
        />
        <meta name="twitter:image:src" content="/logoblk.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:title" content="Nanda Kumar | Software Dev" />
        <meta name="og:type" />
        <meta name="og:url" content="https://nandakumar.vercel.app" />
        <meta name="og:image" content="/logoblk.png" />
        <meta
          name="og:description"
          content="Software Developer - MERN stack. I convert web designs into web application. I help businesses to go online with Shopify. Shopify storefront development. Shopify integration to existing web application. Application deployment and management. Continuous integration of new features. Contact for complete web solution for businesses. 
    Believes in HARD WORK over LUCK."
        />
        <meta name="og:site_name" content="Nanda Kumar | Software Dev" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#000000" />
        <meta name="next-head-count" content="19" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      ></script>
      <style>
        {` 
        
        .scroll__container {
height: 100vh;
overflow-y: scroll;
scroll-snap-type: y mandatory;
}
section {
height: 100vh;
scroll-snap-align: center;
}`}
      </style>
      <script>
        {`var sections = document.querySelectorAll('section');
var container = document.querySelector('.scroll__container');
container.addEventListener('scroll', function () {
sections.forEach((e, i) => {
var top = (e.getBoundingClientRect().top);
if (top == 0) {
e.classList.add('is-inview')
} else {
e.classList.remove('is-inview')
}
});
})
container.dispatchEvent(newCustomEvent('scroll'));
        var sections = document.querySelectorAll('section');
var options = {
rootMargin: '0px',
threshold: 0.25
}
var callback = (entries) => {
entries.forEach((entry) => {
var target = entry.target;
if (entry.intersectionRatio >= 0.25) {
target.classList.add("is-inview");
} else {
target.classList.remove("is-inview");
}
})
}
var observer = new IntersectionObserver(callback, options)
sections.forEach((section, index) => {
observer.observe(section)
})`}
      </script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
