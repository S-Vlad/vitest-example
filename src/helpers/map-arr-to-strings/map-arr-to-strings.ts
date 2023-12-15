export const mapArrToStrings = <T>(arr: T[]): string[] => {
  return arr.filter((item) => Number.isInteger(item)).map(String);
};
