// tools.js

// CLASS – just a basic person
export class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    intro() {
      return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
  }
  
  // PROMISE – pretend something takes time (like fetching)
  export function loadSomething(item) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${item} is active!`);
      }, 1000);
    });
  }
  
  // ASYNC – using the promise above
  export async function loadMultiple(items) {
    let results = [];
    for (let item of items) {
      const result = await loadSomething(item);
      results.push(result);
    }
    return results;
  }
  
  // MAP 
  export const colors = new Map();
  colors.set("red", "#FF0000");
  colors.set("green", "#00FF00");
  colors.set("blue", "#0000FF");
  