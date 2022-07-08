function movimientosRedBoy(mov, salto){
    // if(mov){
        if(mov == 'left' && !salto) {
            return 'left'
        }else if(mov == 'right' && !salto){
            return 'right'
        }else if(mov == 'down' && !salto){
            return 'down'
        }else if(mov == 'jump' && salto){
            return 'jump'
        }else{
            return 'object_idle'
        }
    // }
}

module.exports = movimientosRedBoy