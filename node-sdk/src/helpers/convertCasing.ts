export default function convertCasing(obj: object | undefined) {
  if (!obj) return {};

  return Object.entries(obj).reduce(
    (reducer, [k, v]) => ({
      ...reducer,
      [k.replace(/[A-Z]/g, (char) => `_${char.toLowerCase()}`)]: v,
    }),
    {}
  );
}
