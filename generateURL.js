function generateURL () {
  const randomStrings = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  const arr = []
  const arr2 = arr.concat(randomStrings.split(''))
  let result = ''

  for (i = 0; i < 5; i++){
    let index = Math.floor(Math.random() * randomStrings.length)
    result += arr2[index]
  }

  return result
}

console.log(generateURL())

module.exports = generateURL