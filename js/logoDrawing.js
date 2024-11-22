Array.from(document.getElementsByClassName("path")).forEach(pathElement => {
    pathElement.setAttribute('style', 'stroke-dasharray:'+pathElement.getTotalLength()+';stroke-dashoffset:'+pathElement.getTotalLength())
})

function scrollPageToStart() {
    document.querySelector("body").style.overflow = "hidden";
    window.scrollTo(0, 0)
}

function logoPosition() {
    document.querySelector("svg").style.position = "unset";
    document.querySelector(".loadScreen").style.display = "none";
    document.querySelector("body").style.overflow = "scroll";
    document.querySelector(".adt").style.display = "flex";
}

setTimeout(scrollPageToStart, 3500)
setTimeout(logoPosition, 4500)