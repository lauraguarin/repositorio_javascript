
var año = Math.round(Math.random() * 2060)
console.log(+año)
var A = año % 19
var B = año % 4
var C = año % 7
var D = (19 * A + 24) % 30
var E = (2 * B + 4 * C + 6 * D + 5) % 7
var N = (22 + D + E)
var mes = N
var mn = 0

if (mes > 31) {
    mes = (N - 31)
    console.log('Fecha ingresada fue', +mes, 'de Abril y es domingo de pascua')
} else {
    console.log('Fecha ingresada fue', +mes, 'de Marzo y es domingo de pascua')

}