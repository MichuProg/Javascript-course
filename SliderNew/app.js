const dotsCollection = document.querySelectorAll('.dot');
const slideCollection = document.querySelectorAll('.slide');
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
let slideActive = 0;

hideSlideActive = () => {
    document.querySelector('.active').classList.remove('active');
}

showSlide = (slide) => {
    hideSlideActive();
    slide.classList.add('active');
}

for (let i = 0; i < dotsCollection.length; i++) {
    dotsCollection[i].addEventListener('click', () => {
        showSlide(slideCollection[i]);
        slideActive = i;
        console.log(slideActive);
    });
}

isTheSlideLastOneInTheCollection = () => {
    return slideActive === slideCollection.length - 1;
}

isTheSlideFirstOneInTheCollection = () => {
    return slideActive === 0;
}

showNextSlide = () => {
    if (isTheSlideLastOneInTheCollection()) {
        slideActive = 0;
    } else {
        slideActive++;
    }
    showSlide(slideCollection[slideActive])
}

showPreviousSlide = () => {
    if (isTheSlideFirstOneInTheCollection()) {
        slideActive = slideCollection.length - 1;
    } else {
        slideActive--;
    }
    showSlide(slideCollection[slideActive])
}

arrowRight.addEventListener('click', showNextSlide);
arrowLeft.addEventListener('click', showPreviousSlide);


