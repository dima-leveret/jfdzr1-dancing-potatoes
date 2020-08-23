const langEl = document.querySelector('.languages');
const link = document.querySelectorAll('#language');

// navigation
const navMenuPremiereEl = document.querySelector('.nav-menu-premiere');
const navMenuFunctionEl = document.querySelector('.nav-menu-function');
const navMenuInfoEl = document.querySelector('.nav-menu-info');
const navMenuTeamEl = document.querySelector('.nav-menu-team');
const navMenuContactEl = document.querySelector('.nav-menu-contact')

// slider
const slide1El = document.querySelector('.slide1');
const slide2El = document.querySelector('.slide2');
const slide3El = document.querySelector('.slide3');
const slide4El = document.querySelector('.slide4');

const textSlide1EL = document.querySelector('.textSlide1');
const textSlide2EL = document.querySelector('.textSlide2');
const textSlide3EL = document.querySelector('.textSlide3');
const textSlide4EL = document.querySelector('.textSlide4');

const buttonSlide1El = document.querySelector('.buttonSlide1');
const buttonSlide2El = document.querySelector('.buttonSlide2');
const buttonSlide3El = document.querySelector('.buttonSlide3');
const buttonSlide4El = document.querySelector('.buttonSlide4');

// app functions
const functionsTitleEl = document.querySelector('.functions__title');

const appFunction1El = document.querySelector('.flp1');
const appFunction2El = document.querySelector('.flp2');
const appFunction3El = document.querySelector('.flp3');
const appFunction4El = document.querySelector('.flp4');



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
        slide1El.textContent = translation[attr].slide1;
        slide2El.textContent = translation[attr].slide2;
        slide3El.textContent = translation[attr].slide3;
        slide4El.textContent = translation[attr].slide4;

        textSlide1EL.textContent = translation[attr].textSlide1;
        textSlide2EL.textContent = translation[attr].textSlide2;
        textSlide3EL.textContent = translation[attr].textSlide3;
        textSlide4EL.textContent = translation[attr].textSlide4;

        buttonSlide1El.textContent = translation[attr].buttonSlide1;
        buttonSlide2El.textContent = translation[attr].buttonSlide2;
        buttonSlide3El.textContent = translation[attr].buttonSlide3;
        buttonSlide4El.textContent = translation[attr].buttonSlide4;

        // app functions
        functionsTitleEl.textContent = translation[attr].functionsTitle;

        appFunction1El.textContent = translation[attr].appFunction1;
        appFunction2El.textContent = translation[attr].appFunction2;
        appFunction3El.textContent = translation[attr].appFunction3;
        appFunction4El.textContent = translation[attr].appFunction4;


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
        'slide1': 'Spływy kajakowe',
        'slide2': '1 min',
        'slide3': 'Impreza okolicznościowa?',
        'slide4': 'Bądź na bieżąco',

        'textSlide1': 'Porównaj ceny wypożyczalni.',
        'textSlide2': 'Dokładnie tyle zajmie rezerwacja.',
        'textSlide3': 'Pomożemy Ci w organizacji !',
        'textSlide4': 'Zapisz się na premierę i otrzymuj najlepsze oferty',

        'buttonSlide1': 'Sprawdź ofertę',
        'buttonSlide2': 'Rezerwuj',
        'buttonSlide3': 'Kontakt',
        'buttonSlide4': 'Zapisz się',

        // app functions
        'functionsTitle': 'CO POTRAFI WIOSŁO?',

        'appFunction1': 'Znajdzie najbliższe wypożyczalnie',
        'appFunction2': 'Zarezerwuje Ci łódkę',
        'appFunction3': 'Podpowie Ci jak pływać',
        'appFunction4': 'Znajdzie drogę do bazy',
    },

    'russian': {
        // navigation
        'navMenuPremiere': 'Премьера',
        'navMenuFunction': 'Особенности приложения',
        'navMenuInfo': 'Информация',
        'navMenuTeam': 'Информация о команде',
        'navMenuContact': 'Контакт',

        // slider
        'slide1': 'Рафтинг на каяках',
        'slide2': '1 минута',
        'slide3': 'Случайная вечеринка?',
        'slide4': 'Оставаться в курсе',

        'textSlide1': 'Сравните цены на аренду.',
        'textSlide2': 'Это все, что потребуется для бронирования.',
        'textSlide3': 'Мы поможем вам в организации!',
        'textSlide4': 'Запишитесь на премьеру и получайте лучшие предложения',

        'buttonSlide1': 'Проверь предложение',
        'buttonSlide2': 'Забронируй',
        'buttonSlide3': 'Контакт',
        'buttonSlide4': 'Запишись',

        // app functions
        'functionsTitle': 'ЧТО МОЖЕТ ВЕСЛО?',

        'appFunction1': 'Найдет ближайшие аренды каяков',
        'appFunction2': 'Бронирует лодку',
        'appFunction3': 'Подскажет как плавать',
        'appFunction4': 'Найдет путь к базе',
    },

    'english': {
        // navigation
        'navMenuPremiere': 'Premiere',
        'navMenuFunction': 'Application features',
        'navMenuInfo': 'Information',
        'navMenuTeam': 'Team information',
        'navMenuContact': 'Contact',

        // slider
        'slide1': 'Canoe trip',
        'slide2': '1 min',
        'slide3': 'Occasional party?',
        'slide4': 'Stay updated',

        'textSlide1': 'Compare rental prices.',
        'textSlide2': 'This is exactly what the booking will take.',
        'textSlide3': 'We will help you in organizing!',
        'textSlide4': 'Sign up for the premiere and receive the best offers',

        'buttonSlide1': 'Check the offer',
        'buttonSlide2': 'Book it',
        'buttonSlide3': 'Contact',
        'buttonSlide4': 'Sign up',

        // app functions
        'functionsTitle': 'WHAT CAN THE OAR DO?',

        'appFunction1': 'It can find the nearest rentals',
        'appFunction2': 'It can book you a boat',
        'appFunction3': 'Can tell you how to swim',
        'appFunction4': 'Can find a way to the base',
    }
    
}