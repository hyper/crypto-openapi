export default function convertCasing(obj: object | undefined) {
  if (!obj) return {};

  return Object.entries(obj).map(([k, v]) => {
    const castObj: any = {};
    castObj[k.replace(/[A-Z]/g, (char: string) => `_${char.toLowerCase()}`)] = v;
    return castObj;
  });
}
