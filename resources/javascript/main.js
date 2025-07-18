/* getting view here button elements from DOM */
let colorCardPicker = document.getElementById("colorCardPicker");
let resturantLandingPage = document.getElementById("resturantLandingPage");
let htmlCssResume = document.getElementById("htmlCssResume");

/* here were are creating new div element to store iframe */
let newDiv  = document.createElement("div");
newDiv.setAttribute("class", "newDiv");
/* creating iframe element inside newDiv */
let iframe = document.createElement("iframe");
/* adding iframe to the newDiv */
newDiv.append(iframe);
/* create a close button inside iframe */
let closeButton = document.createElement("p");
newDiv.append(closeButton);
closeButton.innerHTML = "close";
closeButton.setAttribute("id", "close");
/* eventHandler function for closing the iframe */
const removeIframe = (event) => {
    event.target.parentElement.remove();
}



const addIframe = (event) => {
    let id = event.target.id;
    if(id === "colorCardPicker"){
        iframe.setAttribute("src", "https://brilliant-madeleine-28fb8e.netlify.app/");
        /* getting div element from span --> p --> div(viewButtons), and appending newDiv */
        event.target.parentElement.parentElement.append(newDiv);
    } else if (id === "resturantLandingPage") {
        iframe.setAttribute("src", "https://bharatkh92.github.io/simplotel-asgmt/");
        event.target.parentElement.parentElement.append(newDiv);
    } else if (id === "htmlCssResume") {
        iframe.setAttribute("src", "https://bharatkh92.github.io/htmlCssResume/");
        event.target.parentElement.parentElement.append(newDiv);
    }
    /* adding eventHandler to close button inside iframe */
    let addingCloseEventLisnter = document.getElementById("close");
    addingCloseEventLisnter.addEventListener("click", removeIframe); 
}

/* adding click eventHandler to view here buttons */
colorCardPicker.addEventListener("click", addIframe);
resturantLandingPage.addEventListener("click", addIframe);
htmlCssResume.addEventListener("click", addIframe);

/* dark mode functionality */
let checkbox = document.getElementById("toggle");
let root = document.querySelector(":root");

/* function applying dark mode */
const applyDarkMode = () => {
    if(checkbox.checked) {
        document.body.classList.toggle('darkModeCss');
        root.style.setProperty("--border", "#fff");
    } else {
        document.body.classList.toggle('darkModeCss');
        root.style.setProperty("--border", "#000");
    }
}

checkbox.addEventListener("click", applyDarkMode);