const GameBoard = require('./gameMechanics.js');

test('make a board', () => {
    const board = GameBoard().board;
    expect(board).toStrictEqual(
        [[[undefined],[undefined],[undefined]],
        [[undefined],[undefined],[undefined]],
        [[undefined],[undefined],[undefined]]])
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

// test('check is tic works', () => {
//     const 
// })

