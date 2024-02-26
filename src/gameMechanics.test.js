const GameBoard = require('./gameMechanics.js');
const board = GameBoard().board;
    console.log(board);

test('make a board', () => {
    const board = GameBoard().board;
    console.log(board);
    expect(board).toStrictEqual(
        [['','',''],
        ['','',''],
        ['','','']])
})

test('check positions are validated', () => {
    const check1 = GameBoard().isValidPosition([0,0]);
    const check2 = GameBoard().isValidPosition([2,2]);
    const check3 = GameBoard().isValidPosition([4,2]);
    const check4 = GameBoard().isValidPosition([1,4]);
    expect(check1).toBe(true);
    expect(check2).toBe(true);
    expect(check3).toBe(false);
    expect(check4).toBe(false);
})

test('check if tic works', () => {
    const board = GameBoard();
    const check1 = board.tic([0,0],'x');
    const check2 = board.tic([0,1],'x');
    const check3 = board.tic([0,0],'x');
    const check4 = board.tic([3,3],'x');
    expect(check1).toBe(true);
    expect(check2).toBe(true);
    expect(check3).toBe(false);
    expect(check4).toBe(false);
})

test('check for wins', () => {
    const board1 = GameBoard();
    board1.tic([0,0],'x');
    board1.tic([0,1],'x');
    board1.tic([0,2],'x');
    const check1 = board1.checkForWin('x');
    expect(check1).toBe(true)

    const board2 = GameBoard();
    board2.tic([0,1],'x');
    board2.tic([1,1],'x');
    board2.tic([2,1],'x');
    const check2 = board2.checkForWin('x');
    expect(check2).toBe(true);

    const board3 = GameBoard();
    const check3 = board3.checkForWin('x')
    expect(check3).toBe(false);
    
    const board4 = GameBoard();
    board4.tic([0,2],'x');
    board4.tic([1,1],'x');
    board4.tic([2,0],'x');
    const check4 = board4.checkForWin('x');
    expect(check4).toBe(true);

    const board5 = GameBoard();
    board5.tic([0,2],'x');
    board5.tic([1,1],'o');
    board5.tic([2,0],'x');
    const check5 = board5.checkForWin('x');
    expect(check5).toBe(false);
})
