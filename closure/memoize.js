function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

const fibonacciMemo = (function() {
  const memo = {};

  function func(num) {
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
  
    return memo[num] = func(num - 1, memo) + func(num - 2, memo);
  }

  return func;
})();

console.log(fibonacciMemo(45));
