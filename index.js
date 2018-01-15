// level 0
var a = 1
var b = 2

if (a > b) {
  console.log('hancor deh')
} else {
  console.log('b lebih besar dari a')
}

// level 1
if (a > b) {
  console.log('hancor deh')
} else if (a === b) {
  console.log('hahaha');
} else {
  console.log('b lebih besar dari a')
}

// level 2
(a > b) ? console.log('hancor deh'): console.log('hahaha')

// level 3
var baterai = 70

if (baterai > 50 && baterai < 100) {
  console.log('Nanti saja charge HP')
} else {
  console.log('Siapkan charger anda')
}

// level 4
function hitung(x, y) {
  return x + y
}

console.log(hitung(10, 20))