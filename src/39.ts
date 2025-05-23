function calculateArea(shape: string, dimensions): number {
  if (shape === "circle") {
    return Math.PI * Math.pow(dimensions, 2);
  } else if (shape === "rectangle") {
    return dimensions[0] * dimensions[1];
  } else if (shape === "triangle") {
    return 0.5 * dimensions[0] * dimensions[1];
  }
}

function findMaxValue(numbers: number[]): number {
  let maxValue = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
      maxValue = numbers[i];
    }
  }
  return maxValue;
}
