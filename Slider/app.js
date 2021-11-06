let activeSlideNumber = 1;

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

hiddeActiveSlide = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
}

showSlide = (slideNumber) => {
    hiddeActiveSlide();
    document.querySelector('#slide' + slideNumber).classList.add('active');
}

for (let i = 1; i <=3; i++) {
    let showSlideI = () =>{
        showSlide(i);
        activeSlideNumber = i;    
    }
    document.querySelector('#dot'+i).addEventListener('click', showSlideI);
}

showNextSlide = () => {
    if (activeSlideNumber === 3) {
        activeSlideNumber = 1;
        
    }
    else {
        activeSlideNumber++;
    }
    showSlide(activeSlideNumber);
}

showPreviousSlide = () => {
    if (activeSlideNumber === 1) {
        activeSlideNumber = 3;
    }
    else {
        activeSlideNumber--;
    }
    showSlide(activeSlideNumber);
}


arrowRight.addEventListener('click', showNextSlide);
arrowLeft.addEventListener('click', showPreviousSlide);