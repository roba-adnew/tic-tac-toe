export function Player(name, gamePiece) {
    return {name, gamePiece};
};

export function GameBoard(DIM = 3) {

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

    function computerTic(gamePiece) {
        if (!isValidPosition(position)) return false;
        
        let x,y;
        let move;
        let isMoveGood = false;

        do {
            [x,y] = Array
                .from({length: 2}, () => Math.round(Math.random() * (DIM - 1)));
            
            if (board[x][y]) continue;
            isMoveGood = true;
        }
        while (!isMoveGood)
        
        return move;
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

    const board = makeArrayBoard();

    return {
            board, 
            isValidPosition, 
            tic, 
            computerTic,
            checkForWin
            }
}