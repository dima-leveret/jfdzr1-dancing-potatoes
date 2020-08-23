const langEl = document.querySelector('.languages');
const link = document.querySelectorAll('#language');

// navigation
const navMenuPremiereEl = document.querySelector('.nav-menu-premiere');
const navMenuFunctionEl = document.querySelector('.nav-menu-function');
const navMenuInfoEl = document.querySelector('.nav-menu-info');
const navMenuTeamEl = document.querySelector('.nav-menu-team');
const navMenuContactEl = document.querySelector('.nav-menu-contact')

// slider
const side1El = document.querySelector('.side1');
const side2El = document.querySelector('.side2');
const side3El = document.querySelector('.side3');
const side4El = document.querySelector('.side4');

const textSlide1EL = document.querySelector('.textSlide1');
const textSlide2EL = document.querySelector('.textSlide2');
const textSlide3EL = document.querySelector('.textSlide3');
const textSlide4EL = document.querySelector('.textSlide4');

const buttonSlide1El = document.querySelector('.buttonSlide1');
const buttonSlide2El = document.querySelector('.buttonSlide2');
const buttonSlide3El = document.querySelector('.buttonSlide3');
const buttonSlide4El = document.querySelector('.buttonSlide4');


link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        // navigation
        navMenuPremiereEl.textContent = translation[attr].navMenuPremiere;
        navMenuFunctionEl.textContent = translation[attr].navMenuFunction;
        navMenuInfoEl.textContent = translation[attr].navMenuInfo;
        navMenuTeamEl.textContent = translation[attr].navMenuTeam;
        navMenuContactEl.textContent = translation[attr].navMenuContact;

        // slider



    });
});

let translation = {
    'polish': {
        // navigation
        'navMenuPremiere': 'Premiera',
        'navMenuFunction': 'Funkcje aplikacji',
        'navMenuInfo': 'Info',
        'navMenuTeam': 'Zespół',
        'navMenuContact': 'Kontakt',

        // slider
        'side1': 'Spływy kajakowe',
        'side2': '1 min',
        'side3': 'Impreza okolicznościowa?',
        'side4': 'Bądź na bieżąco',

        'textSlide1': 'Porównaj ceny wypożyczalni.',
        'textSlide2': 'Dokładnie tyle zajmie rezerwacja.',
        'textSlide3': 'Pomożemy Ci w organizacji !',
        'textSlide4': 'Zapisz się na premierę i otrzymuj najlepsze oferty',

        'buttonSlide1': 'Sprawdź ofertę',
        'buttonSlide2': 'Rezerwuj',
        'buttonSlide3': 'Kontakt',
        'buttonSlide4': 'Zapisz się',
    },

    'russian': {
        // navigation
        'navMenuPremiere': 'Премьера',
        'navMenuFunction': 'Особенности приложения',
        'navMenuInfo': 'Информация',
        'navMenuTeam': 'Информация о команде',
        'navMenuContact': 'Контакт',

        // slider
    },

    'english': {
        // navigation
        'navMenuPremiere': 'Premiere',
        'navMenuFunction': 'Application features',
        'navMenuInfo': 'Information',
        'navMenuTeam': 'Team information',
        'navMenuContact': 'Contact',

        // slider
    }
    
}