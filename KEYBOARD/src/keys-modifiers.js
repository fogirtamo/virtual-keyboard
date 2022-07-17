// Переключение языка
const letterKeys = document.querySelectorAll('.letter');
let pressed = new Set();
document.addEventListener('keydown', function(event) {
    pressed.add(event.code);
    document.addEventListener('keyup', () => {
        pressed.delete(event.code)
    });
    if (pressed.has('AltLeft') && pressed.has('ShiftLeft')) {
        if (layout == 1) {
            layout++;
            bottonLang.textContent = 'RU';
        } 
            else {
                layout--;
                bottonLang.textContent = 'EN';
            }

        localStorage.setItem('layout_saved', layout);

        letterKeys.forEach((letterKey) => {
            letterKey.classList.toggle('letter');
            letterKey.classList.toggle('letter-ru');
        });

        pressed = new Set();
    }
});
// Кнопка языка
bottonLang.addEventListener('click', () => {
    if (layout == 1) {
        layout++;
        bottonLang.textContent = 'RU';
    } 
        else {
            layout--;
            bottonLang.textContent = 'EN';
        }
         
        localStorage.setItem('layout_saved', layout);

        letterKeys.forEach((letterKey) => {
            letterKey.classList.toggle('letter');
            letterKey.classList.toggle('letter-ru');
        });
});

document.addEventListener('DOMContentLoaded', () => {
// Сохранение языка при перезагрузке страницы
    if (layout == 2) {
        letterKeys.forEach((letterKey) => {
            letterKey.classList.toggle('letter');
            letterKey.classList.toggle('letter-ru');
        });
    };

// Сохранение содержимого text-area после перезагрузки страницы
    // if (sessionStorage.getItem("autosave")) {
    //     textArea.value = sessionStorage.getItem("autosave");
    // }

    textArea.focus();
});

// Space
space.addEventListener('mousedown', () => {
    textArea.setRangeText(' ', textArea.selectionStart, textArea.selectionEnd, "end");
    textArea.focus();
});

// Backspace
backspace.addEventListener('mousedown', () => {
    if (textArea.selectionStart) textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd, "end");
    textArea.focus();
});

// Delete
deleteKey.addEventListener('mousedown', () => {
    if (textArea.selectionEnd) textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd + 1, "end");
    textArea.focus();
});

// Enter 
enter.addEventListener('mousedown', () => {
    textArea.setRangeText(`\r\n`, textArea.selectionStart, textArea.selectionEnd, "end");
    textArea.selectionStart -= 1;
    textArea.selectionEnd -= 1;

    textArea.focus();
});

// Caps Lock
caps.addEventListener('click', () => {
    caps.classList.toggle('caps-active');
    if(capsMode == 'off') capsMode = 'on'
    else capsMode = 'off';
})

// Tab 
tab.addEventListener('mousedown', () => {
    textArea.setRangeText(`    `, textArea.selectionStart, textArea.selectionEnd, "end");
    
    textArea.focus();
});

// Ctrl 
ctrl.addEventListener('mousedown', () => {
    ctrlMode = 'on';
    textArea.focus();
});

// Alt
alt.addEventListener('mousedown', () => {
    altMode = 'on';
    textArea.focus();
});

// Shift
shift.addEventListener('mousedown', () => {
    shiftMode = 'on';
    textArea.focus();
});

// Ввод с клавитуры при включенном shiftmode
textArea.addEventListener('keydown', (e) => {
    if(shiftMode == 'on') {
        setTimeout(() => {
            textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd, "end");
            textArea.setRangeText(e.key.toUpperCase(), textArea.selectionStart, textArea.selectionEnd, "end");
        }, 1 ) 
    }
    // if(shiftMode == 'on' && keysSymbol.include(e.key)) {
    //     setTimeout(() => {
    //         textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd, "end");
    //         let keyText = keysSymbol.e.key.querySelector('div:last-child').textContent;
    //         textArea.setRangeText(keyText, textArea.selectionStart, textArea.selectionEnd, "end");
    //     }, 1 ) 
    // }
});

// Отключение кнопок модификаторов
document.addEventListener('mouseup', () => {
    ctrlMode = 'off';
    altMode = 'off';
    shiftMode = 'off';
});

// Arrows
arrowLeft.addEventListener('mousedown', () => {
    if (textArea.selectionStart == 0 ) {
        textArea.selectionStart += 1;
    };
    textArea.selectionStart -= 1;
    textArea.selectionEnd -= 1;
    
    textArea.focus();
    
});
arrowRight.addEventListener('mousedown', () => {
    textArea.selectionStart += 1;
    textArea.focus();
});

arrowDown.addEventListener('mousedown', () => {      // не пашет с автопереносами
    function getCaretPos(objName) {
        var obj = document.querySelector(objName);
        obj.focus();
        if (document.selection) {                                         // IE
        var sel = document.selection.createRange();
        var clone = sel.duplicate();
        sel.collapse(true);
        clone.moveToElementText(obj);
        clone.setEndPoint('EndToEnd', sel);
        return clone.text.length;
        } else if (obj.selectionStart!==false) return obj.selectionStart; // Gecko
        else return 0;
    };

    let arrStr = textArea.value.split('\n');
    if (getCaretPos('.text-area') == 0) {
        textArea.selectionStart = arrStr[0].length + 1;
    } else {
        let position = getCaretPos('.text-area');
        for(let i = 0; position >= 0; position++) {
            position = position - arrStr[i].length;
            if (position <= 0) {
                textArea.selectionStart = arrStr[i].length + 1 + getCaretPos('.text-area');
            }
            i++;
        }
    }
    textArea.focus();
});
arrowUp.addEventListener('mousedown', () => {          // не пашет с автопереносами  
    function getCaretPos(objName) {
        var obj = document.querySelector(objName);
        obj.focus();
        if (document.selection) {                                         // IE
        var sel = document.selection.createRange();
        var clone = sel.duplicate();
        sel.collapse(true);
        clone.moveToElementText(obj);
        clone.setEndPoint('EndToEnd', sel);
        return clone.text.length;
        } else if (obj.selectionStart!==false) return obj.selectionStart; // Gecko
        else return 0;
    };

    let arrStr = textArea.value.split('\n').reverse();
    if (getCaretPos('.text-area') == 0) {
        textArea.selectionStart = arrStr[0].length + 1;
    } else {
        let position = getCaretPos('.text-area');
        for(let i = 0; position >= 0; position++) {
            position = position - arrStr[i].length;
            if (position <= 0) {
                textArea.selectionStart = arrStr[i].length + 1 + getCaretPos('.text-area');
            }
            i++;
        }
    }
    textArea.focus();
});



