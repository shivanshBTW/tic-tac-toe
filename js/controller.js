window.addEventListener('load', init);

function init() {
    bindEvents();
    // initArray();
}

function bindEvents() {
    var buttons = document.querySelectorAll('.inputButtons');
    buttons.forEach((button) => {
        button.addEventListener('click', inputValue);
    });
    document.querySelector("#clearButton").addEventListener('click', clear);
}

function inputValue() {
    if (!gameOperations.gameOverFlag) {
        var currentButtonValue = this.innerText;
        // console.log(currentButtonValue);
        if (!this.innerText) {
            gameOperations.zeroCrossFlag ? this.innerText = 'X' : this.innerText = 'O';
            gameOperations.toggleZeroCross();
        }
        checkWins();
    }

}

// function initArray() {
//     // gameOperations.buttonsArray = new HTMLCollection();
//     // pp=document.querySelector('#zz');
//     // console.log(pp);
//     // gameOperations.buttonsArray = [[pp,document.querySelector('#zo'),document.querySelector('#zt')],[document.querySelector('#oz'),document.querySelector('#oo'),document.querySelector('#ot')],[document.querySelector('#tz'),document.querySelector('#to'),document.querySelector('#tz')]];
//     // console.log(gameOperations.buttonsArray);
//     gameOperations.zz = document.querySelector('#zz');
//     gameOperations.zo = document.querySelector('#zo');
//     gameOperations.zt = document.querySelector('#zt');
//     gameOperations.oz = document.querySelector('#oz');
//     gameOperations.oo = document.querySelector('#oo');
//     gameOperations.ot = document.querySelector('#ot');
//     gameOperations.tz = document.querySelector('#tz');
//     gameOperations.to = document.querySelector('#to');
//     gameOperations.tt = document.querySelector('#tt');


// }

function checkWins() {
    var zz = document.querySelector('#zz');
    var zo = document.querySelector('#zo');
    var zt = document.querySelector('#zt');
    var oz = document.querySelector('#oz');
    var oo = document.querySelector('#oo');
    var ot = document.querySelector('#ot');
    var tz = document.querySelector('#tz');
    var to = document.querySelector('#to');
    var tt = document.querySelector('#tt');

    isWon(zz, zo, zt);
    isWon(oz, oo, ot);
    isWon(tz, to, tt);
    isWon(zz, oz, tz);
    isWon(zo, oo, to);
    isWon(zt, ot, tt);
    isWon(zz, oo, tt);
    isWon(zt, oo, tz);


}

function isWon(button1, button2, button3) {
    if (((button1.innerText == button2.innerText) && (button1.innerText == button3.innerText) && button1.innerText)) { //check it
        // console.log(button1.innerText+" win")
        document.querySelector('#resultArea').innerText = button1.innerText + " has won the game";
        gameOperations.gameOverFlag=true;
    }

}

function clear() {
    var buttons = document.querySelectorAll('.inputButtons');
    for (button of buttons) {
        button.innerText = "";
    }
    document.querySelector('#resultArea').innerText = "";
    gameOperations.gameOverFlag=false;
}