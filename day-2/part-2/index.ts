import { difference, isReportSafe, parseReports } from '../utils';
export default function run() {
  // Get reports
  const reports = parseReports();

  // Find which are safe
  const analyzedReports = reports.map((levels) => {
    // Report is safe if:
    // level i > i+1 AND difference(level i, level i+1) <= 3 OR
    // level i < i+1 AND difference(level i, level i+1) <= 3
    // For all levels

    const isSafe = isReportSafe(levels);

    if (isSafe) {
      return true;
    } else {
      for (let i = 0; i < levels.length; i++) {
        const testLevels = [...levels.slice(0, i), ...levels.slice(i + 1)];

        const test = isReportSafe(testLevels);
        if (test) {
          return true;
        }
      }

      return false;
    }
  });

  const safeReportCount = analyzedReports.filter(
    (reportIsSafe) => reportIsSafe === true,
  ).length;

  console.log('part 2: ', { safeReportCount });
}
