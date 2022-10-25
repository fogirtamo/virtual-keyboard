let readonly;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    readonly = "readonly"
    // код для мобильных устройств
} 

(() => {
    document.body.insertAdjacentHTML('beforeend', 
    `<div class="panel">
    <textarea ${readonly} class="text-area"></textarea>
    <div class="language">Language: <div class="key">EN</div>Alt+Shift for change</div>
    <div class="keyboard" onmousedown="return false">
        <div class="keyboard_row-one">
            <div class="key double symbol"><div>~</div><div>\`</div></div>
            <div class="key double symbol"><div>!</div><div>1</div></div>
            <div class="key double symbol"><div>@</div><div>2</div></div>
            <div class="key double symbol"><div>#</div><div>3</div></div>
            <div class="key double symbol"><div>$</div><div>4</div></div>
            <div class="key double symbol"><div>%</div><div>5</div></div>
            <div class="key double symbol"><div>^</div><div>6</div></div>
            <div class="key double symbol"><div>&</div><div>7</div></div>
            <div class="key double symbol"><div>*</div><div>8</div></div>
            <div class="key double symbol"><div>(</div><div>9</div></div>
            <div class="key double symbol"><div>)</div><div>0</div></div>
            <div class="key double symbol"><div>_</div><div>-</div></div>
            <div class="key double symbol"><div>+</div><div>=</div></div>
            <div class="key backspace">Backspace</div>
        </div>
        <div class="keyboard_row-two">
            <div class="key tab">Tab</div>
            <div class="key double letter letter-eng"><div>Q</div><div>Й</div></div>
            <div class="key double letter"><div>W</div><div>Ц</div></div>
            <div class="key double letter"><div>E</div><div>У</div></div>
            <div class="key double letter"><div>R</div><div>К</div></div>
            <div class="key double letter"><div>T</div><div>Е</div></div>
            <div class="key double letter"><div>Y</div><div>Н</div></div>
            <div class="key double letter"><div>U</div><div>Г</div></div>
            <div class="key double letter"><div>I</div><div>Ш</div></div>
            <div class="key double letter"><div>O</div><div>Щ</div></div>
            <div class="key double letter"><div>P</div><div>З</div></div>
            <div class="key double letter"><div>[</div><div>Х</div></div>
            <div class="key double letter"><div>]</div><div>Ъ</div></div>
            <div class="key double symbol"><div>\\</div><div>/</div></div>  
            <div class="key delete">DEL</div>
        </div>
        <div class="keyboard_row-three">
            <div class="key caps"><span>Caps Lock</span></div>
            <div class="key double letter"><div>A</div><div>Ф</div></div>
            <div class="key double letter"><div>S</div><div>Ы</div></div>
            <div class="key double letter"><div>D</div><div>В</div></div>
            <div class="key double letter"><div>F</div><div>А</div></div>
            <div class="key double letter"><div>G</div><div>П</div></div>
            <div class="key double letter"><div>H</div><div>Р</div></div>
            <div class="key double letter"><div>J</div><div>О</div></div>
            <div class="key double letter"><div>K</div><div>Л</div></div>
            <div class="key double letter"><div>L</div><div>Д</div></div>
            <div class="key double letter"><div>;</div><div>Ж</div></div>
            <div class="key double letter"><div>'</div><div>Э</div></div>
            <div class="key enter">Enter</div>
        </div>
        <div class="keyboard_row-four">
            <div class="key shift">Shift</div>
            <div class="key"><div>\\</div></div>
            <div class="key double letter"><div>Z</div><div>Я</div></div>
            <div class="key double letter"><div>X</div><div>Ч</div></div>
            <div class="key double letter"><div>C</div><div>С</div></div>
            <div class="key double letter"><div>V</div><div>М</div></div>
            <div class="key double letter"><div>B</div><div>И</div></div>
            <div class="key double letter"><div>N</div><div>Т</div></div>
            <div class="key double letter"><div>M</div><div>Ь</div></div>
            <div class="key double letter"><div>,</div><div>Б</div></div>
            <div class="key double letter"><div>.</div><div>Ю</div></div>
            <div class="key double letter"><div>/</div><div>.</div></div>
            <div class="key arrow-up"><span>&#10148;</span></div>
            <div class="key shift">Shift</div>
        </div>
        <div class="keyboard_row-five">
            <div class="key ctrl">Ctrl</div>
            <div class="key">Win</div>
            <div class="key alt">Alt</div>
            <div class="key space"> </div>
            <div class="key alt">Atl</div>
            <div class="key ctrl">Ctrl</div>
            <div class="key arrow-left"><span>&#10148;</span></div>
            <div class="key arrow-down"><span>&#10148;</span></div>
            <div class="key arrow-right"><span>&#10148;</span></div>
        </div>
        
    </div>
</div>`)
})();



