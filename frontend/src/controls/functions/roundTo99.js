export function roundTo99(number) {
  const roundedNumber = Math.floor(parseInt(number)) + 0.99;
  return Number(roundedNumber.toFixed(2));
}
