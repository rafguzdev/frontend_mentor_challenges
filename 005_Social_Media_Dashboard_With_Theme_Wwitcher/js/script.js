const toggle = document.querySelector('.toggle')
const body = document.querySelector('body')

toggle.addEventListener('click', chngThem)

function chngThem() {
    body.classList.toggle('dark')
    toggle.classList.toggle('dark')
}