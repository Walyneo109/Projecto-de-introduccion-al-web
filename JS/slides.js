/**
 carrousel Image */
let slideIndex = 1;
showSlides(slideIndex);
/* prev and next functions */
function plusSlides(n) {
    showSlides(slideIndex += n);
}
/**img controls */
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n){
    let i;
    let slides= document.getElementsByClassName("carrousell");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

/*Carousel de prodcutos */ 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swipe",
    clickable: true,
  },
   navigation: {
    nextEl: '.sbn',
    prevEl: '.sbp',
  },
});

/* Formularios  */
let currentTab = 0;
showTab(currentTab);
function showTab(n){
  var x = document.getElementsByClassName("tab");
  x[n].style.display= "block";
if (n == 0 ) {
  document.getElementById("prevBtn").style.display="none";
} else {
  document.getElementById("prevBtn").style.display="inline";
}
if (n==(x.length -1 )) {

  document.getElementById("nextBtn").innerHTML = "Enviar";
  
} else {
  document.getElementById("nextBtn").innerHTML = "Siguiente";
}
fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display= "none";
    currentTab = currentTab + n;
if (currentTab >=x.length) {
   document.getElementById("Comentary").submit();
   let name = document.getElementById("nombre").value;
   let surname = document.getElementById("apellido").value;
   window.alert( name +" "+ surname +' \n ' + "Gracias por su reseña ♥!!");
   return false; 
  }
  showTab(currentTab);
}
function validateForm() {

  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");

  for (i = 0; i < y.length; i++) {
 
    if (y[i].value == "") {
    
      y[i].className += " invalid";
    
      valid = false;
    }
  }
 
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

function fixStepIndicator(n) {
 
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}

