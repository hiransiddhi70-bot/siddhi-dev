const projects = [

{
name:"InterviewPilot AI",
category:"AI",
description:"AI-powered interview preparation platform with HR, technical, aptitude, resume builder and placement roadmap.",
tech:["HTML","CSS","JavaScript","PWA"],
github:"#",
live:"#"
},

{
name:"CareerPilot AI",
category:"AI",
description:"AI career guidance platform helping students choose careers, skills and learning paths.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"Startup Validator AI",
category:"AI",
description:"Validate startup ideas with AI-inspired scoring, market analysis and suggestions.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"Sahyadri Chronicles",
category:"Web",
description:"Premium tourism website showcasing the heritage, forts, culture and tourism of Maharashtra.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"Medilens AI",
category:"AI",
description:"Medical image analysis concept website with premium UI and AI-inspired features.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"LeetPattern",
category:"Education",
description:"Interactive coding patterns and DSA learning platform for interview preparation.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
}

];
{
name:"Aura Prefix Battle",
category:"Utility",
description:"A fun and interactive battle game that compares aura prefixes with engaging gameplay and a modern UI.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"Aura Expense Tracker",
category:"Productivity",
description:"A smart expense tracker to manage income, expenses, budgets, and financial insights.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"Study Planner AI",
category:"Education",
description:"An AI-inspired study planner that helps students organize schedules, tasks, and study goals.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"Bharat Carbon Mitra Pro",
category:"Web",
description:"An environmental awareness platform for tracking carbon footprint and promoting sustainable living.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"AI Resume Analyzer",
category:"AI",
description:"An intelligent resume analyzer that evaluates resumes and provides personalized improvement suggestions.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"Study Bloom AI",
category:"Education",
description:"A premium AI-powered learning platform with flashcards, quizzes, notes, and productivity tools.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},
{
name:"BloomMail AI",
category:"AI",
description:"An AI-powered email generator that creates professional emails for business, internships, and networking.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"CodeBunny Pro",
category:"AI",
description:"A smart AI-inspired code reviewer and debugging assistant with syntax analysis and improvement suggestions.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"Font Styler",
category:"Utility",
description:"A creative font preview and styling tool with live customization, copy, and export features.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"Bunk Buddy",
category:"Education",
description:"A student attendance calculator that helps track attendance percentage and safe bunk limits.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"Python Master Course",
category:"Education",
description:"An interactive Python learning platform featuring tutorials, coding challenges, quizzes, and projects.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"Pookie Invites",
category:"Web",
description:"A stylish digital invitation website for birthdays, weddings, naming ceremonies, and special events.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},
{
name:"Fair Share",
category:"Utility",
description:"A smart expense splitting application for friends, roommates, and trips with real-time balance tracking.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"AI Outfit Stylist",
category:"AI",
description:"An AI-inspired fashion assistant that recommends outfits based on style, occasion, and preferences.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"Instant Site Builder",
category:"Web",
description:"A no-code website generator that creates responsive landing pages with modern templates.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"Quick QR Generator",
category:"Utility",
description:"A fast QR code generator for websites, text, Wi-Fi, contact details, and more.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"PromptCraft AI",
category:"AI",
description:"A prompt engineering toolkit for creating, organizing, and testing high-quality AI prompts.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
},

{
name:"Resume Builder",
category:"Productivity",
description:"A modern resume builder with professional templates, live preview, and PDF export support.",
tech:["HTML","CSS","JavaScript"],
github:"#",
live:"#"
}

];
const container=document.getElementById("projectsContainer");

if(container){

projects.forEach(project=>{

container.innerHTML+=`

<div class="project-card" data-category="${project.category}">

<h3>${project.name}</h3>

<p>${project.description}</p>

<div class="project-tags">

${project.tech.map(t=>`<span>${t}</span>`).join("")}

</div>

<div class="project-buttons">

<a href="${project.live}" target="_blank" class="primary-btn">

Live Demo

</a>

<a href="${project.github}" target="_blank" class="secondary-btn">

GitHub

</a>

</div>

</div>

`;

});

}
