function generator() {
  return num => num * 2;
}

const generatedFunc = generator();

console.log(generatedFunc(4));
