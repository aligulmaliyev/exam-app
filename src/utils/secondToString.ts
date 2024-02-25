export const secondToString = (time: number) => {
  let hour = Math.floor(time / 3600);
  let minute = Math.floor((time - 3600 * hour) / 60);
  let second = Math.floor(time - 3600 * hour - minute * 60);
  return toFormat(hour) + ":" + toFormat(minute) + ":" + toFormat(second);
};

const toFormat = (n: number) => {
  return n < 10 ? `0${n}` : `${n}`;
};
