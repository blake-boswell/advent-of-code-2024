import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function parseReports(): number[][] {
  // Read the input file
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8');

  // Split the input into rows (reports)
  const reports = input
    .split('\n')
    .map((row) => row.split(' ').map((level) => Number.parseInt(level)));
  return reports;
}

export function difference(a: number, b: number): number {
  return Math.abs(a - b);
}

export function isReportSafe(reportLevels: number[]): boolean {
  let isIncreasing = false;
  for (let i = 0; i < reportLevels.length - 1; i++) {
    const level = reportLevels[i];
    const nextLevel = reportLevels[i + 1];

    if (difference(level, nextLevel) > 3) {
      // Expected difference to be no more than 3
      return false;
    }

    if (i === 0) {
      // Determine if we will be increasing or decreasing for this report
      if (level === nextLevel) {
        // Not safe. Not increasing or decreasing
        return false;
      } else {
        isIncreasing = level < nextLevel;
      }
    }

    if (isIncreasing && level >= nextLevel) {
      // Expected level to increase, but it started to decrease/didn't change
      return false;
    } else if (!isIncreasing && level <= nextLevel) {
      // Decreasing
      // Expected level to decrease, but it started to increase/didn't change

      return false;
    }

    // Levels are safe
  }
  return true;
}
