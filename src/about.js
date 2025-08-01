const contentDiv = document.querySelector("#content");

function createAboutTitle (title) {
    const titleDiv = document.createElement("div");
    titleDiv.className = "about-title";
    titleDiv.innerHTML = title;
    return titleDiv;
}

function createContactCard (person, position, number, email) {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "about-section"

    const personDiv = document.createElement("div");
    personDiv.innerHTML = person;
    personDiv.className = "about-section-title";
    sectionDiv.appendChild(personDiv);

    const posDiv = document.createElement("div");
    posDiv.innerHTML = position;
    sectionDiv.appendChild(posDiv);

    const numberDiv = document.createElement("div");
    numberDiv.innerHTML = number;
    sectionDiv.appendChild(numberDiv);

    const emailDiv = document.createElement("div");
    emailDiv.innerHTML = email;
    sectionDiv.appendChild(emailDiv);

    return sectionDiv;
}

function loadAbout () {
    const titleDiv = createAboutTitle("Contact Us");
    contentDiv.appendChild(titleDiv);

    const contactChef = createContactCard("Temp", "Chef", "444-444-4444", "fakeornot@idk.com");
    contentDiv.appendChild(contactChef);

    const contactManager = createContactCard("Temp", "Manager", "444-444-4445", "fakeornot@idk.com");
    contentDiv.appendChild(contactManager);

    const contactWaiter = createContactCard("Temp", "Waiter", "444-444-4446", "fakeornot@idk.com");
    contentDiv.appendChild(contactWaiter);
}

export default loadAbout;