let iconMenu = document.querySelector('.menu-icon');
let menuItems = document.querySelector('#menuItems');

menuItems.style.maxHeight = '0px';
iconMenu.addEventListener('click', menutoggle);

function menutoggle(){
    if(menuItems.style.maxHeight == '0px'){
        menuItems.style.maxHeight = '200px';
    }else{
        menuItems.style.maxHeight = '0px';
    }
}