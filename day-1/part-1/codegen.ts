import * as fs from 'fs';

// Read the input file
const input = fs.readFileSync('input.txt', 'utf8');

// Split the input into two lists
const [left, right] = input
  .split('\n')
  .map((line) => line.split(' ').map(Number));

// Sort both lists
const sortedLeft = left.sort((a, b) => a - b);
const sortedRight = right.sort((a, b) => a - b);

// Pair up the smallest number in the left list with the smallest number in the right list, then the second-smallest left number with the second-smallest right number, and so on.
const pairs = sortedLeft.map((num, index) => [num, sortedRight[index]]);

// Within each pair, figure out how far apart the two numbers are; you'll need to add up all of those distances.
const distances = pairs.map(([leftNum, rightNum]) =>
  Math.abs(leftNum - rightNum),
);

// Find the total distance between the left list and the right list
const totalDistance = distances.reduce((sum, distance) => sum + distance, 0);

console.log(totalDistance);
