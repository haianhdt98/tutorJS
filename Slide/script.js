const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 1;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:500, fill:'forwards'});
    if(counter === 4){
        counter = 0;
    }
    counter++;

    container.style.backgroundImage = `url(img/img-${counter}.jpg)`
}

function prevSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:500, fill:'forwards'});
    if(counter === 1){
        counter = 5;
    }
    counter--;

    container.style.backgroundImage = `url(img/img-${counter}.jpg)`
}