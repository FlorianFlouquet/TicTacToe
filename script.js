const Player = (name, symbol) => {
    return {symbol, name};
};

const georges = Player('Georges', 'O');
const jacques = Player('Jacques','X');
var playerTurn = georges;

const Gameboard = ["","","","","","","","",""];

function collectGameboardContent() {
    for (i=0; i<9; i++) {
        Gameboard[i] = document.getElementsByClassName("gameboardCase")[i].innerText;
    }
}

document.querySelectorAll(".gameboardCase").forEach((div) => {
    div.addEventListener('click', () => {
        if (div.innerText === "") {
            div.innerText = playerTurn.symbol;
            if (playerTurn === georges) {
                playerTurn = jacques;
            }
            else {
                playerTurn = georges;
            }
        }    
    })
});

