"use strict";
const makeError = () => {
  try {
    const name = "Dave";
    name = "Joe";
  } catch (err) {
    console.error(err);
    // warn,table
  }
};
makeError();

const makeError2 = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("Odd number!");
      }
      console.log("Even number!");
    } catch (err) {
      console.error(err.stack);
    } finally {
      console.log("...finally.");
      i++;
    }
  }
};
makeError2();

function customError(message) {
  this.message = message;
  this.name = "customError";
  this.stack = `${this.name}: ${this.message}`;
}
