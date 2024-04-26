// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

// Part 1: Getting Started
// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.background = "var(--main-bg)";
// Set the content of mainEl to <h1>DOM Manipulation</h1>. 
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
// Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");


// Part 2: Creating a Menu Bar
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector("nav");
// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.background = "var(--top-menu-bg)";
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

// Part 3: Adding Menu Buttons
// Iterate over the entire menuLinks array and for each "link" object:
for(i = 0; i < menuLinks.length; i++){
    // Create an <a> element.
    const a = document.createElement("a");
    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    a.setAttribute("href", menuLinks[i].href);
    // Set the new element's content to the value of the text property of the "link" object.
    a.textContent = menuLinks[i].text;
    // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(a);
}

