
// Theme Toggle

const themeButton = document.getElementById("theme-toggle");

let darkMode = true;


themeButton.addEventListener("click", () => {

    darkMode = !darkMode;


    if(darkMode){

        document.body.style.background = "#050816";
        document.body.style.color = "white";

        themeButton.innerHTML = "🌙";

    }

    else{

        document.body.style.background = "#f8fafc";
        document.body.style.color = "#111827";

        themeButton.innerHTML = "☀️";

    }

});





// Typing Effect


const roles = [

"AI Developer",

"Web Developer",

"Problem Solver",

"Future Tech Entrepreneur"

];


let roleIndex = 0;
let charIndex = 0;


const heroTitle = document.querySelector(".hero h2");



function typeEffect(){


    if(charIndex < roles[roleIndex].length){

        heroTitle.innerHTML += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{


        setTimeout(()=>{

            heroTitle.innerHTML="";

            charIndex=0;

            roleIndex++;


            if(roleIndex >= roles.length){

                roleIndex=0;

            }


            typeEffect();


        },1500);


    }


}



heroTitle.innerHTML="";

typeEffect();






// Project Data


const projects = [

{

title:"AI Resume Analyzer",

description:"AI powered resume analysis tool that helps improve resumes."

},


{

title:"StudyBloom Flashcards",

description:"AI based flashcard generator for smart learning."

},


{

title:"CodeBunny",

description:"AI code review assistant for developers."

},


{

title:"LeetPattern",

description:"DSA pattern based interactive interview preparation platform."

},


{

title:"Sahyadri Chronicles",

description:"Digital tourism platform showcasing Maharashtra heritage."

},


{

title:"Nexora AI",

description:"Next generation AI super app ecosystem concept."

}


];





const projectContainer = document.getElementById("project-container");



projects.forEach(project=>{


const card=document.createElement("div");


card.classList.add("project-card");



card.innerHTML = `

<h3>${project.title}</h3>

<p>${project.description}</p>

<button>View Project</button>

`;



projectContainer.appendChild(card);



});







// Scroll Animation


const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


sections.forEach(section=>{


const position = section.getBoundingClientRect().top;


if(position < window.innerHeight - 100){


section.style.opacity="1";

section.style.transform="translateY(0)";


}


});


});





sections.forEach(section=>{


section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition="1s";


});






// Footer Year


document.querySelector("footer p").innerHTML =

`© ${new Date().getFullYear()} Siddhi.dev | Built with passion ❤️`;
