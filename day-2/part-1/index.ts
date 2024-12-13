import { difference, isReportSafe, parseReports } from '../utils';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
export default function run() {
  // Get reports
  const reports = parseReports();

  // Find which are safe
  const analyzedReports = reports.map((levels) => {
    // Report is safe if:
    // level i > i+1 AND difference(level i, level i+1) <= 3 OR
    // level i < i+1 AND difference(level i, level i+1) <= 3
    // For all levels
    return isReportSafe(levels);
  });

  const safeReportCount = analyzedReports.filter(
    (reportIsSafe) => reportIsSafe === true,
  ).length;

  const passess = analyzedReports
    .map((reportIsSafe, i) => {
      if (reportIsSafe) {
        const report = reports[i];
        return report;
      } else {
        return undefined;
      }
    })
    .filter((val) => val !== undefined);

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  fs.writeFileSync(
    path.resolve(__dirname, './passess.json'),
    JSON.stringify(passess),
  );

  console.log('part 1: ', { safeReportCount });
}
