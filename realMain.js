function player(Name, gamePiece) {
    return {Name, gamePiece};
};

const gameBoard = (function () {
    
    const DIMENSION = 3;
    let board = [];


    const makeArrayBoard = () => {

        for (let i = 0; i < DIMENSION; i++) {
            board.push([])
            for (let j = 0; j < DIMENSION; j++) {
                board[i].push('');
            }
        }
    }

    const displayGame = () => {

        const pageBoard = document.createElement('div');
        pageBoard.setAttribute('id', 'board');
        pageBoard.setAttribute('style', '{display: flex; justify-content: center; align-items:center; flex-basis:500px}')
        document.body.appendChild(pageBoard);
    
        for (let i = 0; i < DIMENSION; i++) {
    
            const newRow = document.createElement('div');
            for (let j = 0; j < DIMENSION; j++) {
                const newCell = document.createElement('button');
                newCell.setAttribute('class', 'space');
                newCell.setAttribute('id', 'cell'+ i + '-' + j);
                newCell.innerHTML = board[i][j];
                newRow.appendChild(newCell);
            }
            pageBoard.appendChild(newRow)
        }
        
        const turnTracker = document.createElement('div');
        turnTracker.setAttribute('id','turn-tracker');
        
        const resultDisplay = document.createElement('div');
        resultDisplay.setAttribute('id','result-display');

        document.body.appendChild(turnTracker);
        document.body.appendChild(resultDisplay);
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

    const createWaysToWin = () => {
        theWays = [
            [[0,0], [0,1], [0,2]],
            [[1,0], [1,1], [1,2]],
            [[2,0], [2,1], [2,2]],
    
            [[0,0], [1,0], [2,0]],
            [[0,1], [1,1], [2,1]],
            [[0,2], [1,2], [2,2]],
    
            [[0,0], [1,1], [2,2]],
            [[2,0], [1,1], [0,2]]
        ]

        for (let i = 0; i < theWays.length; i++) {
            theWays[i].sort();
        }
        return theWays;
    }

    const playerMove = (gamePiece, row, col) => {    
        if (board[row][col] == '') {
            board[row][col] += gamePiece;
            const correspondingSpace = document.getElementById('cell'+row+'-'+col);
            correspondingSpace.innerHTML = board[row][col];
        };
    }

    const createNewPlayersForm = () => {
        const newPlayerForm = document.createElement('form');
    
        newPlayerForm.setAttribute('id','form');
        newPlayerForm.style.cssText = 
            'display: flex; flex-direction: column; flex-basis: 50px; margin: 10px' ;
    
        const newNameOneLabel = document.createElement('label');
        newNameOneLabel.style.cssText = 'width: 300px';
        newNameOneLabel.innerHTML = 'Player 1 Name'
        newPlayerForm.appendChild(newNameOneLabel);
        
        const newNameOneField = document.createElement('input');
        newNameOneField.style.cssText = 'width: 300px;'
        newNameOneField.setAttribute('id','name_one');
        newPlayerForm.appendChild(newNameOneField);

        const newPieceOneLabel = document.createElement('label');
        newPieceOneLabel.style.cssText = 'width: 300px';
        newPieceOneLabel.innerHTML = 'Player 1 Game Piece'
        newPlayerForm.appendChild(newPieceOneLabel);
        
        const newPieceOneField = document.createElement('input');
        newPieceOneField.style.cssText = 'width: 300px;'
        newPieceOneField .setAttribute('id','piece_one');
        newPieceOneField .setAttribute('maxlength','1');
        newPlayerForm.appendChild(newPieceOneField);

        const newNameTwoLabel = document.createElement('label');
        newNameTwoLabel.style.cssText = 'width: 300px';
        newNameTwoLabel.innerHTML = 'Player 2 Name'
        newPlayerForm.appendChild(newNameTwoLabel);
        
        const newNameTwoField = document.createElement('input');
        newNameTwoField.style.cssText = 'width: 300px;'
        newNameTwoField.setAttribute('id','name_two');
        newPlayerForm.appendChild(newNameTwoField);

        const newPieceTwoLabel = document.createElement('label');
        newPieceTwoLabel.style.cssText = 'width: 300px';
        newPieceTwoLabel.innerHTML = 'Player 2 Game Piece'
        newPlayerForm.appendChild(newPieceTwoLabel);
        
        const newPieceTwoField = document.createElement('input');
        newPieceTwoField.style.cssText = 'width: 300px;'
        newPieceTwoField .setAttribute('id','piece_two');
        newPieceTwoField .setAttribute('maxlength','1');
        newPlayerForm.appendChild(newPieceTwoField);
            
        const submitButton = document.createElement('button');
        submitButton.setAttribute('id', 'submit_players');
        submitButton.style.cssText = 'width: 300px; margin: 5px'
        submitButton.innerHTML = 'Start!';
        newPlayerForm.appendChild(submitButton);

        document.body.appendChild(newPlayerForm);

        submitButton.addEventListener('click', function(event) {
            event.preventDefault();
            

            
        })
    }

    const createNewPlayers = () => {
        const newPlayerForm = document.getElementById('form');
        const playerOne = player(newPlayerForm.name_one.value,
            newPlayerForm.piece_one.value);
        const playerTwo = player(newPlayerForm.name_two.value,
            newPlayerForm.piece_two.value);

        players = [playerOne, playerTwo]
        return players
    }

    const checkBoard = (gamePiece) => {
   
        const waysToWin = createWaysToWin();
        playerSpots = [];

        for (let i = 0; i < DIMENSION; i++) {
            for (let j = 0; j < DIMENSION; j++) {
                if (board[i][j] == gamePiece) {
                    playerSpots.push([i,j]);
                }
            }
        }
        
        for (let i = 0; i < waysToWin.length; i++) {
            if (JSON.stringify(playerSpots) == JSON.stringify(waysToWin[i])) {
                return true;
            }
        }

        return false;
    }

    const playGame = (playerOne, playerTwo) => {
        const playerOneTurn = `It's ${playerOne.Name}'s Turn`
        const playerTwoTurn = `It's ${playerTwo.Name}'s Turn`

        let playerOneWon = false;
        let playerTwoWon = false;

        turnTracker = document.getElementById('turn-tracker');
        resultDisplay = document.getElementById('result-display');

        let thisPlayersTurn = 1;
        turnTracker.innerHTML = playerOneTurn;
        resultDisplay.innerHTML = '';

        const gameSpaces = document.getElementsByClassName('space');
        numOfTurns = 0;

        for (let space of gameSpaces) {   
            space.addEventListener('click', event => {
                row = space.id.substring(4,5);
                col = space.id.substring(6,7);

                if (thisPlayersTurn == 1) {
                    playerMove(playerOne.gamePiece, row, col);
                    thisPlayersTurn = 2;
                    turnTracker.innerHTML = playerTwoTurn;
                    numOfTurns++;
                    playerOneWon = checkBoard(playerOne.gamePiece);
                } 
                else {
                    playerMove(playerTwo.gamePiece, row, col);
                    thisPlayersTurn = 1;
                    turnTracker.innerHTML = playerOneTurn;
                    numOfTurns++;
                    playerTwoWon = checkBoard(playerTwo.gamePiece);
                }

                if (playerOneWon) {
                    turnTracker.innerHTML = '';
                    resultDisplay.innerHTML = `${playerOne.Name} Wins!`;
                    } 
                
                
                if (playerTwoWon) {
                    turnTracker.innerHTML = '';
                    resultDisplay.innerHTML = `${playerTwo.Name} Wins!`;
                }

                if (numOfTurns == 9) {
                    turnTracker.innerHTML = '';
                    resultDisplay.innerHTML = `It's a tie`; 
                }   
        });
        
        clearPageBoard();
    }  
}

    const startGame = () => {
        createNewPlayersForm();
        let players;

        const submitButton = document.getElementById('submit_players');
        submitButton.addEventListener('click', function(event) {
            event.preventDefault();
            
            makeArrayBoard();
            displayGame();
            
            players = createNewPlayers();
            clearNewPlayersForm();
            playGame(players[0],players[1])  
        });
    }


    return {startGame}
})();



gameBoard.startGame();