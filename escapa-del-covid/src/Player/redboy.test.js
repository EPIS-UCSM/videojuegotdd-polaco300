var redboy = require('./virusCollision');
// import RedBoy from "../Player/RedBoy";

test("jugador se queda sin vidas", () => {          
    expect(redboy(0, false)).toBe('game over');    
});

test("jugador pierde una vidas", () => {          
    expect(redboy(1, false)).toBe('remove life');    
});

test("jugador pierde dos vidas", () => {          
    expect(redboy(2, false)).toBe('remove life');    
});