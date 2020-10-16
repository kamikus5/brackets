module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length % 2 === 1) return false;
  
  const newArr = str.split('');
  const result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (newArr[i] === bracketsConfig[j][1] && result[result.length - 1] === bracketsConfig[j][0]) {
        result.pop();
      } else if (newArr[i] === bracketsConfig[j][0]) {
        result.push(newArr[i]);
      }
    }
  }

  return result.length === 0;
};
