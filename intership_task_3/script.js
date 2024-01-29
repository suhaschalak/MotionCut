let searchForm = document.querySelector('.search-form');
document.querySelector('#menu-mg').onclick = () => {
    searchForm.classList.toggle('active');
    addCart.classList.remove('active');
    loginForm.classList.remove('active');
    nav.classList.remove('active');
}

let addCart = document.querySelector('.shopping-cart');
document.querySelector('#menu-cart').onclick = () => {
    addCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    nav.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#menu-user').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    addCart.classList.remove('active');
    nav.classList.remove('active');
}

let nav = document.querySelector('nav');
document.querySelector('#menu-btn').onclick = () => {
    nav.classList.toggle('active');
    searchForm.classList.remove('active');
    addCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    addCart.classList.remove('active');
    loginForm.classList.remove('active');
    nav.classList.remove('active');
}