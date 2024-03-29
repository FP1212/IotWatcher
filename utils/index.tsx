import cardGenerator from "./cardGenerator";

const numberScale = (
  unscaledNumber: number,
  minAllowed: number,
  maxAllowed: number,
  min: number,
  max: number
): number => {
  return (
    ((maxAllowed - minAllowed) * (unscaledNumber - min)) / (max - min) +
    minAllowed
  );
};

export { cardGenerator, numberScale };
