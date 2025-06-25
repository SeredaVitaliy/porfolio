const menuIcon = document.querySelector('.menu-icon'),
      header = document.querySelector('.header');
    //   body = document.querySelector('body');
      

menuIcon.addEventListener('click', ()=> {
    menuIcon.classList.toggle('menu-icon--active');
    header.classList.toggle('header--mobile');
    // body.classList.toggle('no-scroll');

})


// slider arrows
const sliderArrows = document.querySelector('.slider-arrows'),
      slidesArrows = sliderArrows.querySelectorAll('.slider-arrows__item'),
      prev = sliderArrows.querySelector('.slider-arrows__arrow--left'),
      next = sliderArrows.querySelector('.slider-arrows__arrow--right');

// console.log(prev);


// создаем индекс текущего слайда

let slideIndex = 0;

// объявляем обработчики событий на стрелки 

prev.addEventListener('click', () => showSliderArrows(-1));
next.addEventListener('click', () => showSliderArrows(1));

function showSliderArrows(n) {
    // console.log(n);
    slideIndex = slideIndex + n;
    // slideIndex +=n;

    if(slideIndex < 0) slideIndex = slidesArrows.length - 1;
    if(slideIndex >= slidesArrows.length) slideIndex = 0;

    //console.log(slideIndex);

    slidesArrows.forEach(item => item.style.display = 'none');
    slidesArrows[slideIndex].style.display = 'block';
}

showSliderArrows(0);


// Slider dots
const sliderDots = document.querySelector('.slider-dots'),
      slidesDots = sliderDots.querySelectorAll('.slider-dots__item'),
      wrapperDots = sliderDots.querySelector('.slider-dots__nav');

console.log(wrapperDots);

const dots = []; //создаем массив

// делаем цикл

for (let i = 0; i < slidesDots.length; i++){
    // console.log(i);
    const dot = document.createElement('button');
    // console.log(dot);


    dot.dataset.slideTo = i;

    dot.classList.add('slider-dots__nav-item');
    if (i == 0) dot.classList.add('slider-dots__nav-item--active');

    if (i != 0) slidesDots[i].style.display = 'none';
    dot.addEventListener('click', showSlideDots)

    wrapperDots.append(dot);
    dots.push(dot);
}

function showSlideDots(event) {
    // console.log(event.target);
    // console.log(event.target.dataset.slideTo);

    const slideTo = event.target.dataset.slideTo;

    // console.log(slideTo);
    // console.log(slidesDots[slideTo]);

    slidesDots.forEach(item => item.style.display = 'none');
    slidesDots[slideTo].style.display = 'block';

    dots.forEach(dot => dot.classList.remove('slider-dots__nav-item--active'));
    event.target.classList.add('slider-dots__nav-item--active');
}