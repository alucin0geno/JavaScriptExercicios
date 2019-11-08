const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // arredonda para 2 casas decimais
console.log(media.toString(2)) // em base 2
console.log(media.toString(8)) // em base 8
console.log(media.toString(16)) // em base 16

// Alguns cuidados!

console.log(7 / 0)
console.log("10.2" / 2)
console.log("show!" * 2)
console.log(0.1 + 0.7)
console.log((0.1 + 0.7).toFixed(1))
console.log((10).toString(2))
// console.log(10.toString(2)) -> erro!