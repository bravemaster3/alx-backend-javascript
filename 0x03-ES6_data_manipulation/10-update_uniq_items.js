export default function updateUniqueItems(myMap) {
  if (!(myMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  return (
    myMap.forEach((value, key, map) => {
      if (value === 1) {
        map.set(key, 100);
      }
    })
  );
}
