'use strict';

function validateBrackets(str) {
  let brackets = '[]{}()';
  let stack = [];

  for(let bracket of str) {
    let bracketsIndex = brackets.indexOf(bracket);

    if(bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1);
    } else {
      if(stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// expect true
try{
  validateBrackets('[]');
} catch(e) {
  console.log(e);
}

//expect true
try{
  validateBrackets('[{()}]');
} catch(e) {
  console.log(e);
}

//expect false
try{
  validateBrackets('[][');
} catch(e) {
  console.log(e);
}
