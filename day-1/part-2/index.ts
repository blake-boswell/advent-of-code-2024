import { parseLists } from '../utils';

export default function run() {
  // Read the input file
  const { left, right } = parseLists();

  // Get similarity score
  const rightFrequencies = createFrequencyLookup(right);

  const score = left.reduce((sum, leftNumber) => {
    const rightFrequency = rightFrequencies.get(leftNumber) ?? 0;
    return sum + leftNumber * rightFrequency;
  }, 0);

  console.log({ score });
}

// Find the number of times a number exists in the array
function createFrequencyLookup(arr: number[]): Map<number, number> {
  // Sort the array
  const sorted = [...arr].sort();

  const lookup = new Map<number, number>();
  sorted.forEach((number) => {
    const count = lookup.get(number);
    if (count !== undefined) {
      lookup.set(number, count + 1);
    } else {
      lookup.set(number, 1);
    }
  });

  return lookup;
}
