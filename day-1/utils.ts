import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function formatArray<T>(arr: T[]): string {
  return `${arr.slice(0, 10).join(', ')}...${arr
    .slice(arr.length - 10, arr.length)
    .join(', ')}`;
}

export function parseLists() {
  // Read the input file
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');

  // Split the input into two lists
  const lists = input.split('\n').map((row) => row.split('   '));
  const left = lists.map((row) => Number.parseInt(row[0]));
  const right = lists.map((row) => Number.parseInt(row[1]));
  return {
    left,
    right,
  };
}
