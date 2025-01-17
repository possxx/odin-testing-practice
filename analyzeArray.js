export default function analyzeArray(arr) {
  const arithmeticMean =
    arr.reduce((prev, curr) => {
      return prev + curr;
    }) / arr.length;

  const min = arr.reduce((prev, curr) => {
    return curr < prev ? curr : prev;
  });

  const max = arr.reduce((prev, curr) => {
    return curr > prev ? curr : prev;
  });

  const length = arr.length;

  return { arithmeticMean, min, max, length };
}
