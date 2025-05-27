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


//Message Form

const messageForm = document.getElementsByName("leave_message");
messageForm[0].addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();

    const forma = new FormData(event.target);

    const userName = forma.get("usersName");
    const myEmail = forma.get("usersEmail");
    const usersMessage = forma.get("usersMessage");

    console.log(userName);
    console.log(myEmail);
    console.log(usersMessage);

    const messageSection = document.getElementById("Messages");

    const messageList = messageSection.getElementsByTagName("ul");

    const newMessage = document.createElement("LI");
    newText = `<a href ="mailto:${myEmail}">${userName}</a>\n <span>${usersMessage} </span>;`
    newMessage.innerHTML = newText;
    console.log(newMessage);

    const removeButton = document.createElement("BUTTON");
    removeButton.innerText = "Remove";
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener("click", deleteButton);

    function deleteButton(event) {
        console.log("Remove");
        const entry = event.target.parentNode;
        entry.remove();
    }

    newMessage.appendChild(removeButton);

    messageList[0].appendChild(newMessage);    

    event.target.reset();

}

//fetch

fetch('https://api.github.com/users/joc3lynn/repos')
    .then((response) => {
            if (!response.ok) {
            throw new Error('Request failed');
            }
            return response.json();
    })
    .then((data) => {
        const repositories = [...data];
        console.log(repositories);

        const projectSection = document.getElementById("Projects");
        const projectList = projectSection.getElementsByTagName("ul");

        for(let i=0; i<repositories.length; i++) {
            const project = document.createElement("li");
            project.innerText = `${repositories[i].name}`;
            //console.log(project);
            projectList[0].appendChild(project);
            
        }

    })
    .catch((error) => {
            console.error('An error occurred:', error);
    });
    



