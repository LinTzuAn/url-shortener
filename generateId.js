function generateId () {
  const randomStrings = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  const temp = []
  const ArrayofRandomStrings = temp.concat(randomStrings.split(''))
  let result = ''

  for (i = 0; i < 5; i++){
    let index = Math.floor(Math.random() * randomStrings.length)
    result += ArrayofRandomStrings[index]
  }

  return result
}

module.exports = generateId