import { Player, GameBoard } from './gameMechanics';

const game = GameBoard();

function createElement(tag, id = '', innerHTML = '') {
    const element = document.createElement(tag);
    element.id = id;
    element.innerHTML = innerHTML;
    return element
}

function displayGame() {
    const pageBoard = createElement('table', 'board');
    document.body.appendChild(pageBoard);

    for (let i = 0; i < game.board.length; i++) {
        const row = createElement('tr');
        for (let j = 0; j < game.board.length; j++) {
            const cell = createElement('td',`(${i},${j})`);
            cell.classList.add('space');
            const button = createElement('button', `(${i},${j})`);
            cell.appendChild(button);
            row.appendChild(cell);
        }
        pageBoard.appendChild(row)
    }
    
    const turnTracker = createElement('div', 'turn-tracker');
    const resultDisplay = createElement('div', 'result-display');

    document.body.appendChild(turnTracker);
    document.body.appendChild(resultDisplay);
}

function enableGame(playerOne, playerTwo) {
    const playerOneTurn = `It's ${playerOne.name}'s Turn`
    const playerTwoTurn = `It's ${playerTwo.name}'s Turn`

    let playerOneWon = false;
    let playerTwoWon = false;

    const turnTracker = document.getElementById('turn-tracker');
    const resultDisplay = document.getElementById('result-display');

    let thisPlayersTurn = 1;
    turnTracker.innerText = playerOneTurn;
    resultDisplay.innerText = '';

    const gameSpaces = document.getElementsByClassName('space');
    let turns = 0;

    for (let space of gameSpaces) {   
        space.addEventListener('click', () => {
            const row = space.id.substring(1,2);
            const col = space.id.substring(4,5);
            const move  = [row,col];

            if (thisPlayersTurn == 1) {
                game.tic(move, playerOne.gamePiece);
                space.innerHTML = playerOne.gamePiece;
                thisPlayersTurn = 2;
                turnTracker.innerHTML = playerTwoTurn;
                playerOneWon = game.checkForWin(playerOne.gamePiece);
            } 
            else {
                game.tic(move, playerTwo.gamePiece);
                space.innerHTML = playerTwo.gamePiece;
                thisPlayersTurn = 1;
                turnTracker.innerHTML = playerOneTurn;
                playerTwoWon = game.checkForWin(playerTwo.gamePiece);
            }

            turns++

            if (playerOneWon) {
                turnTracker.innerHTML = '';
                resultDisplay.innerHTML = `${playerOne.Name} Wins!`;
                } 
            
            
            if (playerTwoWon) {
                turnTracker.innerHTML = '';
                resultDisplay.innerHTML = `${playerTwo.Name} Wins!`;
            }

            if (turns === 9) {
                turnTracker.innerHTML = '';
                resultDisplay.innerHTML = `It's a tie`; 
            }   
    }, { once: true });
    }  
}

const clearPageBoard = () => {
    const gameSpaces = document.getElementsByClassName('space');
    for (let space of gameSpaces) {
        space.innerHTML = '';
    }
}

function clearNewPlayersForm() {
    const currentForm = document.querySelector('form');
    if (currentForm) {
        currentForm.replaceChildren();
        currentForm.remove();
    };
};


export function createNewPlayersForm() {
    const newPlayerForm = createElement('form', 'form');

    const newNameOneLabel = createElement('label','label1','Player 1 Name');
    newPlayerForm.appendChild(newNameOneLabel);
    
    const newNameOneField = createElement('input','name_one');
    newPlayerForm.appendChild(newNameOneField);

    const newPieceOneLabel = createElement('label','label1a','Player 1 Game Piece');
    newPlayerForm.appendChild(newPieceOneLabel);
    
    const newPieceOneField = createElement('input','piece_one');
    newPieceOneField.setAttribute('maxlength','1');
    newPlayerForm.appendChild(newPieceOneField);

    const newNameTwoLabel = createElement('label','label2','Player 2 Name');
    newPlayerForm.appendChild(newNameTwoLabel);
    
    const newNameTwoField = createElement('input','name_two');
    newPlayerForm.appendChild(newNameTwoField);

    const newPieceTwoLabel = createElement('label','label2a','Player 2 Game Piece');
    newPlayerForm.appendChild(newPieceTwoLabel);
    
    const newPieceTwoField = createElement('input','piece_two');
    newPieceTwoField.setAttribute('maxlength','1');
    newPlayerForm.appendChild(newPieceTwoField);
        
    const submitButton = createElement('button','submit_players','Start!');
    newPlayerForm.appendChild(submitButton);
    submitButton.addEventListener('click', startGame);

    document.body.appendChild(newPlayerForm);
}


function createNewPlayers() {
    const newPlayerForm = document.getElementById('form');
    const playerOne = Player(newPlayerForm.name_one.value,
        newPlayerForm.piece_one.value);
    const playerTwo = Player(newPlayerForm.name_two.value,
        newPlayerForm.piece_two.value);

    return [playerOne, playerTwo];
}

function startGame() {
    const players = createNewPlayers();
    document.body.replaceChildren();
    displayGame();
    enableGame(players[0],players[1])    
}
