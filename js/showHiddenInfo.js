document.getElementById("previous1").onclick = function() { 
    document.getElementById("infoBox").style.width = "unset";
    document.getElementById("infoBox").classList.add("openInfoBox"); 

    document.getElementById("hiddenInfo").style.display = "flex";
    setTimeout(() => {
        document.getElementById("hiddenInfo").style.opacity = "1"; 
    }, 500); 

    setTimeout(() => { document.querySelector(".part1").classList.add("show"); }, 600);
    setTimeout(() => { document.querySelector(".part2").classList.add("show"); }, 800);
    setTimeout(() => { document.querySelector(".part3").classList.add("show"); }, 1000);

    document.getElementById("previous").style.display = "none";
    document.getElementById("previous1").style.display = "none";
}