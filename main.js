const ticTacToe = (function() {
    
    let numOfRows = 3;
    let numOfCols = 3;
    let totalSpaces = 9;
    
    let board = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ];

    function createWinCombinations () {
        const possibleWaysToWin = [
            [[0,0], [0,1], [0,2]],
            [[1,0], [1,1], [1,2]],
            [[2,0], [2,1], [2,2]],
    
            [[0,0], [1,0], [2,0]],
            [[0,1], [1,1], [2,1]],
            [[0,2], [1,2], [2,2]],
    
            [[0,0], [1,1], [2,2]],
            [[2,0], [1,1], [0,2]]
        ]

        for (let i = 0; i < possibleWaysToWin.length; i++) {
            possibleWaysToWin[i].sort();
        }

        return possibleWaysToWin;
    }

    function printBoard() {

        let boardString = '';

        for (let i = 0; i < numOfRows; i++) {
            for (let j = 0; j < numOfCols; j++) {
                if (!board[i][j]) {
                    boardString += '_';
                } 
                else {
                    boardString += board[i][j]
                }
                boardString += ' ';
            }

            boardString += '\n';
        }

        console.log(boardString);
        return;
    }

    function clearBoard() {
        for (let i = 0; i < numOfRows; i++) {
            for (let j = 0; j < numOfCols; j++) {
                board[i][j] = null;
            }
        }
    }

    function checkBoard () {

        firstPlayerSequence = [];
        secondPlayerSequence = [];
        possibleWaysToWin = createWinCombinations();

        for (let i = 0; i < numOfRows; i++) {
            for (let j = 0; j < numOfCols; j++) {
                if (board[i][j] == 'x') {
                    firstPlayerSequence.push([i,j]);
                }

                if (board[i][j] == 'o') {
                    secondPlayerSequence.push([i,j]);
                }
            }
        }

        for (let i = 0; i < possibleWaysToWin.length; i++) {
            if (JSON.stringify(firstPlayerSequence) == JSON.stringify(possibleWaysToWin[i])) {
                return 1;
            }
        }

        for (let i = 0; i < possibleWaysToWin.length; i++) {
            if (JSON.stringify(secondPlayerSequence) == JSON.stringify(possibleWaysToWin[i])) {
                return 2;
            }
        }

    return false; 

    }

    function move (row, column, letter) {
        if (!board[row][column]) {
            board[row][column] = letter;
        }
    }

    function gamePlay () {

        clearBoard();
        printBoard();
        let numOfMoves = 0;
        let idOfWinningPlayer = false;

        while (numOfMoves < totalSpaces) {
            let firstPlayerMoveRow = parseInt(prompt("Which row would you like to go to? "));
            let firstPlayerMoveCol = parseInt(prompt("Which column would you like to go to?"));

            move(firstPlayerMoveRow, firstPlayerMoveCol, 'x');
            printBoard();
            idOfWinningPlayer = checkBoard();

            if (idOfWinningPlayer == 1) {
                console.log('Player 1 Wins');
                return;
            }

            let secondPlayerMoveRow = parseInt(prompt("Which row would you like to go to? "));
            let secondPlayerMoveCol = parseInt(prompt("Which column would you like to go to?"));

            move(secondPlayerMoveRow, secondPlayerMoveCol,'o');
            printBoard();
            idOfWinningPlayer = checkBoard();

            if (idOfWinningPlayer == 2) {
                console.log('Player 2 Wins');
                return;
            }
        }

        console.log(`It's a tie!`)
    }

    return {gamePlay};

})();

ticTacToe.gamePlay();
