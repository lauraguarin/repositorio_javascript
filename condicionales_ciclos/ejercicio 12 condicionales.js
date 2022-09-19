
var h = Math.round(Math.random() * 24)
var m = Math.round(Math.random() * 60)
var s = Math.round(Math.random() * 60)
console.log(+h, ':', +m, ':', +s)
s = s + 1
if (s > 59) {
    s = 0
    m = m + 1
    if (m > 59) {
        m = 0
        h = h + 1
        if (h > 23) {
            h = 0
        }
    }

    if (m > 60) {
        m = 0
    }

    if (h > 24) {
        h = 0
    }


}
console.log('La hora en un segundo despues sera: ', +h, ':', +m, ':', +s)
