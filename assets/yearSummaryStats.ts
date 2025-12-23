// assets/yearSummaryStats.ts
export const yearSummaryStats = import.meta.glob(
  './year_summary_*.svg',
  { import: 'ReactComponent' }
);
