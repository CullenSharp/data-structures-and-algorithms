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

console.log('\n', '\\\\  🧪🔬 testing here 🧪🔬  //', '\n');

console.log('\n', '-- test 1 --', '\n', 'case: []', '\n', 'expect: true', '\n');
// expect true
try{
  console.log(validateBrackets('[]'));
} catch(e) {
  console.log(e);
}

console.log('\n', '-- test 2 --', '\n', 'case: [{()}]', '\n', 'expect: true', '\n');
//expect true
try{
  console.log(validateBrackets('[{()}]'));
} catch(e) {
  console.log(e);
}

console.log('\n', '-- test 3 --', '\n', 'case: [][', '\n', 'expect: false', '\n');
//expect false
try{
  console.log(validateBrackets('[]['));
} catch(e) {
  console.log(e);
}

console.log('\n', '-- test 3 --', '\n', 'case: \'\'', '\n', 'expect: true', '\n');
// expect true
try{
  console.log(validateBrackets(''));
} catch(e) {
  console.log(e);
}
