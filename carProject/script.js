var img = ['images/bg1.jpg', 'images/bn2.jpg', 'images/bn3.jpg', 'images/bn4.jpg'];
var head = document.querySelector(".head");
var i = 0;

var showSlide = function(index) {
    for (var j = 0; j < img.length; j++) {
        document.querySelector(`.C${j+1}`).style.display = (j === index) ? "flex" : "none";
    }
    head.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${img[index]})`;
};

var nextSlide = function() {
    i = (i + 1) % img.length;
    showSlide(i);
};

var prevSlide = function() {
    i = (i - 1 + img.length) % img.length;
    showSlide(i);
};

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.back').addEventListener('click', prevSlide);

document.addEventListener('DOMContentLoaded', function() {
    // Automatically transition slides
    setInterval(nextSlide, 4000); // Change slide every 4 seconds (adjust as needed)
});



//for the menu
var menu=document.querySelector('.navbar .menu i')
var list=document.querySelector('.navbar .list ul')

menu.addEventListener('click',function(){
    list.classList.toggle("show");
})
