const openBrackets = ['(', '['];
const bracketsPair = {
  [')']: '(',
  [']']: '[',
};

module.exports = function check(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let lastElement = stack[stack.length - 1];

      if (bracketsPair[currentSymbol] === lastElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
}
