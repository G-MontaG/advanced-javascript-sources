function generator() {
  let counter = 0;
  return () => counter++;
}

const generatedFunc = generator();

console.log(generatedFunc());
console.log(generatedFunc());
console.log(generatedFunc());
