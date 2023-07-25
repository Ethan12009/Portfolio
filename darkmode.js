let light = document.getElementById("light");
let dark = document.getElementById("dark");
let aboutBody = document.getElementById("about-background");
let aboutContent = document.getElementById("about");
let skills = document.getElementById("skills")
let skillHeader = document.getElementById("skillHeader")

const lightOn = () => {
    light.style.display = "none";
    dark.style.display = "block";
    aboutBody.style.backgroundColor = "white";
    aboutContent.style.color = "black";
}
const darkOn = () => {
    light.style.display = "block";
    dark.style.display = "none";
    aboutBody.style.backgroundColor = "black";
    aboutContent.style.color= "white";
}

dark.onclick = darkOn;
light.onclick = lightOn;