// Given a string, return a new string with the reversed
// order of characters

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev ,'')
}

console.log(reverse('briela'));