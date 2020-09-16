/* Exercie 4 */

const mot = 'eye'
const motus = mot.split(' ')
const imot = motus.reverse()
const motusj = imot.join(' ')

function palindrome(mot) {
    if (mot==motusj)
        console.log("c'est un palindrome")
    else
        console.log("Ce n'est pas un palindrome")
}
palindrome(mot)
