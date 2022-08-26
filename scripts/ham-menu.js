function openHam() {
    let icon = document.getElementById("ham-menu")
    icon.style.display = "block";
    document.getElementById("main").style.display = "none";
    // console.log("yooo")
}

function cutHam() {
    let icon = document.getElementById("ham-menu")
    icon.style.display = "none";
    document.getElementById("main").style.display = "block";
    // console.log("yooo")
}


function subMenu() {
    console.log("hi")
    let tool1 = document.getElementById("tool1");
    tool1.style.display = "none";
    let tool2 = document.getElementById("tool2");
    tool2.style.display = "block";

}

function subMenuClose() {
    let tool1 = document.getElementById("tool1");
    tool1.style.display = "block";
    let tool2 = document.getElementById("tool2");
    tool2.style.display = "none";
    // alert("hi")
}