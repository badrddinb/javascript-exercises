const reverseString = function(randomString) {
    let arrayString = randomString.split('')
    arrayString = arrayString.reverse()
    return arrayString.join('')
}

reverseString('hello')
reverseString('hello there')
reverseString('123! abc!')
reverseString('')

module.exports = reverseString
