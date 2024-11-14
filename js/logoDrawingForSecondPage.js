Array.from(document.getElementsByClassName("pathForSecondPage")).forEach(pathElement => {
    pathElement.setAttribute('style', 'stroke-dasharray: calc('+pathElement.getTotalLength()+' - 5100);stroke-dashoffset: 1800')
})

function scrollPageToStart() {
    document.querySelector("body").style.overflow = "hidden";
    window.scrollTo(0, 0)
}

function logoPosition() {
    document.querySelector("svg").style.position = "unset";
    document.querySelector(".loadScreenForSecondPage").style.display = "none";
    document.querySelector("body").style.overflow = "scroll";
    document.querySelector("svg").style.display = "none";
}

setTimeout(scrollPageToStart, 2300)
setTimeout(logoPosition, 3300)