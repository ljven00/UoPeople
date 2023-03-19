let btn = document.querySelector(".btn");
let dropdown = document.querySelector(".dropdown");

btn.addEventListener("mouseenter", function (){
    dropdown.style.display = "block";
});


dropdown.addEventListener("mouseleave", function (){
    dropdown.style.display = "none";
});