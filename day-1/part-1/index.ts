import { parseLists } from '../utils';

export default function run() {
  // Read the input file
  const { left, right } = parseLists();

  // Sort both lists
  const sortedLeft = left.sort();
  const sortedRight = right.sort();

  // Debug
  // console.log({
  //   sortedLeft: formatArray(sortedLeft),
  //   sortedRight: formatArray(sortedRight),
  // });

  // Pair up the smallest number in the left list with the smallest number in the right list, then the second-smallest left number with the second-smallest right number, and so on.
  const pairs: [number, number][] = [];
  for (let i = 0; i < sortedLeft.length; i++) {
    pairs.push([sortedLeft[i], sortedRight[i]]);
  }

  // Debug
  // console.log(formatArray(pairs));

  // Within each pair, figure out how far apart the two numbers are; you'll need to add up all of those distances.
  const distances = pairs.map((pair) => Math.abs(pair[0] - pair[1]));

  // Find the total distance between the left list and the right list
  const result = distances.reduce((total, distance) => total + distance, 0);
  console.log({ result });
}
