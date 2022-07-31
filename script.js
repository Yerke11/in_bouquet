



const modal = document.querySelector(".modal");
const previews = document.querySelectorAll("img.gallery-image");
const original = document.querySelector('.full-img');


previews.forEach((preview) => {
    preview.addEventListener('click', () => {

        modal.classList.add('open');
        original.classList.add('open');
        const originalSrc = preview.getAttribute('src');
        original.src = originalSrc;
        console.log(originalSrc)


    });
});
modal.addEventListener('click',(e) => {
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open');
        original.classList.remove('open');
    }
});
