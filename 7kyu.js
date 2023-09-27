// 7 kyu
// Find the capitals

// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing 
// the indexes of all capital letters in the string.




var capitals = function (word) {
  let capitalsIndex = []
	for (let i = 0; i < word.length; i++) {
    if (word.split('')[i] === word.split('')[i].toUpperCase()) {
      capitalsIndex.push(i)
    }
  }
  return capitalsIndex
};