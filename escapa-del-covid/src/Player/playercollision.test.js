const collision = require("./playercollision");

test('colision con paredes y piso', () => {
    expect(collision('objeto','pared_izq')).toBe('rebotar');
    expect(collision('objeto','pared_der')).toBe('rebotar');
    expect(collision('objeto','piso')).toBe('rebotar');
})

test('colision con objetos enemigos', () => {
    expect(collision('objeto','virus', 1)).toBe('reducir vida');
})

test('colision de objetos enemigos con el entorno', () => {
    expect(collision('virus','pared_izq')).toBe('rebotar');
    expect(collision('virus','pared_der')).toBe('rebotar');
    expect(collision('virus','piso')).toBe('rebotar');
})

test('colision de player con cruz roja', () => {
    expect(collision('objeto',1)).toBe(10);
    expect(collision('objeto',2)).toBe(20);
    expect(collision('objeto',3)).toBe(30);
})

test('colision 3 veces con objetos enemigos', () => {
    expect(collision('objeto','virus', 3)).toBe('game over');
})