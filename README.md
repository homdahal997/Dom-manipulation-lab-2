# DOM Manipulation - Part Two

This project is a continuation of the [DOM Manipulation - Part One](https://github.com/homdahal997/Dom-manipulation-lab). In this part, we will be focusing on creating a submenu and adding menu interactions.

## Part 3: Creating the Submenu

We start by selecting and caching the `<nav id="sub-menu">` element in a variable named `subMenuEl`. We then set its height to 100%, set its background color, add a class `flex-around`, and set its position to absolute. We also set its CSS `top` property to 0 for now.

```javascript
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";
```

## Part 4: Adding Menu Interaction

We select and cache all of the `<a>` elements inside of `topMenuEl` in a variable named `topMenuLinks`. We then attach a delegated 'click' event listener to `topMenuEl`. If the clicked element is not an `<a>` element, we return. Otherwise, we remove the active class from all links and add it to the clicked link.

```javascript
const topMenuLinks = topMenuEl.querySelectorAll("a");
topMenuEl.addEventListener("click", function(evt){
    evt.preventDefault();
    if(!evt.target.matches("a")){
        return;
    }
    const linkClicked = evt.target;
    topMenuLinks.forEach((link) => link.classList.remove('active'));
    linkClicked.classList.toggle('active');
    // ...
});
```

## Part 5: Adding Submenu Interaction

If the clicked `<a>` element's "link" object within `menuLinks` has a `subLinks` property, we set the CSS top property of `subMenuEl` to 100%. Otherwise, we set it to 0. We also update the contents of `mainEl` within an `<h1>`.

```javascript
const linkClickedObj = menuLinks.find((obj => obj.text === linkClicked.textContent));
if(linkClickedObj && linkClickedObj.subLinks){
    subMenuEl.style.top = "100%";
    buildSubmenu(linkClickedObj.subLinks);
    subMenuEl.style.position = "relative";
} else {
    subMenuEl.style.top = "0";
}
if(linkClicked.textContent === "about"){
    mainEl.innerHTML = "<h1>About</h1>";
}else {
    mainEl.innerHTML = `<h1>${evt.target.textContent}</h1>`;
}
```

We also have a helper function `buildSubmenu` to build the submenu, and a delegated 'click' event listener attached to `subMenuEl`.

```javascript
function buildSubmenu(subLinks) {
    subMenuEl.innerHTML = "";
    subLinks.forEach(link => {
        const a = document.createElement("a");
        a.setAttribute("href", link.href);
        a.textContent = link.text;
        subMenuEl.appendChild(a);
    });
}

subMenuEl.addEventListener("click", function(evt) {
    evt.preventDefault();
    if(!evt.target.matches("a")) {
        return;
    }
    subMenuEl.style.top = "0";
    topMenuLinks.forEach((link) => link.classList.remove("active"));
    mainEl.innerHTML = `<h1>${evt.target.textContent}</h1>`;
});
```
## Usage
- You can make use of this by forking or cloning and using it in your real world project or 
just learning concepts on dom manipulation. 