const fizzBuzz = (n) => {
  const result = [];

  for (let i = 1; i <= n; i += 1) {
    let value = '';
    if (i % 3 === 0) value += 'fizz';
    if (i % 5 === 0) value += 'buzz';
    if (!value.length) {
      result.push(i);
    } else {
      result.push(value);
    }
  }
  
  return result;
};

console.log(fizzBuzz(100));
