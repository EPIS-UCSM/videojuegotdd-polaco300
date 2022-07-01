function movimientos(cursor, mov, salto){
    if(cursor == 'left'){
        if(mov == 'mov left' && salto == 'no'){
            return 'left';
        }
    }else if(cursor == 'right'){
        if(mov == 'mov right' && salto == 'no'){
            return 'right';
        }
    }else if(cursor == 'down'){
        if(mov == 'mov down' && salto == 'no'){
            return 'down';
        }
    }else{
        if(mov == 'mov idle' && salto == 'no'){
            return 'idle';
        }
    }

    if(cursor == 'up'){
        salto = 'si';
        if(mov == 'mov jump' && salto == 'si'){
            return 'jump';
        }
    }else{
        salto = 'no';
    }
}

module.exports = movimientos