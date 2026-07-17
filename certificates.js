const certificates = [

{
title: "International Talent Hunt – Vedic Maths Level 3",
issuer: "Aristo Kids",
year: "2022",
achievement: "🥈 World Rank 2"
},

{
title: "AI ML Mastery",
issuer: "Unstop",
year: "2026",
achievement: "🤖 AI/ML Certification"
},

{
title: "Generative AI Mastermind",
issuer: "Outskill",
year: "2026",
achievement: "🚀 GenAI Certified"
},

{
title: "CampusCrew 100K Milestone Honor",
issuer: "CampusCrew",
year: "2026",
achievement: "🏆 Community Recognition"
},

{
title: "Alta AI Genesis",
issuer: "Alta School of Technology",
year: "2026",
achievement: "💡 AI Genesis Participant"
},

{
title: "20 Days 20 AI Projects Challenge",
issuer: "Self Project Challenge",
year: "2026",
achievement: "🚀 Completed 24 Projects"
}

];

const certContainer = document.getElementById("certificateContainer");

if(certContainer){

certificates.forEach(cert=>{

certContainer.innerHTML += `

<div class="certificate-card">

<h3>${cert.title}</h3>

<p><strong>Issuer:</strong> ${cert.issuer}</p>

<p><strong>Year:</strong> ${cert.year}</p>

<div class="achievement-badge">

${cert.achievement}

</div>

</div>

`;

});

}
