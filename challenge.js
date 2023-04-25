function balancedBrackets(string) {
  // your code here
  const stack = [];
  const pairs = {
    '[':']',
    '{':'}',
    '(':')',
  };
  for(let i = 0; i < string.length; i++){
    const char = string[i];
    if (char in pairs) {
      stack.push(char);
    } else if (Object.values(pairs).includes(char)){
      const lastOpen = stack.pop();
      if (pairs[lastOpen] !== char) 
        return false;
      }
    }
  
  return stack.length === 0;
}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
