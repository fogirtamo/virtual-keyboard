const keyboard = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.key');
const keysLetter = document.querySelectorAll('.letter');
const keysSymbol = document.querySelectorAll('.symbol');
const textArea = document.querySelector('.text-area');
const space = document.querySelector('.space');
const backspace = document.querySelector('.backspace');
const deleteKey = document.querySelector('.delete');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const arrowUp = document.querySelector('.arrow-up');
const arrowDown = document.querySelector('.arrow-down');
const enter = document.querySelector('.enter');
const tab = document.querySelector('.tab');
const ctrl = document.querySelector('.ctrl');
const alt = document.querySelector('.alt');
const shift = document.querySelector('.shift');
const caps = document.querySelector('.caps');
const bottonLang = document.querySelector('.language .key')

let layout = localStorage.getItem('layout_saved') || 1;    // Раскладка: 1 - eng, 2 - ru
let ctrlMode = 'off';
let altMode = 'off';
let shiftMode = 'off';
let capsMode = 'off';

// Ввод букв
keysLetter.forEach((key) => {
    key.addEventListener('mousedown', (event) => {
        if (!event.shiftKey && capsMode == 'off') {
            let keyText = key.querySelector(`div:nth-child(${layout})`).textContent.toLowerCase();
            if(event.getModifierState("CapsLock")) keyText = keyText.toUpperCase();
            textArea.setRangeText(keyText, textArea.selectionStart, textArea.selectionEnd, "end");
        };

        if (event.shiftKey || capsMode == 'on') {
            let keyText = key.querySelector(`div:nth-child(${layout})`).textContent;
            if(event.getModifierState("CapsLock")) keyText = keyText.toLowerCase();
            textArea.setRangeText(keyText, textArea.selectionStart, textArea.selectionEnd, "end");
        };

        // sessionStorage.setItem('autosave', textArea.value);

        textArea.focus();
    })
});

// Ввод символов
keysSymbol.forEach((key) => {
    key.addEventListener('mousedown', (event) => {
        if (!event.shiftKey) {
            let keyText = key.querySelector('div:last-child').textContent;
            textArea.setRangeText(keyText, textArea.selectionStart, textArea.selectionEnd, "end");
        };

        if (event.shiftKey) {
            let keyText = key.querySelector('div:first-child').textContent;
            textArea.setRangeText(keyText, textArea.selectionStart, textArea.selectionEnd, "end");
        };

        textArea.focus();
    })
});

// Анимация клавиш
keys.forEach((key) => {
    key.addEventListener('mousedown', () => {
        key.classList.toggle('key-animation');

        let audio = new Audio();                // звуки клавиш
        audio.src = 'assets/press-key.mp3';
        audio.autoplay = true; 
    });
    
    document.addEventListener('mouseup', () => {
        key.classList.remove('key-animation');
    });
});





