const imgs = document.querySelectorAll('.header-slider ul img');

const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;

// Show Current Slide
function changeSlide() {

    imgs.forEach((img, index) => {

        if (index === n) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }

    });

}

// Next Button
next_btn.addEventListener('click', () => {

    n++;

    if (n >= imgs.length) {
        n = 0;
    }

    changeSlide();

});

// Previous Button
prev_btn.addEventListener('click', () => {

    n--;

    if (n < 0) {
        n = imgs.length - 1;
    }

    changeSlide();

});

// Initial Slide
changeSlide();

const scrollContainer = document.querySelectorAll('.products');

for(const item of scrollContainer){
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}