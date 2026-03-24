// Random utility functions for fun
function getRandomNumber(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Random greeting generator
const greetings = ['Hello', 'Hi', 'Hey', 'Howdy', 'Greetings'];
function getRandomGreeting(name) {
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  return `${greeting}, ${name}!`;
}

// Generate a random color
function getRandomColor() {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Quick sum function
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);

console.log('Random code loaded!');
console.log('Random greeting:', getRandomGreeting('User'));
console.log('Random number:', getRandomNumber(1, 50));
console.log('Sum example:', sum(10, 20, 30, 40));
