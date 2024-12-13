import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function readInput(): string {
  // Read the input file
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');

  return input;
}
