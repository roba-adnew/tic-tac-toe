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
    const waysToWin = createWaysToWin();

    const playerMove = (gamePiece, row, col) => {    
        if (board[row][col] == '') {
            board[row][col] += gamePiece;
            const correspondingSpace = document.getElementById('cell'+row+'-'+col);
            correspondingSpace.innerHTML = board[row][col];
        };
    }

    const addNewPlayer = () => {
        let gamePiece = '';
        let isViableGamePiece = false;

        while (!isViableGamePiece) {
            gamePiece = prompt(`What letter do you want to use?: `);
            if (gamePiece.length == 1) isViableGamePiece = true;
        }

        return player(gamePiece);
    }

    const checkBoard = (gamePiece) => {
   
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

    function playGame() {
        const playerOne = addNewPlayer();
        const playerTwo = addNewPlayer();
        const playerOneTurn = `It's Player 1's Turn`
        const playerTwoTurn = `It's Player 2's Turn`

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

                if (playerOneWon) {resultDisplay.innerHTML = 'Player 1 Wins!'};

                if (playerTwoWon) {resultDisplay.innerHTML = 'Player 2 Wins!'}

                if (numOfTurns == 9) {resultDisplay.innerHTML = `It's a tie`}
            })   
        }
        
        clearPageBoard();
    }   

    return {makeArrayBoard, displayGame, playGame}
})();

function player(gamePiece) {
    return {gamePiece};
};

gameBoard.makeArrayBoard();
gameBoard.displayGame();
gameBoard.playGame();