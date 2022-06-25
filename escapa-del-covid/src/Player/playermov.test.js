const player = require("./playermov");

test('movimiento izquierda', () => {
    expect(player('left','mov left','no')).toBe('left');
})

test('movimiento derecha', () => {
    expect(player('right','mov right','no')).toBe('right');
})

test('movimiento abajo', () => {
    expect(player('down','mov down','no')).toBe('down');
})

test('player esta quieto', () => {
    expect(player('idle','mov idle','no')).toBe('idle');
})

test('player realiza un salto', () => {
    expect(player('up','mov jump','no')).toBe('jump');
})