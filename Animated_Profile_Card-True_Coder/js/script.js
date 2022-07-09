const image = document.querySelector('.image')
const hover = document.querySelector('.hover')
const modal = document.querySelector('.modal')

function show() {
    hover.classList.add('active');
    modal.classList.add('show');
}

image.addEventListener('click', show)