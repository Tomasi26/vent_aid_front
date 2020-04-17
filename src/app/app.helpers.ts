export function getEnumKeyByEnumValue(myEnum, enumValue) {
  const keys = Object.keys(myEnum).filter(x => myEnum[x] === enumValue);
  return keys.length > 0 ? keys[0] : null;
}

export function getEnumValueByEnumKey(myEnum, enumKey) {
  const keys = Object.keys(myEnum).filter(x => x === enumKey);
  return keys.length > 0 ? keys[0] : null;
}
