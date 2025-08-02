const contentDiv = document.querySelector("#content");
const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nesciunt excepturi tempore beatae, necessitatibus rem? Blanditiis quisquam dolorem sed consectetur, beatae natus provident fuga repudiandae, eaque, a quo facilis rem.";

function createMenuTitle (title) {
    const titleDiv = document.createElement("div");
    titleDiv.className = "menu-title";
    titleDiv.innerHTML = title;
    return titleDiv;
}

function createMenuSubtitle (subtitle) {
    const subtitleDiv = document.createElement("div")
    subtitleDiv.className = "menu-subtitle";
    subtitleDiv.innerHTML = subtitle;
    return subtitleDiv;
}

function createMenuItem (title, description, price) {
    const itemDiv = document.createElement("div");
    itemDiv.className = "menu-section";

    const imgDiv = document.createElement("div");
    imgDiv.className = "menu-img";
    itemDiv.appendChild(imgDiv);

    const menuTextDiv = document.createElement("div");
    menuTextDiv.className = "menu-item-text";
    

    const menuTitleDiv = document.createElement("div");
    menuTitleDiv.className = "menu-item-title";
    menuTitleDiv.innerHTML = title;
    menuTextDiv.appendChild(menuTitleDiv);

    const menuDescDiv = document.createElement("div");
    menuDescDiv.className = "menu-item-desc";
    menuDescDiv.innerHTML = description;
    menuTextDiv.appendChild(menuDescDiv);

    const menuPriceDiv = document.createElement("div");
    menuPriceDiv.className = "menu-item-price";
    menuPriceDiv.innerHTML = price;
    menuTextDiv.appendChild(menuPriceDiv);

    itemDiv.appendChild(menuTextDiv);

    return itemDiv;
}

function loadMenu () {
    const titleDiv = createMenuTitle("Menu");
    contentDiv.appendChild(titleDiv);

    const drinkSub = createMenuSubtitle("Drinks");
    contentDiv.appendChild(drinkSub);

    const latteDiv = createMenuItem("Latte", lorem, "$5");
    contentDiv.appendChild(latteDiv);

    const ChaiDiv = createMenuItem("Chai", lorem, "$5");
    contentDiv.appendChild(ChaiDiv);

    const sideSub = createMenuSubtitle("Sides");
    contentDiv.appendChild(sideSub);

    const hashbrownDiv = createMenuItem("Hashbrown", lorem, "$3")
    contentDiv.appendChild(hashbrownDiv);

    const fruitBowlDiv = createMenuItem("Fruit Bowl", lorem, "$2")
    contentDiv.appendChild(fruitBowlDiv);

    const entreeSub = createMenuSubtitle("Entrees");
    contentDiv.appendChild(entreeSub);

    const pancakeDiv = createMenuItem("Pancake Breakfast", lorem, "$12");
    contentDiv.appendChild(pancakeDiv);

    const sandwichDiv = createMenuItem("Breakfast Sandwich", lorem, "$9");
    contentDiv.appendChild(sandwichDiv);
}

export default loadMenu;