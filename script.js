// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},1000);

});

// ==========================
// CURSOR GLOW
// ==========================

const glow = document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

// ==========================
// TYPING EFFECT
// ==========================

const roles=[

"AI Builder",

"Frontend Developer",

"B.Tech CSE Student",

"Open Source Learner",

"Future Software Engineer"

];

let roleIndex=0;

let charIndex=0;

let deleting=false;

const typing=document.getElementById("typingText");

function typeEffect(){

const current=roles[roleIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(typeEffect,1200);

return;

}

}else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

roleIndex=(roleIndex+1)%roles.length;

}

}

setTimeout(typeEffect,deleting?40:90);

}

typeEffect();
// ==========================
// THEME TOGGLE
// ==========================

const themeBtn=document.getElementById("themeToggle");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

themeBtn.textContent=

document.body.classList.contains("light")

?"🌞":"🌙";

});

// ==========================
// SCROLL TO TOP
// ==========================

const topBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ==========================
// NAVBAR SHADOW
// ==========================

const navbar=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.boxShadow="0 12px 30px rgba(0,0,0,.35)";

}else{

navbar.style.boxShadow="none";

}

});

// ==========================
// STATS COUNTER
// ==========================

const counters=document.querySelectorAll(".stat-card h2");

let started=false;

function startCounter(){

if(started) return;

started=true;

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

if(isNaN(target)) return;

let count=0;

const speed=Math.max(10,Math.floor(target/40));

const update=()=>{

count+=speed;

if(count>=target){

counter.innerText=target+"+";

}else{

counter.innerText=count+"+";

requestAnimationFrame(update);

}

};

update();

});

}

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(stats){

const top=stats.getBoundingClientRect().top;

if(top<window.innerHeight-100){

startCounter();

}

}

});
// ==========================
// PROJECT SEARCH
// ==========================

const searchInput=document.getElementById("searchProject");

const categoryFilter=document.getElementById("categoryFilter");

function filterProjects(){

const search=searchInput.value.toLowerCase();

const category=categoryFilter.value.toLowerCase();

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

const title=card.querySelector("h3").innerText.toLowerCase();

const type=card.dataset.category.toLowerCase();

const searchMatch=title.includes(search);

const categoryMatch=

category==="all" || type===category;

card.style.display=

(searchMatch && categoryMatch)

?"block":"none";

});

}

if(searchInput){

searchInput.addEventListener("input",filterProjects);

}

if(categoryFilter){

categoryFilter.addEventListener("change",filterProjects);

}

// ==========================
// SCROLL REVEAL
// ==========================

const reveals=document.querySelectorAll(

"section,.project-card,.skill-card,.achievement-card,.certificate-card,.journey-card"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:.15

});

reveals.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(50px)";

item.style.transition=".8s ease";

observer.observe(item);

});

// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ==========================
// SMOOTH BUTTON HOVER
// ==========================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});
// ==========================
// SAVE THEME
// ==========================

const savedTheme = localStorage.getItem("theme");

if(savedTheme==="light"){

document.body.classList.add("light");

if(themeBtn){

themeBtn.textContent="🌞";

}

}

if(themeBtn){

themeBtn.addEventListener("click",()=>{

localStorage.setItem(

"theme",

document.body.classList.contains("light")

?"light":"dark"

);

});

}

// ==========================
// SCROLL PROGRESS BAR
// ==========================

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-

window.innerHeight;

const width=

(window.scrollY/total)*100;

progress.style.width=width+"%";

});

// ==========================
// WELCOME TOAST
// ==========================

setTimeout(()=>{

const toast=document.createElement("div");

toast.className="toast";

toast.innerHTML=

"👋 Welcome to Siddhi.dev";

document.body.appendChild(toast);

setTimeout(()=>{

toast.remove();

},3500);

},1500);

// ==========================
// PWA INSTALL
// ==========================

let deferredPrompt;

window.addEventListener(

"beforeinstallprompt",

(e)=>{

e.preventDefault();

deferredPrompt=e;

const installBtn=document.createElement("button");

installBtn.innerHTML="📲 Install App";

installBtn.className="installBtn";

document.body.appendChild(installBtn);

installBtn.onclick=async()=>{

installBtn.style.display="none";

deferredPrompt.prompt();

await deferredPrompt.userChoice;

deferredPrompt=null;

};

});

// ==========================
// SERVICE WORKER
// ==========================

if("serviceWorker" in navigator){

window.addEventListener("load",()=>{

navigator.serviceWorker.register("service-worker.js");

});

}

console.log("🚀 Siddhi.dev Loaded Successfully");
