let arrCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'None', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

document.addEventListener('keydown', (e) => {
    let keyIndex = arrCodes.findIndex((element) => element == e.code);
    let keyCurrent = keys[keyIndex + 1];
    keyCurrent.classList.toggle('key-animation');

    let audio = new Audio();                // звуки клавиш
    audio.src = 'assets/press-key.mp3';
    audio.autoplay = true; 

    document.addEventListener('keyup', () => {
        keyCurrent.classList.remove('key-animation');
    });

    if(e.code == 'Tab') setTimeout(() => {keyCurrent.classList.remove('key-animation')}, 200);
    if(e.code == 'CapsLock') {
        caps.classList.toggle('caps-active');
        if(capsMode == 'off') capsMode = 'on'
        else capsMode = 'off';
    } 
})