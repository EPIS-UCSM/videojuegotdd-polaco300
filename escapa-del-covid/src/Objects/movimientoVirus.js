function movimientosVirus(vel){
    if(vel < 0) {
        return 'negativo'
    }else{
        return 'positivo'
    }
}

module.exports = movimientosVirus