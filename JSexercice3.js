/* Exercie 3 */

const numbers = [1, 2, 4, 8, 16, 23, 32, 64, 128, 154]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%2 == 0)
    console.log('le nombre n°', i, ' est pair')
    else
    console.log('le nombre n°', i, ' est impair')
}