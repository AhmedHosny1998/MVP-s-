const nav = document.querySelector('.header-list');
const listitem = document.querySelectorAll('.list-item');
const icon = document.querySelector('.fa-bars');

icon.addEventListener('click', () => {
    nav.style.right='0';

});

listitem.forEach((item) => {
    item.addEventListener('click', () => {
        nav.style.right = '-16rem';
    });
});





document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});