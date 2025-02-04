const translations = {
  en: {
      navAbout: "About Me",
      navProjects: "Projects",
      navSkills: "Skills",
      navContact: "Contact",
      aboutTitle: "About Me",
      aboutDescription: `I'm a 19 year old software developer and tester from Hungary. In my free time, I like teaching and coding. I graduated at <a href ="https://petofivecses.hu">Petőfi Sándor Roman Chatolic Primary and High School</a>, and since September 2024 I continue my studies as a software developer and tester in <a href="https://scholaeu.hu/">Schola Europa Academy</a>. I've been programming for 5 years, and I've always been interested in it. During this time, I've gained a lot of experience in various programming languages and projects.`,
      usernameTitle: "My Username",
      usernameDescription: 'How did I come up with the name Doomhyena? Well, one of the games needed a recognizable name. So, I decided to take inspiration from "Doom", and added "Hyena", because it sounds cool.',
      projectsTitle: "Projects",
      rangerbotTitle: "RangerBot",
      rangerbotDescription: "RangerBot is a completely Hungarian Discord Bot developed according to the needs of users. We have prepared it according to your needs and we continue to develop it continuously.",
      skillsTitle: "Skills",
      contactTitle: "Contact",
      FooterP: "&copy; 2024 Doomhyena. All rights reserved.",
      themeButton: "Theme",
  },
  hu: {
      navAbout: "Rólam",
      navProjects: "Projektek",
      navSkills: "Készségek",
      navContact: "Kapcsolat",
      aboutTitle: "Rólam",
      aboutDescription: `19 éves magyar szoftverfejlesztő- és tesztelő tanonc vagyok Magyarországról. Szabadidőmben szeretek tanítani és kódolni. Ebben a tanévben érettségiztem a <a href ="https://petofivecses.hu">Petőfi Sándor Római Katolikus Általános Iskolában és Gimnáziumban</a> és 2024 szeptembere óta szoftverfejlesztőként és tesztelőként folytatom tanulmányaimat <a href="https://scholaeu.hu/">Schola Europa Akadémián</a>. Öt éve programozok, és mindig is érdekelt a programozás. Ez idő alatt sok tapasztalatot szereztem különböző programozási nyelvekben és projektekben.`,
      usernameTitle: "Felhasználónevem",
      usernameDescription: 'Hogyan jött a Doomhyena név? Az egyik játékhoz kellett egy felismerhető név. Hát kellett egy felismerhető név. Így úgy döntöttem, hogy inspirációt veszek a "Doom"-tól és hozzáadtam a "Hyena" szót, mert menőn hangzott.',
      projectsTitle: "Projektek",
      rangerbotTitle: "RangerBot",
      rangerbotDescription: "A RangerBot egy teljesen magyar Discord Bot, a felhasználók igényeinek megfelelően fejlesztjük  Az te igényeid szerint készítettük el, és fejlesztjük folyamatosan.",
      skillsTitle: "Ismeretek",
      contactTitle: "Kapcsolat",
      FooterP: "&copy; 2024 Doomhyena. Minden jog fenttartva.",
      themeButton: "Téma",
  }
};

let currentLanguage = 'en';

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'hu' : 'en';
  localStorage.setItem('language', currentLanguage);
  updateLanguage();
}

function updateLanguage() {
  document.getElementById('about-link').textContent = translations[currentLanguage].navAbout;
  document.getElementById('projects-link').textContent = translations[currentLanguage].navProjects;
  document.getElementById('skills-link').textContent = translations[currentLanguage].navSkills;
  document.getElementById('contact-link').textContent = translations[currentLanguage].navContact;  
  document.getElementById('about-title').textContent = translations[currentLanguage].aboutTitle;
  document.getElementById('about-description').innerHTML = translations[currentLanguage].aboutDescription;
  document.getElementById('username-title').textContent = translations[currentLanguage].usernameTitle;
  document.getElementById('username-description').textContent = translations[currentLanguage].usernameDescription;
  document.getElementById('projects-title').textContent = translations[currentLanguage].projectsTitle;
  document.getElementById('rangerbot-title').textContent = translations[currentLanguage].rangerbotTitle;
  document.getElementById('rangerbot-description').innerHTML = translations[currentLanguage].rangerbotDescription;
  document.getElementById('skills-title').textContent = translations[currentLanguage].skillsTitle;
  document.getElementById('contact-title').textContent = translations[currentLanguage].contactTitle;
  document.querySelector('.theme-btn').textContent = translations[currentLanguage].themeButton;
  document.getElementById('FooterP').innerHTML = translations[currentLanguage].FooterP;
}

document.addEventListener('DOMContentLoaded', function () {
  const savedLanguage = localStorage.getItem('language') || 'en';
  if (savedLanguage) {
      currentLanguage = savedLanguage;
      updateLanguage();
  }
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);

    window.scrollTo({
      top: targetSection.offsetTop - 50,
      behavior: 'smooth'
    });
  });
});

const backToTopButton = document.getElementById('backToTop');

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}backToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.body.classList.toggle('light-theme', newTheme === 'light');
  localStorage.setItem('theme', newTheme);
}

document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
  }
});