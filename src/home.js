const contentDiv = document.querySelector("#content");
const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nesciunt excepturi tempore beatae, necessitatibus rem? Blanditiis quisquam dolorem sed consectetur, beatae natus provident fuga repudiandae, eaque, a quo facilis rem.";
const hoursOfOp = ["Sunday: 8am - 8pm", "Monday: 6am - 6pm", "Tuesday: 6am - 6pm", "Wednesday: 6am - 6pm", "Thursday: 6am - 10pm", "Friday: 6am - 10pm", "Saturday: 8am - 10pm"];


//clear out content currently in the main display div
function clearContent () {
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}

function createHomeTitle (restaurantName) {
    const titleDiv = document.createElement("div");
    titleDiv.innerHTML = restaurantName;
    titleDiv.className = "home-title";
    return titleDiv;
}

function createHomeSection (title, content, subtitle) {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "home-section";

    const sectionTitleDiv = document.createElement("div");
    sectionTitleDiv.className = "home-section-title";
    sectionTitleDiv.innerHTML = title;
    sectionDiv.appendChild(sectionTitleDiv);

    const sectionContentDiv = document.createElement("div");
    sectionContentDiv.className = "home-section-content";
    sectionContentDiv.innerHTML = content;
    sectionDiv.appendChild(sectionContentDiv);

    const sectionSubtitleDiv = document.createElement("div");
    sectionSubtitleDiv.className = "home-section-subtitle";
    sectionSubtitleDiv.innerHTML = subtitle;
    sectionDiv.appendChild(sectionSubtitleDiv);

    return sectionDiv;
}

function createHomeHours (title, hours) {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "home-section";

    const sectionTitleDiv = document.createElement("div");
    sectionTitleDiv.className = "home-section-title";
    sectionTitleDiv.innerHTML = title;
    sectionDiv.appendChild(sectionTitleDiv);

    const sectionContentDiv = document.createElement("div");
    sectionContentDiv.className = "home-section-content";
    sectionContentDiv.id = "home-hours"
    sectionDiv.appendChild(sectionContentDiv);

    for (let i = 0; i < hours.length; i++) {
        const hourDiv = document.createElement("div");
        hourDiv.innerHTML = hours[i];
        sectionContentDiv.appendChild(hourDiv);
    }

    return sectionDiv;
}

function loadHome () {
    clearContent()

    //generate title for home page
    const titleDiv = createHomeTitle("Imaginal Cafe");
    contentDiv.appendChild(titleDiv);

    const testimonyDiv = createHomeSection("", lorem, "Vampire In the Corner");
    contentDiv.appendChild(testimonyDiv);

    const hoursDiv = createHomeHours("Hours", hoursOfOp);
    contentDiv.appendChild(hoursDiv);

    const locationDiv = createHomeSection ("Location", "", "123 Angel St, Monsterin, You")
    contentDiv.appendChild(locationDiv);
}

export default loadHome;