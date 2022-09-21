/*Hacer 2 promesas en base al ejercicio y generar ,al 10 % de la poblacion final se le entrega la casa
y se le caldulaba la cantidad de personas generando asi la misma cantidad,y tener settimeout con el tiempo
de 5 segundos,luego de esto se debe calcular el crecimiento neto de la poblacion inicial y final,con el retraso de 5 segundos */
var  numeropoblacion = Math.round(Math.random(10000-1000)+1000)
console.log('El numero de la poblacion inicial es:'+numeropoblacion)

for (let tiempo = 0; tiempo < 10; tiempo++) {
    var nacimientos= Math.round(Math.random()*numeropoblacion*10)/100
    console.log ('Los nacimientos son: '+ nacimientos)
    var muerte= Math.round(Math.random()*numeropoblacion*3)/100
    console.log ('Las muertes son: '+ muerte)
    var r = (nacimientos-muerte)/numeropoblacion
    console.log('El crecimiento  es:'+ r)
    var algebraica = numeropoblacion*(1+r)**tiempo
    console.log('El numero de la poblacion es : '+ algebraica,'\n')
}

function primerpunto(algebraica) {
    return new Promise ((resolve,reject)=>{
setTimeout(() => {
    algebraica=(algebraica*10)/100
    resolve()
    console.log('El numero de la poblacion inicial es:'+numeropoblacion)
    console.log('el porcentaje de de la poblacion final es:',algebraica)
},5000);

    })
}
primerpunto(algebraica)

function segundopunto() {
return new Promise ((resolve,reject)=>{
    setTimeout(() => {
        var valorneto=(algebraica*100)/numeropoblacion
        valorneto= valorneto-100
        resolve()
        console.log('el valor neto seria de:',valorneto)
    },5000);
})
}
segundopunto()