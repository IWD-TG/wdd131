let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme(){
    let current = selectElem.value;

    if (current == 'dark'){
        //body to dark background and change text (dark class to body)
        //change img
        document.body.className = 'dark';
        logo.setAttribute('src', 'images/byui-logo_white.png');
    } else {
        //remove the dark tag
        //change img
        document.body.className = '';
        logo.setAttribute('src','images/byui-logo_blue.webp')
    }
}