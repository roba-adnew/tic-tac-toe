import { Player, GameBoard } from './gameMechanics';

const game = GameBoard();

function createElement(tag, id = '', innerHTML = '') {
    const element = document.createElement(tag);
    element.id = id;
    element.innerHTML = innerHTML;
    return element
}

export function createNewPlayersForm() {
    const formDiv = createElement('div', 'formDiv');
    const header = createElement('h1','title','TICCY TACCY TOE');
    formDiv.appendChild(header);
    const newPlayerForm = createElement('form', 'form');
    formDiv.appendChild(newPlayerForm);

    const p1NameDiv = createElement('div','p1name');
    newPlayerForm.appendChild(p1NameDiv)
    const newNameOneLabel = createElement('label','label1','Player 1 Name');
    p1NameDiv.appendChild(newNameOneLabel);
    
    const newNameOneField = createElement('input','name_one');
    p1NameDiv.appendChild(newNameOneField);

    const p1PieceDiv = createElement('div','p1Piece');
    newPlayerForm.appendChild(p1PieceDiv);
    const newPieceOneLabel = createElement('label','label1a','Player 1 Game Piece');
    p1PieceDiv.appendChild(newPieceOneLabel);
    
    const newPieceOneField = createElement('input','piece_one');
    newPieceOneField.setAttribute('maxlength','1');
    p1PieceDiv.appendChild(newPieceOneField);

    const p2NameDiv = createElement('div','p2name');
    newPlayerForm.appendChild(p2NameDiv)
    const newNameTwoLabel = createElement('label','label2','Player 2 Name');
    p2NameDiv.appendChild(newNameTwoLabel);
    
    const newNameTwoField = createElement('input','name_two');
    p2NameDiv.appendChild(newNameTwoField);

    const p2PieceDiv = createElement('div', 'p2Piece');
    newPlayerForm.appendChild(p2PieceDiv);
    const newPieceTwoLabel = createElement('label','label2a','Player 2 Game Piece');
    p2PieceDiv.appendChild(newPieceTwoLabel);
    
    const newPieceTwoField = createElement('input','piece_two');
    newPieceTwoField.setAttribute('maxlength','1');
    p2PieceDiv.appendChild(newPieceTwoField);
        
    const submitButton = createElement('button','submit_players','Start!');
    newPlayerForm.appendChild(submitButton);
    submitButton.addEventListener('click', startGame);

    document.body.appendChild(formDiv);
}

function displayGame() {
    const gameDiv = createElement('div', 'boardDiv');
    const header = createElement('h1','title','TICCY TACCY TOE');
    gameDiv.appendChild(header);
    const table = createElement('table', 'table');
    gameDiv.appendChild(table);
    document.body.appendChild(gameDiv);

    for (let i = 0; i < game.board.length; i++) {
        const row = createElement('tr');
        for (let j = 0; j < game.board.length; j++) {
            const cell = createElement('td',`(${i},${j})`);
            cell.classList.add('space');
            cell.align = 'center';
            const button = createElement('button', `(${i},${j})`);
            button.classList.add('spaceButton');
            cell.appendChild(button);
            row.appendChild(cell);
        }
        table.appendChild(row)
    }
    
    const turnTracker = createElement('div', 'turn-tracker');
    const resultDisplay = createElement('div', 'result-display');

    gameDiv.appendChild(turnTracker);
    gameDiv.appendChild(resultDisplay);
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
            const col = space.id.substring(3,4);
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
                resultDisplay.innerHTML = `${playerOne.name} Wins!`;
                addRematchButton();
                addNewGameButton();
                } 
            
            if (playerTwoWon) {
                turnTracker.innerHTML = '';
                resultDisplay.innerHTML = `${playerTwo.name} Wins!`;
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

function addNewGameButton() {
    const newGameButton = createElement('button','newGame','Brand new game!');
    newGameButton.addEventListener('click', () => {
        document.body.replaceChildren();
        displayGame();
        enableGame(playerOne, playerTwo) 
    })
    const boardDiv = document.getElementById('boardDiv');
    boardDiv.appendChild(newGameButton);
}

function addRematchButton() {
    const rematch = createElement('button','replayGame','Rematch!');
    rematch.addEventListener('click', () => {
        document.body.replaceChildren();
        createNewPlayersForm();
    });
    const boardDiv = document.getElementById('boardDiv');
    boardDiv.appendChild(rematch);
}