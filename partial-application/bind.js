// ========== BASE ================

// function add(a, b) {
//   return a + b;
// }
 
// function inc(n) {
//   return add(1, n);
// }

// ============== SAMPLE =============

let add = (a, b) => a + b;

let increment = add.bind(null, 1);
let incrementBy2 = add.bind(null, 2);

console.log('Increment 3 by 2:', incrementBy2(3));
console.log('Increment 3 by 1:', increment(3));
