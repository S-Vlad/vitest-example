export const sum = (...args: number[]) => {
  return args.reduce((sum, arg) => sum + arg, 0);
};
