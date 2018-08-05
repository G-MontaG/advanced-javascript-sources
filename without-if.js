// =========== WEEKEND SAMPLE =============

// const weekendOrWeekday = (inputDate) => {
//   const day = inputDate.getDay();
//   if (day === 0 || day === 6) {
//     return 'weekend';
//   } 
  
//   return 'weekday';
// };
// console.log(weekendOrWeekday(new Date()));

// const weekendOrWeekday = (inputDate) => {
//   const day = inputDate.getDay();
//   return weekendOrWeekday.labels[day] || 
//          weekendOrWeekday.labels['default'];
// };

// weekendOrWeekday.labels = { 
//   0: 'weekend', 
//   6: 'weekend', 
//   default: 'weekday' 
// };
// console.log(weekendOrWeekday(new Date()));

// =========== DOUBLER SAMPLE =============

// const doubler = (input) => {
//   switch (typeof input) {
//     case 'number':
//       return input + input;
//     case 'string':
//       return input
//         .split('')
//         .map((letter) => letter + letter)
//         .join('');
//     case 'object':
//       Object.keys(input)
//             .map((key) => (input[key] = doubler(input[key])));
//       return input;
//     case 'function':
//       input();
//       input();
//   }
// };
// console.log(doubler(-10));
// console.log(doubler('hey'));
// console.log(doubler([5, 'hello']));
// console.log(doubler({ a: 5, b: 'hello' }));
// console.log(
//   doubler(function() {
//     console.log('call-me');
//   }),
// );

// const doubler = (input) => {
//   return doubler.operationsByType[typeof input](input);
// };
// doubler.operationsByType = {
//   number: (input) => input + input,
//   string: (input) =>
//     input
//       .split('')
//       .map((letter) => letter + letter)
//       .join(''),
//   function: (input) => {
//     input();
//     input();
//   },
//   object: (input) => {
//     Object.keys(input)
//           .map((key) => (input[key] = doubler(input[key])));
//     return input;
//   },
// };
// console.log(doubler(-10));
// console.log(doubler('hey'));
// console.log(doubler([5, 'hello']));
// console.log(doubler({ a: 5, b: 'hello' }));
// console.log(
//   doubler(function() {
//     console.log('call-me');
//   }),
// );

