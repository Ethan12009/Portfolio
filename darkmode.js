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
}
const darkOn = () => {
    light.style.display = "block";
    dark.style.display = "none";
    aboutBody.style.backgroundColor = "black";
    aboutContent.style.color = "white";
    navBar.style.backgroundColor = "white";
    text.forEach(box => {
        box.style.color = "black";
    })
    skills.style.backgroundColor = "black";
    skills.style.color = "white";
    skillHeader.style.borderBottom = "white solid 0.3rem";
    skillDiv.forEach(box => {
        box.style.borderRight = "white solid 0.3rem"
        box.style.borderLeft = "white solid 0.3rem"
    })
    
}

dark.onclick = darkOn;
light.onclick = lightOn;