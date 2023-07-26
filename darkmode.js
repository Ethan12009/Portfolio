let light = document.getElementById("light");
let dark = document.getElementById("dark");
let aboutBody = document.getElementById("about-background");
let aboutContent = document.getElementById("about");
let skills = document.getElementById("skills");
let skillHeader = document.getElementById("skillHeader");
let skillDiv = document.querySelectorAll("#skills-child div")
let navBar = document.getElementById("nav-bar");
let text = document.querySelectorAll(".Text")
let HTML = document.getElementById("HTML")
let projects = document.getElementById("projects")
let projectHeader = document.querySelector("#projects > h2")
let contact = document.getElementById("contact")
let expand = document.getElementById("projectExpand1")
let projectHandler = document.getElementById("projectholder1")

const lightOn = () => {
    light.style.display = "none";
    dark.style.display = "block";
    aboutBody.style.backgroundColor = "white";
    aboutContent.style.color = "black";
    navBar.style.backgroundColor = "black";
    text.forEach(box => {
        box.style.color = "white";
    })
    skills.style.backgroundColor = "white";
    skills.style.color = "black";
    skillHeader.style.borderBottom = "black solid 0.3rem";
    skillDiv.forEach(box => {
        box.style.borderRight = "black solid 0.3rem"
        box.style.borderLeft = "black solid 0.3rem"
    })
    projects.parentElement.style.backgroundColor = "white";
    projects.style.color = "black";
    projectHeader.style.borderBottom = "black solid 0.3rem";
    contact.style.backgroundColor = "white";
    contact.style.color = "black";
}
const darkOn = () => {
    light.style.display = "block";
    dark.style.display = "none";
    aboutBody.style.backgroundColor = "black";
    aboutContent.style.color = "white";
    navBar.style.backgroundColor = "black";
    text.forEach(box => {
        box.style.color = "white";
    })
    skills.style.backgroundColor = "black";
    skills.style.color = "white";
    skillHeader.style.borderBottom = "white solid 0.3rem";
    skillDiv.forEach(box => {
        box.style.borderRight = "white solid 0.3rem"
        box.style.borderLeft = "white solid 0.3rem"
    })
    projects.parentElement.style.backgroundColor = "black";
    projects.style.color = "white";
    projectHeader.style.borderBottom = "white solid 0.3rem";
    contact.style.backgroundColor = "black";
    contact.style.color = "white";
}
const clickExpand = () => {
    if (expand.style.display === "none") {
        expand.style.display = "block"
    }
    else  {
        expand.style.display = "none"
    }
    
}



projectHandler.onclick = clickExpand;
dark.onclick = darkOn;
light.onclick = lightOn;