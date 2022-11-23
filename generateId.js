const idList = []

function generateId () {
  const randomStrings = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  const temp = []
  const ArrayofRandomStrings = temp.concat(randomStrings.split(''))
  let result = ''

  for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * randomStrings.length)
    result += ArrayofRandomStrings[index]
  }
  if (idList.includes(result)) {
    generateId()
  } else {
    idList.push(result)
  }
  return result
}

module.exports = generateId
