export function addLeadingZero(number: number): string {
  return number > 0 && number < 10 ? "0" + number : number.toString();
}
