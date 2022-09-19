
var d1 = Math.round(Math.random() * 31)
var m1 = Math.round(Math.random() * 12)
var a1 = Math.round(Math.random() * 2050)
console.log(+d1, '/', +m1, '/', +a1)

var d2 = Math.round(Math.random() * 31)
var m2 = Math.round(Math.random() * 12)
var a2 = Math.round(Math.random() * 2050)
console.log(+d2, '/', +m2, '/', +a2)
if (a2 > a1) {
    p = (a2 - a1)
    console.log('Desde el año', +a1, 'han pasado', +p)
}
if (a2 < a1) {
    p = (a1 - a2)
    console.log('faltan', +p, 'años')
}