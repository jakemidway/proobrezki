let btnBurger = document.querySelector('.header__burger-btn');
let btnClose = document.querySelector('.header__close-btn');
let verticalMenu = document.querySelector('.header__vertical-menu');
function openMenu(){
    verticalMenu.classList.toggle('header__vertical-menu_hidden');
    verticalMenu.classList.toggle('header__vertical-menu_visible');
}
btnBurger.onclick = openMenu;
btnClose.onclick = openMenu;
/*-------------------------------------------ПРОКРУТКА ПО ЯЯКАРЯМ------------------------------------------------------------------------------------------*/
let anchors = document.querySelectorAll('a[href*="#"]');
for(let anchor of anchors){
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        openMenu();
        let blockID = anchor.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    });
}


