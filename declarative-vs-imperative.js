// ============= IMPERATIVE ============

const doubleMap = numbers => {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
};

console.log(doubleMap([2, 3, 4]));

// ============= DECLARATIVE ================

// const doubleMap = numbers => numbers.map(n => n * 2);

// console.log(doubleMap([2, 3, 4]));
