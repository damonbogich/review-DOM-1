//2. <header> <nav> - add href tags
 
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//1.<head> - change <title> to Great Idea!
const title = document.querySelector('title');
title.textContent = "Great Idea!";

let navItems = document.querySelectorAll('nav a');
navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];
navItems.forEach(element =>{
  element.style.color = 'green';
})
console.log(navItems, 'dff')
//3. <header> <img> - add img src
let headerImg = document.querySelector('.logo');
let headerImgSrc = siteContent['nav']['img-src'];
headerImg.setAttribute('src', headerImgSrc);
console.log(headerImg)
//4. 
let ctaHeader = document.querySelector('.cta-text h1')
ctaHeader.textContent = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = siteContent['cta']['button']

let ctaImg = document.querySelector('.cta img')
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

//main-content
let topContentHeaders = document.querySelectorAll('.top-content h4');
topContentHeaders[0].textContent = siteContent['main-content']['features-h4']
topContentHeaders[1].textContent = siteContent['main-content']['about-h4']
let topContentParagraphs = document.querySelectorAll('.top-content p');
topContentParagraphs[0].textContent = siteContent['main-content']['features-content']
topContentParagraphs[1].textContent = siteContent['main-content']['about-content']

let midPagePicture = document.querySelector('#middle-img');
midPagePicture.setAttribute('src', siteContent['main-content']['middle-img-src'])

let bottomContentHeaders = document.querySelectorAll('.bottom-content h4');
bottomContentHeaders[0].textContent = siteContent['main-content']['services-h4']
bottomContentHeaders[1].textContent = siteContent['main-content']['product-h4']
bottomContentHeaders[2].textContent = siteContent['main-content']['vision-h4']

let bottomContentParagraphs = document.querySelectorAll('.bottom-content p');
bottomContentParagraphs[0].textContent = siteContent['main-content']['services-content']
bottomContentParagraphs[1].textContent = siteContent['main-content']['product-content']
bottomContentParagraphs[2].textContent = siteContent['main-content']['vision-content']

let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4']

let contactParagraphs = document.querySelectorAll('.contact p');
contactParagraphs[0].textContent = siteContent['contact']['address']
contactParagraphs[1].textContent = siteContent['contact']['phone']
contactParagraphs[2].textContent = siteContent['contact']['email']

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright']


