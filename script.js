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
subMenuEl.classList.add("flex-around");
// make position absolute
subMenuEl.style.position = "absolute";
// set css property to 0 for sub menu for now.
subMenuEl.style.top = "0";

// Part 4: Adding Menu Interaction
//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll("a");
// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", function(evt){
    // preventdefault method of event object called
    evt.preventDefault();
    // return if clicked element is not "a"
    if(!evt.target.matches("a")){
        return;
    }
    const linkClicked = evt.target;
    // Remove active class from all links
    topMenuLinks.forEach((link) => link.classList.remove('active'));
    // Add active class to clicked link
    linkClicked.classList.toggle('active');

    //Part 5: Adding Submenu Interaction

    /**
     * If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
    Otherwise, set the CSS top property of subMenuEl to 0.
    Hint: Caching the "link" object will come in handy for passing its subLinks array later.
     */
    // using an array method to search through menulinks that returns first element ( link object)
    const linkClickedObj = menuLinks.find((obj => obj.text === linkClicked.textContent));

    if(linkClickedObj && linkClickedObj.subLinks){
        subMenuEl.style.top = "100%";

        //subMenuEl.style.top = `${topMenuEl.offsetHeight}px`; // set top to the height of topMenuEl
        // build submenu
        buildSubmenu(linkClickedObj.subLinks);
        // change position to relative for sub menus
        subMenuEl.style.position = "relative";
    } else {
        // Set the CSS top property of subMenuEl to 0.
        subMenuEl.style.top = "0";
    }
    //// Update the contents of mainEl within an <h1>
    if(linkClicked.textContent === "about"){
        mainEl.innerHTML = "<h1>About</h1>";
    }else {
        mainEl.innerHTML = `<h1>${evt.target.textContent}</h1>`;
    }


});

// Helper function to build submenu
function buildSubmenu(subLinks) {
    // Clear the current contents of subMenuEl.
    subMenuEl.innerHTML = "";

    // Iterate over the subLinks array
    subLinks.forEach(link => {
        // Create an <a> element.
        const a = document.createElement("a");

        // Add an href attribute to the <a>, with the value set by the href property of the "link" object.
        a.setAttribute("href", link.href);

        // Set the element's content to the value of the text property of the "link" object.
        a.textContent = link.text;

        // Append the new element to the subMenuEl.
        subMenuEl.appendChild(a);
    });
}

// Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener("click", function(evt) {
    evt.preventDefault();

    if(!evt.target.matches("a")) {
        return;
    }

    //console.log(evt.target.textContent);

    subMenuEl.style.top = "0";
    topMenuLinks.forEach((link) => link.classList.remove("active"));
    mainEl.innerHTML = `<h1>${evt.target.textContent}</h1>`;
});
