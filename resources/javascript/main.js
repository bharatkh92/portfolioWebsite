let colorCardPicker = document.getElementById("colorCardPicker");
let resturantLandingPage = document.getElementById("resturantLandingPage");
let htmlCssResume = document.getElementById("htmlCssResume");

const closeIframe = (event) => {
    let parentElement = event.target.parentElement;
    parentElement.remove();
}
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
/* adding eventHandler for close button */
const removeIframe = (event) => {
    event.target.parentElement.remove();
}



const addIframe = (event) => {
    console.log(`parent is ${event.target.parentElement.parentElement}`)
    let id = event.target.id;
    if(id === "colorCardPicker"){
        iframe.setAttribute("src", "https://brilliant-madeleine-28fb8e.netlify.app/");
        /* getting div element from span --> p --> div and appending newDiv */
        event.target.parentElement.parentElement.append(newDiv);
    } else if (id === "resturantLandingPage") {
        iframe.setAttribute("src", "https://bharatkh92.github.io/simplotel-asgmt/");
        event.target.parentElement.parentElement.append(newDiv);
    } else if (id === "htmlCssResume") {
        iframe.setAttribute("src", "https://bharatkh92.github.io/htmlCssResume/");
        event.target.parentElement.parentElement.append(newDiv);
    }
    let addingCloseEventLisnter = document.getElementById("close");
    addingCloseEventLisnter.addEventListener("click", removeIframe); 
}

colorCardPicker.addEventListener("click", addIframe);
resturantLandingPage.addEventListener("click", addIframe);
htmlCssResume.addEventListener("click", addIframe);

