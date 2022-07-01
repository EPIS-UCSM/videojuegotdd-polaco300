function colisiones(objeto, entorno, golpes = 0){
    if(objeto == 'objeto'){
        if(entorno == 'pared_izq' || entorno == 'pared_der' || entorno == 'piso'){
            return 'rebotar';
        }else if(entorno == 'virus'){
            if(golpes < 3){
                return 'reducir vida';
            }else{
                return 'game over';
            }
        }else{
            puntos = 0;
            for (let i = 0; i < entorno; i++) {
                puntos = puntos + 10;
            }
            return puntos;
        }
    }else if(objeto == 'virus'){
        if(entorno == 'pared_izq' || entorno == 'pared_der' || entorno == 'piso'){
            return 'rebotar';
        }else if(entorno == 'virus'){
            return 'sin accion';
        }
    }
}

module.exports = colisiones