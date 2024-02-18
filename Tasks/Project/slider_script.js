const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.slide'));
const slideCount = slides.length;
let slideIndex = 0;

let num=document.getElementById('num');

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {      
    slide.style.transition = '1s';
    if (index === slideIndex) {
      slide.style.opacity='1';
      //slide.style.position='static';
      slide.style.maxHeight='500px';
      slide.style.border="20px solid";
      slide.style.borderImage="url(border.png) 130";
      //slide.style.padding="20px";
    } else {
      slide.style.maxHeight='0px';
      slide.style.opacity='0';
      slide.style.border="0px solid";
      slide.style.borderImage="url(border.png) 130";
      //slide.style.padding="0px";
      //slide.style.position='absolute';
    }
    num.innerHTML=slideIndex+1 +" / "+slideCount;
  });
}

// Инициализация слайдера
updateSlider();