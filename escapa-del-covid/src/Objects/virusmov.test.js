const virus = require("./movimientoVirus");

test('velocidad virus', () => {
    expect(virus(0)).toBe('positivo');
    expect(virus(1)).toBe('positivo');
    expect(virus(-1)).toBe('negativo');
})