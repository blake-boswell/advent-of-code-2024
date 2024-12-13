import { readInput } from '../utils';

export default function run() {
  const input = readInput();
  // Match mul(x,y), where x & y are numbers with 1-3 digits
  const mulRegex = /mul\(\d{1,3},\d{1,3}\)/gm;
  const matches = input.matchAll(mulRegex);

  const sum = Array.from(matches)
    .map((match) => match[0])
    .reduce((total, instruction) => {
      const parts = Array.from(instruction.matchAll(/\d{1,3}/gm)).map(
        (matchArr) => matchArr[0],
      );
      const [multiplicandString, multiplierString] = parts;
      if (multiplicandString && multiplierString) {
        const multiplicand = Number.parseInt(multiplicandString);
        const multiplier = Number.parseInt(multiplierString);
        return total + multiplicand * multiplier;
      } else {
        console.error('Failed to get matches: ', { parts });
        return total;
      }
    }, 0);
  console.log(Array.from(matches).map((match) => match[0]));
  console.log('Sum: ', sum);
}
