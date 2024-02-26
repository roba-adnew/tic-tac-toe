module.exports = GameBoard;

function Player(name, gamePiece) {
    return {name, gamePiece};
};

function GameBoard(DIM = 3) {

    function makeArrayBoard() {
        const board = Array(DIM)
            .fill()
            .map(() => {return Array(DIM).fill('')});
            
        return board
    }

    function isValidPosition(position) {
        const [x, y] = position;
        if (x < 0 || x > 2 || y < 0 || y > 2) return false;
        return true;
    }

    function tic(position, gamePiece) {
        if (!isValidPosition(position)) return false;
        
        const [x,y] = position;
        if (board[x][y]) return false;

        board[x][y] = gamePiece;
        return true;
    }

    function checkForWin(gamePiece) {
        const horizontalWin = board.some(
            (row) => {return row.every((value) => value === gamePiece)}
        );

        if (horizontalWin) return true;

        const vertCombos = [];
        for (let i = 0; i < DIM; i++) {
            vertCombos.push([]);
            for (let j = 0; j < DIM; j++) {
                vertCombos[i].push(board[j][i])
            }
            const vertWin = vertCombos[i]
                .every((value) => value === gamePiece);
            if (vertWin) return true;
        }

        const diagCombos = [[board[0][0], board[1][1], board[2][2]],
                             [board[0][2], board[1][1], board[2][0]]]
        
        const diagWin = diagCombos.some(
        (row) => {return row.every((value) => value === gamePiece)});
        if (diagWin) return true;

        return false;
    }

    const checkBoard = (gamePiece) => {
   
        const waysToWin = createWaysToWin();
        playerSpots = [];

        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) {
                if (board[i][j] == gamePiece) {
                    playerSpots.push([i,j]);
                }
            }
        }

        return false;
    }

    const board = makeArrayBoard();

    return {board, isValidPosition, tic, checkForWin}
}