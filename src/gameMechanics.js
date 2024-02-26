module.exports = GameBoard;

function Player(name, gamePiece) {
    return {name, gamePiece};
};

function GameBoard(DIM = 3) {

    function makeArrayBoard() {
        const board = Array(DIM)
            .fill(Array(DIM)
            .fill([undefined]));
            
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

    return {board, isValidPosition, tic}
}