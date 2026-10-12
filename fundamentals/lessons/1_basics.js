// ============================================================
// Lesson 1: Values, Types, Functions, and if
// Run with: node fundamentals/lessons/1_basics.js
// ============================================================

// --- Values ---
// A value is a piece of data the program can use.
// Give it a name with const (won't change) or let (can change).

const greeting = "hello";
let score = 10;
score = 11;

console.log(greeting, score);

// --- Types ---
// Every value has a type — what kind of data it is.
// Common types:
//   string  → text in quotes
//   number  → integers or decimals
//   boolean → true or false
//   undefined → declared but not given a value yet
//   null    → intentionally empty

const name = "Ada"; // string
const age = 36; // number
const isStudent = false; // boolean
let nickname; // undefined
const empty = null; // null

console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof nickname); // "undefined"
console.log(typeof empty); // "object" (a known JS quirk; the value is still null)

// --- Functions ---
// A function is a reusable block of code.
// Inputs are parameters; the result comes from return.

function add(a, b) {
  return a + b;
}

const total = add(2, 3);
console.log(total); // 5

// Arrow function — same idea, shorter syntax
const greet = (person) => {
  return "Hi, " + person;
};

console.log(greet("Ada")); // "Hi, Ada"

// --- if ---
// if runs a block of code only when a condition is true.
// else runs when the condition is false.
// else if checks another condition.

const temperature = 18;

if (temperature >= 25) {
  console.log("It's warm");
} else if (temperature >= 15) {
  console.log("It's mild"); // this runs
} else {
  console.log("It's cold");
}

function labelScore(points) {
  if (points >= 50) {
    return "pass";
  }
  return "fail";
}

console.log(labelScore(72)); // "pass"
console.log(labelScore(40)); // "fail"
