// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];

// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.background = "var(--main-bg)";
// Set the content of mainEl to <h1>DOM Manipulation</h1>. 
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
// Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");



// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector("nav");
// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.background = "var(--top-menu-bg)";
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');


// Iterate over the entire menuLinks array and for each "link" object:
for (i = 0; i < menuLinks.length; i++) {
    // Create an <a> element.
    const a = document.createElement("a");
    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    a.setAttribute("href", menuLinks[i].href);
    // Set the new element's content to the value of the text property of the "link" object.
    a.textContent = menuLinks[i].text;
    // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(a);
}

// Part 3: Creating the Submenu
//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById("sub-menu");
// set height to 100%
subMenuEl.style.height = "100%";
// set background color 
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
// add flex-around
subMenuEl.classList.add('flex-around');
// make position absolute
subMenuEl.style.position = "absolute";
// set css property to 0 for sub menu for now.
subMenuEl.style.top = "0"

// Part 4: Adding Menu Interaction
//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll("a");
// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", function(e){
    // preventdefault method of event object called
    e.preventDefault();
    // return if clicked element is not "a"
    if(!e.target.matches("a")){
        return;
    }
    // Remove active class from all links
    topMenuLinks.forEach((link) => link.classList.remove('active'));

    // Add active class to clicked link
    e.target.classList.add('active');


});
