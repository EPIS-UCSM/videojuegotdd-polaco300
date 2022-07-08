const player = require("./movimientosRedBoy");

test('movimiento izquierda', () => {
    expect(player('left', false)).toBe('left');
})

test('movimiento derecha', () => {
    expect(player('right', false)).toBe('right');
})

test('movimiento abajo', () => {
    expect(player('down', false)).toBe('down');
})

test('player esta quieto', () => {
    expect(player('object_idle', false)).toBe('object_idle');
})

test('player realiza un salto', () => {
    expect(player('jump',true)).toBe('jump');
})