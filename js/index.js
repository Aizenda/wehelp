
function chang1(){
    let aboutDiv = document.querySelector("#about");
    let ApplicationMotivationDiv = document.querySelector("#Application-motivation");
    aboutDiv.style.display = "flex";
    ApplicationMotivationDiv.style.display = "none";
};

function chang2(){
    let aboutDiv = document.querySelector("#about");
    let ApplicationMotivationDiv = document.querySelector("#Application-motivation");
    aboutDiv.style.display = "none";
    ApplicationMotivationDiv.style.display = "flex";

};

function FrontEnd(){
    let htmlDiv = document.querySelector("#Front-end");
    let nodeDiv = document.querySelector("#Back-end");
    let pythonDiv = document.querySelector("#python");
    let other = document.querySelector("#other");
    htmlDiv.style.display = "block";
    nodeDiv.style.display = "none";
    pythonDiv.style.display= "none";
    other.style.display= "none";

};

function BackEnd(){
    let htmlDiv = document.querySelector("#Front-end");
    let nodeDiv = document.querySelector("#Back-end");
    let pythonDiv = document.querySelector("#python");
    let other = document.querySelector("#other");
    htmlDiv.style.display = "none";
    nodeDiv.style.display = "block";
    pythonDiv.style.display= "none";
    other.style.display= "none";
};

function python(){
    let htmlDiv = document.querySelector("#Front-end");
    let nodeDiv = document.querySelector("#Back-end");
    let pythonDiv = document.querySelector("#python");
    let other = document.querySelector("#other");
    htmlDiv.style.display = "none";
    nodeDiv.style.display = "none";
    pythonDiv.style.display= "block";
    other.style.display= "none";

};

function other(){
    let htmlDiv = document.querySelector("#Front-end");
    let nodeDiv = document.querySelector("#Back-end");
    let pythonDiv = document.querySelector("#python");
    let other = document.querySelector("#other");
    htmlDiv.style.display = "none";
    nodeDiv.style.display = "none";
    pythonDiv.style.display= "none";
    other.style.display= "block";
};
