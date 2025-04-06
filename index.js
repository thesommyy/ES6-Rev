// index.js

import { Person, loadSomething, loadMultiple, colors } from './tools.js';

// CLASS test
const user = new Person("Daniella", 18);
console.log(user.intro());

// PROMISE test
loadSomething("Your code").then(msg => {
  console.log("Promise:", msg);
});

// ASYNC test
const tasks = ["File A", "File B"];
loadMultiple(tasks).then(res => {
  console.log("Async Results:");
  res.forEach(r => console.log(r));
});

// MAP test
console.log("Color Codes:");
for (let [key, value] of colors) {
  console.log(`${key} => ${value}`);
}

