// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});
// current slide counter
let curSlide = 0;
let maxSlide = slides.length - 1;
// select next slide button
const nextSlide = document.querySelector(".btn-next");

nextSlide.addEventListener("click", function () {
if (curSlide === maxSlide) {
curSlide = 0;
} else {
curSlide ++;
}
slides.forEach((slide, indx) => {
slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
});
});
// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
if (curSlide === 0) {
curSlide = maxSlide;
} else {
curSlide--;
}

slides.forEach((slide, indx) => {
slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
});
});
// next function
const checkbox = document.getElementById('check01');
const arrow = document.getElementById('arrow1');

checkbox.addEventListener('change', () => {
  if(checkbox.checked) {
    arrow.src = './img/AngleUp.svg'; 
  } else {
    arrow.src = './img/AngleDown.svg';
  }
});
const checkbox2 = document.getElementById('check02');
const arrow2 = document.getElementById('arrow2');

checkbox2.addEventListener('change', () => {
  if(checkbox2.checked) {
    arrow2.src = './img/AngleUp.svg'; 
  } else {
    arrow2.src = './img/AngleDown.svg';
  }
});
//like function
const checkboxes = document.querySelectorAll('.i-mid input[type="checkbox"]');

// Loop through each one
checkboxes.forEach(checkboxes => {

  // Get adjacent image 
  const image = checkboxes.nextElementSibling; 

  // Attach click handler
  checkboxes.addEventListener('click', () => {
    
    if(checkboxes.checked) {
        image.src = './img/liked.svg'; 
      }
      // If unchecked, change back
      else {
        image.src = './img/unliked.svg';
      }
  });

});
