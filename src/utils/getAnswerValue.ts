export const getAnswerValue = (obj: Object) =>
  Object.entries(obj).filter(([_, v]) => v != null)[0]?.[1] ?? null;
