export default function createIteratorObject(report) {
  const newReport = [];
  for (const item of Object.values(report.allEmployees)) {
    newReport.push(...item);
  }
  return newReport;
}