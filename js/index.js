//Footer

const myFooter = document.createElement("FOOTER");
myFooter.setAttribute("id", "foot");
document.body.appendChild(myFooter);
console.log(myFooter);

//Copyright Text - Footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
const copySymbol = '\u00A9';

const copyrightText = copySymbol + "Jocelyn Ramirez-Parada " + thisYear;
copyright.innerHTML=copyrightText;
footer.appendChild(copyright);
console.log(copyright);

//Skills
const skills = ["JavaScript", "HTML", "CSS", "GitHub"];
const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.getElementsByTagName("ul")[0];

for (let i = 0; i < skills.length; i++)
{
    const skill = document.createElement("LI");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
    console.log(skillsList);
}


