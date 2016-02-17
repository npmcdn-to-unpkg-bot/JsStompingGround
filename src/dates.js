

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

Date.tomorrow = function() {
  const now = new Date();
  const day = now.setDate(now.getDate() + 1);
  return now;
}
// const d = new Date();
console.log(Date.tomorrow());
