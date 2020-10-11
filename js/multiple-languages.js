const langEl = document.querySelector('.languages');
const link = document.querySelectorAll('#language');

//html lang
const htmlLangEl = document.querySelector('html');

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

// How it works?
const moreAboutProductSectionHeaderEl = document.querySelector('.more-about-product-section__header');

const mapdh1El = document.querySelector('.mapdh1');
const mapdh2El = document.querySelector('.mapdh2');
const mapdh3El = document.querySelector('.mapdh3');
const mapdh4El = document.querySelector('.mapdh4');

const mapdp1El = document.querySelector('.mapdp1');
const mapdp2El = document.querySelector('.mapdp2');
const mapdp3El = document.querySelector('.mapdp3');
const mapdp4El = document.querySelector('.mapdp4');

// information about team
const infoAboutTeamEl = document.querySelector('.infoAboutTeam');

const nameKamilEl = document.querySelector('.nameKamil');
const nameJarekEl = document.querySelector('.nameJarek');
const nameDimaEl = document.querySelector('.nameDima');

const aboutKamilEl = document.querySelector('.aboutKamil');
const aboutJarekEl = document.querySelector('.aboutJarek');
const aboutDimaEl = document.querySelector('.aboutDima');

// premiere form
const titlePremiereEl = document.querySelector('.title');

const premieraContainerFormEl = document.querySelector('.premiera__container__form');
const iBnameEL = document.querySelector('.iBname');
const iBmailEl = document.querySelector('.iBmail');
// const iBkomentEl = document.querySelector('.iBkoment');
const premieraContainerButtonEl = document.querySelector('.premiera__send');
const informacjaEl = document.querySelector('.informacja');
const infoTextEl = document.querySelector('.info-text');
const infoPEl = document.querySelector('.info-p');

// footer
const footerContainerCompanyNameEl = document.querySelector('.footer-container__company__name');
const footerContainerContactPhoneEl = document.querySelector('.footer-container__contact_phone');
const footerContainerRegulationsEl = document.querySelector('.footer-container__regulations');
const footerContainerPrivacyEl = document.querySelector('.footer-container__privacy');


var translation = {

    'polish': {
        //html lang
        'htmlLang': 'pl',

        // navigation
        'navMenuPremiere': 'Premiera',
        'navMenuFunction': 'Funkcje aplikacji',
        'navMenuInfo': 'Info',
        'navMenuTeam': 'Zespół',
        'navMenuContact': 'Logowanie',

        // slider
        'slide1': 'Kajak, łódka czy rower wodny?',
        'slide2': 'Trzy kliknięcia...',
        'slide3': 'Sprawdź naszą aplikację mobilną',
        'slide4': 'Bądź na bieżąco',

        'textSlide1': 'Porównaj oferty pobliskich wypożyczalni',
        'textSlide2': 'Dzielą Cię od dokonania rezerwacji.',
        'textSlide3': 'I miej "Wiosło" zawsze przy sobie',
        'textSlide4': 'Zapisz się na premierę i otrzymuj najlepsze oferty',

        'buttonSlide1': 'Sprawdź ofertę',
        'buttonSlide2': 'Sprawdź sam!',
        'buttonSlide3': 'Sprawdź ją!',
        'buttonSlide4': 'Zapisz się',

        // app functions
        'functionsTitle': '<img src="./images/paddle.png" class="paddle" alt="paddle">CO POTRAFI WIOSŁO?<img src="./images/paddle.png" class="paddle" alt="paddle">',

        'appFunction1': 'Znajdzie najbliższe wypożyczalnie',
        'appFunction2': 'Zarezerwuje Ci łódkę',
        'appFunction3': 'Podpowie Ci jak pływać',
        'appFunction4': 'Znajdzie drogę do bazy',

        // How it works?
        'moreAboutProductSectionHeader': '<img src="./images/paddle.png" class="paddle" alt="paddle">JAK TO DZIAŁA?<img src="./images/paddle.png" class="paddle" alt="paddle">',

        'mapdh1': 'Szukasz wypożyczalni? <br> Pomożemy!',
        'mapdh2': 'Rezerwacja łódki <br> w 1 minutę!',
        'mapdh3': 'Nie umiesz pływać? <br> Żaden problem!',
        'mapdh4': 'Pokażemy Ci <br> jak wrócić!',

        'mapdp1': 'Biwakowanie przy ognisku Ci się znudziło? Szukasz wodnych atrakcji? U nas znajdziesz wszystkie wypożyczalnie sprzętów wodnych w Twojej okolicy. Nie czekaj, zarejestruj się!',
        'mapdp2': 'Nie wiesz na czym chcesz pływać? Albo wiesz doskonale, ale nie chcesz tracić czasu na zbędne formalności? Z nami zarezerwujesz wymarzony sprzęt szybciej niż zaparzy się kawa!',
        'mapdp3': 'To Twój pierwszy raz? Nie wiesz od czego zacząć? Powiemy Ci jak dobrze trzymać wiosło! Sprawdź nasze poradniki pływania pisane przez profesjonalnych trenerów.',
        'mapdp4': 'Nie jesteś mistrzem w orientacji w terenie? Z "Wiosłem" możesz zawsze czuć się bezpiecznie. Udostępnimy Ci mapy wód offline, które doprowadzą Cię do bazy.',

        // information about team
        'infoAboutTeam': '<img src="./images/paddle.png" class="paddle" alt="paddle">informacje o zespole<img src="./images/paddle.png" class="paddle" alt="paddle">',

        'nameKamil': 'Kamil Jastrzembowski',
        'nameJarek': 'Jaroslaw Witowski',
        'nameDima': 'Dima Zaichenko',

        'aboutKamil': 'Jestem absolwentem wyższej Szkoły Turystyki i Hotelarstwa w Gdańsku, w którym obecnie też mieszkam. Aktualnie całą swoją uwagę koncentruję na rozwijaniu umiejętności w zakresie Front End Development.',
        'aboutJarek': 'Inżynier elektryk z pasją do programowania. Uwielbiam poznawać nowe technologie, tworzyć nietuzinkowe rozwiązania dla typowych problemów i przede wszystkim… lubię naleśniki.',
        'aboutDima': 'Urodziłem się w Ukrainie. Swoją pasję znalazłem w fitnesie. Do Polski przyjechałem żeby ukończyć magisterkę. Teraz jestem master-trenerem i prezenterem Polski w tej sferze ale lubie wyzwania i tym razem wybrałem Front-End-Development.',

        // premiere form
        'titlePremiere': 'ZAPISZ SIĘ NA PREMIERĘ',

        'premieraContainerForm': 'Zapis na premierę',
        'iBname': 'Imię',
        'iBmail': 'Mail',
        // 'iBkoment': 'Komentarz',
        'premieraContainerButton': 'WYŚLIJ',
        'informacja': 'ZAPISZ SIĘ DO NASZEGO NEWSLETTERA',
        'infoText' : 'I BĄDŹ PIERWSZYM KTÓRY DOWIE SIĘ O PREMIERZE NASZEJ APLIKACJI!',
        'infoP' : '*Dołączając akceptujesz Regulamin usługi, Politykę prywatności i Politykę antyspamową',

        // footer
        'footerContainerCompanyName': '&#174 Dancing Potatoes Sp. z o.o.',
        'footerContainerContactPhone': 'Telefon: +48 123 123 123',
        'footerContainerRegulations': 'Regulamin',
        'footerContainerPrivacy': 'Prywatność',

        //popup
        'popupUser': 'Cześć&nbsp;<p id="user"></p>!',
        'popupThanks': 'Dziękujemy za rejestrację w premierze!',
        'popupQuestion': 'Czy chcesz zagrać w grę?',
        'popupNo': 'Nie, dziękuję',
        'popupYes': 'Tak! Pewnie!',
    },

    'russian': {
        //html lang
        'htmlLang': 'ru',

        // navigation
        'navMenuPremiere': 'Премьера',
        'navMenuFunction': 'Особенности приложения',
        'navMenuInfo': 'Информация',
        'navMenuTeam': 'Информация о команде',
        'navMenuContact': 'Авторизоваться',

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
        'functionsTitle': '<img src="./images/paddle.png" class="paddle" alt="paddle">ТО МОЖЕТ ВЕСЛО?<img src="./images/paddle.png" class="paddle" alt="paddle">',

        'appFunction1': 'Найдет ближайшие аренды каяков',
        'appFunction2': 'Бронирует лодку',
        'appFunction3': 'Подскажет как плавать',
        'appFunction4': 'Найдет путь к базе',

        // How it works?
        'moreAboutProductSectionHeader': '<img src="./images/paddle.png" class="paddle" alt="paddle">КАК ЭТО РАБОТАЕТ?<img src="./images/paddle.png" class="paddle" alt="paddle">',

        'mapdh1': 'Ищешь аренду? <br> Поможем!',
        'mapdh2': 'Бронирование лодок <br> за 1 минуту!',
        'mapdh3': 'Ты не умеешь плавать? <br> Нет проблем!',
        'mapdh4': 'Покажем, <br> как вернуться!',

        'mapdp1': 'Вам наскучил кемпинг у костра? Вы ищете водные аттракционы? Вы можете найти все пункты проката водного оборудования в вашем районе. Не ждите, регистрируйтесь!',
        'mapdp2': 'Вы не знаете, на чем хотите плавать? Или вы прекрасно знаете, но не хотите тратить время на ненужные формальности? У нас вы можете зарезервировать оборудование своей мечты быстрее, чем варится кофе!',
        'mapdp3': 'Это твой первый раз? Не уверен, с чего начать? Мы расскажем, как хорошо держать весло! Ознакомьтесь с нашими уроками, написанными профессиональными тренерами.',
        'mapdp4': 'Вы не мастер в области ориентирования? С "Веслом" вы всегда можете чувствовать себя в безопасности. Мы предоставим вам автономные водные карты, которые проведут вас на базу.',

        // information about team
        'infoAboutTeam': '<img src="./images/paddle.png" class="paddle" alt="paddle">информация о команде<img src="./images/paddle.png" class="paddle" alt="paddle">',

        'nameKamil': 'Камиль Ястшембовски',
        'nameJarek': 'Ярослав Витовски',
        'nameDima': 'Дима Зайченко',

        'aboutKamil': 'Я выпускник Высшей школы туризма и гостиничного менеджмента города Гданьск, где и живу сейчас. На данный момент все мое внимание сосредоточено на развитии навыков в области Front End разработки.',
        'aboutJarek': 'Инженер-электрик со страстью к программированию. Я люблю узнавать о новых технологиях, находить необычные решения для общих проблем и больше всего ... я люблю блины.',
        'aboutDima': 'Я родился в Украине. Свою страсть нашел в фитнесе. Приехал в Польшу, чтобы получить степень магистра. Сейчас я мастер-тренер в этой области, но мне нравятся вызовы, и на этот раз я выбрал Front-End-Development.',

        // premiere form
        'titlePremiere': 'запишись на премьеру',

        'premieraContainerForm': 'Регистрация на премьеру',
        'iBname': 'Имя',
        'iBmail': 'Mail',
        // 'iBkoment': 'Комментарий',
        'premieraContainerButton': 'ОТПРАВИТЬ',
        'informacja': 'ПОДПИШИТЕСЬ НА НАШУ РАССЫЛКУ',
        'infoText' : 'И БУДЬТЕ ЗНАТЬ ПЕРВЫМ О ЗАПУСКЕ НАШЕГО ПРИЛОЖЕНИЯ!',
        'infoP' : '*Присоединяясь, вы принимаете Условия использования, Политику конфиденциальности и Политику защиты от спама.',

        // footer
        'footerContainerCompanyName': '&#174 Dancing Potatoes Sp. z o.o.',
        'footerContainerContactPhone': 'Телефон: +48 123 123 123',
        'footerContainerRegulations': 'Условия использования',
        'footerContainerPrivacy': 'Конфиденциальность',

         //popup
         'popupUser': 'Привет&nbsp;<p id="user"></p>!',
         'popupThanks': 'Спасибо, что записались на премьеру!',
         'popupQuestion': 'Хочешь сыграть в игру?',
         'popupNo': 'Нет, спасибо',
         'popupYes': 'Да, пожалуйста',
    },

    'english': {
        //html lang
        'htmlLang': 'en',

        // navigation
        'navMenuPremiere': 'Premiere',
        'navMenuFunction': 'Application features',
        'navMenuInfo': 'Information',
        'navMenuTeam': 'Team information',
        'navMenuContact': 'Login',

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
        'functionsTitle': '<img src="./images/paddle.png" class="paddle" alt="paddle">WHAT CAN THE OAR DO?<img src="./images/paddle.png" class="paddle" alt="paddle">',

        'appFunction1': 'It can find the nearest rentals',
        'appFunction2': 'It can book you a boat',
        'appFunction3': 'Can tell you how to swim',
        'appFunction4': 'Can find a way to the base',

        // How it works?
        'moreAboutProductSectionHeader': '<img src="./images/paddle.png" class="paddle" alt="paddle">HOW DOES IT WORK?<img src="./images/paddle.png" class="paddle" alt="paddle">',

        'mapdh1': 'Are you looking for a rental company? <br> We will help!',
        'mapdh2': 'Boat booking <br> in one minute!',
        'mapdh3': 'You can not swim? <br> No problem!',
        'mapdh4': 'We will show you <br> how to come back!',

        'mapdp1': 'Are you bored of camping by the fire? Are you looking for water attractions? You can find all water equipment rentals in your area. Do not wait, register!',
        'mapdp2': 'You do not know what you want to swim on? Or you know perfectly well, but you do not want to waste time on unnecessary formalities? With us, you can reserve your dream equipment faster than coffee is brewed!',
        'mapdp3': 'This is your first time? Not sure how to start? We will tell you how to hold the oar well! Check out our swimming tutorials written by professional trainers.',
        'mapdp4': 'Are you not a master in field orientation? You can always feel safe with the Oar. We will provide you with offline water maps that will lead you to the base.',

        // information about team
        'infoAboutTeam': '<img src="./images/paddle.png" class="paddle" alt="paddle">information about the team<img src="./images/paddle.png" class="paddle" alt="paddle">',

        'nameKamil': 'Kamil Jastrzembowski',
        'nameJarek': 'Jaroslaw Witowski',
        'nameDima': 'Dima Zaichenko',

        'aboutKamil': 'I am a graduate of the Higher School of Tourism and Hotel Management in Gdańsk, where I also live now. Currently, all my attention is focused on developing skills in the field of Front End Development.',
        'aboutJarek': 'Electrical engineer with a passion for programming. I love learning about new technologies, creating extraordinary solutions to common problems and most of all… I like pancakes.',
        'aboutDima': 'I was born in Ukraine. I found my passion in fitness. I came to Poland to complete my master`s degree. Now I am a master trainer and Polish presenter in this area, but I like challenges and this time I chose Front-End-Development.',

        // premiere form
        'titlePremiere': 'Sign up for the premiere',

        'premieraContainerForm': 'Registration for the premiere',
        'iBname': 'Name',
        'iBmail': 'Mail',
        // 'iBkoment': 'Comment',
        'premieraContainerButton': 'SEND',
        'informacja': 'SING IN FOR OUR NEWSLETTER',
        'infoText' : 'AND BE THE FIRST ONE KNOWING ABOUT PREMIERE OF OUR APP',
        'infoP' : '*By joining, you accept the Terms of Service, Privacy Policy and Anti-Spam Policy',


        // footer
        'footerContainerCompanyName': '&#174 Dancing Potatoes Sp. z o.o.',
        'footerContainerContactPhone': 'Phone: +48 123 123 123',
        'footerContainerRegulations': 'Regulations',
        'footerContainerPrivacy': 'Privacy',

        //popup
        'popupUser': 'Hello&nbsp;<p id="user"></p>!',
        'popupThanks': 'Thank you for registering at the premiere',
        'popupQuestion': 'Would you like to play a game?',
        'popupNo': 'No, thank you',
        'popupYes': 'Yes! Sure!',
    }
    
}

const markLanguage = (attr) => {
    console.log('mark lang', attr);
    //html lang
    htmlLangEl.lang = translation[attr].htmlLang

    // navigation
    navMenuPremiereEl.innerHTML = translation[attr].navMenuPremiere;
    navMenuFunctionEl.innerHTML = translation[attr].navMenuFunction;
    navMenuInfoEl.innerHTML = translation[attr].navMenuInfo;
    navMenuTeamEl.innerHTML = translation[attr].navMenuTeam;
    navMenuContactEl.innerHTML = translation[attr].navMenuContact;

    // slider
    slide1El.innerHTML = translation[attr].slide1;
    slide2El.innerHTML = translation[attr].slide2;
    slide3El.innerHTML = translation[attr].slide3;
    slide4El.innerHTML = translation[attr].slide4;

    textSlide1EL.innerHTML = translation[attr].textSlide1;
    textSlide2EL.innerHTML = translation[attr].textSlide2;
    textSlide3EL.innerHTML = translation[attr].textSlide3;
    textSlide4EL.innerHTML = translation[attr].textSlide4;

    buttonSlide1El.innerHTML = translation[attr].buttonSlide1;
    buttonSlide2El.innerHTML = translation[attr].buttonSlide2;
    buttonSlide3El.innerHTML = translation[attr].buttonSlide3;
    buttonSlide4El.innerHTML = translation[attr].buttonSlide4;

    // app functions
    functionsTitleEl.innerHTML = translation[attr].functionsTitle;

    appFunction1El.innerHTML = translation[attr].appFunction1;
    appFunction2El.innerHTML = translation[attr].appFunction2;
    appFunction3El.innerHTML = translation[attr].appFunction3;
    appFunction4El.innerHTML = translation[attr].appFunction4;

    // How it works?
    moreAboutProductSectionHeaderEl.innerHTML = translation[attr].moreAboutProductSectionHeader;

    mapdh1El.innerHTML = translation[attr].mapdh1;
    mapdh2El.innerHTML = translation[attr].mapdh2;
    mapdh3El.innerHTML = translation[attr].mapdh3;
    mapdh4El.innerHTML = translation[attr].mapdh4;

    mapdp1El.innerHTML = translation[attr].mapdp1;
    mapdp2El.innerHTML = translation[attr].mapdp2;
    mapdp3El.innerHTML = translation[attr].mapdp3;
    mapdp4El.innerHTML = translation[attr].mapdp4;

    // information about team
    infoAboutTeamEl.innerHTML = translation[attr].infoAboutTeam;

    nameKamilEl.innerHTML = translation[attr].nameKamil;
    nameJarekEl.innerHTML = translation[attr].nameJarek;
    nameDimaEl.innerHTML = translation[attr].nameDima;

    aboutKamilEl.innerHTML = translation[attr].aboutKamil;
    aboutJarekEl.innerHTML = translation[attr].aboutJarek;
    aboutDimaEl.innerHTML = translation[attr].aboutDima;

    // premiere form
    titlePremiereEl.innerHTML = translation[attr].titlePremiere;

    premieraContainerFormEl.innerHTML = translation[attr].premieraContainerForm;
    iBnameEL.innerHTML = translation[attr].iBname;
    iBmailEl.innerHTML = translation[attr].iBmail;
    // iBkomentEl.innerHTML = translation[attr].iBkoment;
    premieraContainerButtonEl.innerHTML = translation[attr].premieraContainerButton;
    informacjaEl.innerHTML = translation[attr].informacja;

    // footer
    footerContainerCompanyNameEl.innerHTML = translation[attr].footerContainerCompanyName;
    footerContainerContactPhoneEl.innerHTML = translation[attr].footerContainerContactPhone;
    footerContainerRegulationsEl.innerHTML = translation[attr].footerContainerRegulations;
    footerContainerPrivacyEl.innerHTML = translation[attr].footerContainerPrivacy;
}

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');
        window.localStorage.setItem('language', attr);
        markLanguage(attr);
        
    });
});

const selectedLanguage = window.localStorage.getItem('language');
if (selectedLanguage) {
    markLanguage(selectedLanguage);
}


