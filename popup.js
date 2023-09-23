const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
const close = document.querySelector('.popup-close')
const login = document.querySelector('#content1')
const register = document.querySelector('#content2')
const selectRadio = document.querySelector('.select-radio')
const inpValidate = document.querySelectorAll("input[name = 'email']")
button.addEventListener('click', () => {
    popup.style.display = "block";
})
selectRadio.addEventListener('click', (e) => {
    if (e.target.classList.contains('sign-up')) {
        e.target.previousElementSibling.classList.remove('tabActive')
        e.target.classList.add('tabActive')
        login.style.display = 'none'
        register.style.display = 'block'
    } else if (e.target.classList.contains('sign-in')) {
        e.target.nextElementSibling.classList.remove('tabActive')
        e.target.classList.add('tabActive')
        login.style.display = 'block'
        register.style.display = 'none'
    }
})
close.addEventListener('click', () => {
    popup.style.display = "none";
})
popup.addEventListener('click', (ev) => {
    if (ev.target.className.includes('popup-wrapper')) {
        popup.style.display = "none";
    }
})