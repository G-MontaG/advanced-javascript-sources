// ============ FACTORIAL ==========

function factorial(x) {
  if (x < 0) return;
  if (x === 0) return 1;
  return x * factorial(x - 1);
}

console.log(factorial(3));

// ============ REVERCE STRING ==========

function revStr(str){
  if (str === '') return '';
  return revStr(str.substr(1)) + str[0];
}

console.log(revStr('cat'));
