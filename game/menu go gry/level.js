const easyBtn = document.querySelector('.easyBtn');
const startBtn = document.querySelector('.startBtn');
const hardBtn = document.querySelector('.hardBtn');

let dificultyStatus = 0;

easyBtn.addEventListener('click', () => {
    easyBtn.disabled = true;
    console.log('dupa')
});


hardBtn.addEventListener('click', () => {
    statusChange(2);
    
});


function statusChange(status) {
    dificultyStatus = status;
}

if (dificultyStatus === 1){
    easyBtn.disabled = true;
}