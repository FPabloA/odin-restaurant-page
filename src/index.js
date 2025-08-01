import "./styles.css"
import loadHome from "./home";
import loadAbout from "./about";
import loadMenu from "./menu";

const contentDiv = document.querySelector("#content");
const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const aboutButton = document.querySelector("#about-btn");

//clear out content currently in the main display div
function clearContent () {
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}

loadHome()

homeButton.addEventListener("click", function () {
    clearContent();
    //change active button
    homeButton.className = "active-nav-btn";
    menuButton.className = "nav-btn";
    aboutButton.className = "nav-btn";
    loadHome();
})

menuButton.addEventListener("click", function () {
    clearContent();
    //change active button
    homeButton.className = "nav-btn";
    menuButton.className = "active-nav-btn";
    aboutButton.className = "nav-btn";
    loadMenu();
})

aboutButton.addEventListener("click", function () {
    clearContent();
    //change active button
    homeButton.className = "nav-btn";
    menuButton.className = "nav-btn";
    aboutButton.className = "active-nav-btn";
    loadAbout();
})
