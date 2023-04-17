const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const headerLinks = document.querySelectorAll("header a");
headerLinks.forEach(i => {
  i.classList.add("italic");
});

const headerNav0 = document.querySelector('nav a:first-of-type');
headerNav0.textContent = "Servisler";

const headerNav1 = document.querySelector('nav a:nth-of-type(2)');
headerNav1.textContent = "Ürünler";

const headerNav2 =document.querySelector('nav a:nth-of-type(3)');
headerNav2.textContent= "Vizyon";

const headerNav3 = document.querySelector('nav a:nth-of-type(4)');
headerNav3.textContent ="Özellikler";

const headerNav4 = document.querySelector('nav a:nth-of-type(5)');
headerNav4.textContent = "Hakkımızda";

const headerNav5 = document.querySelector('nav a:last-of-type');
headerNav5.textContent = "İletişim";


const logoImg = document.getElementById("logo-img");
logoImg.src = "http://localhost:9000/img/logo.png";


const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = "Bu DOM Mükemmel";

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = "Başlayın";




const sectionElement = document.querySelectorAll('section.main-content h4');
sectionElement[0].textContent = "Özellikler"
sectionElement[1].textContent = "Hakkında"
sectionElement[2].textContent = "Servisler"
sectionElement[3].textContent = "Ürünler"
sectionElement[4].textContent = "Vizyon"

const ctaIMG = document.getElementById("cta-img");
ctaIMG.setAttribute("src", "http://localhost:9000/img/cta.png");

const P = document.querySelectorAll("section.main-content p");
P[0].textContent ="Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis." ;
P[1].textContent ="Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis";
P[2].textContent ="Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis." ;
P[3].textContent ="Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis." ;
P[4].textContent = "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis." ;


const contact = document.querySelector("section.contact h4");
contact.textContent = "İletişim"

const contactPs = document.querySelectorAll("section.contact p");
contactPs[0].textContent = "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye";
contactPs[1].textContent = "+90 (123) 456-7899";
contactPs[2].textContent = "satis@birsirketsitesi.com.tr"

const footerLink = document.querySelector('footer a');
footerLink.textContent = "Copyright Bir Şirket Sitesi 2022"
footerLink.setAttribute( "class", "bold")

const middleIMG = document.getElementById("middle-img");
middleIMG.setAttribute("src", "http://localhost:9000/img/accent.png");
