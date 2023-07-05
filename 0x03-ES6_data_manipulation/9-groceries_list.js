export default function groceriesList() {
  const newMap = new Map();
  const groceries = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Bananas: 5,
  };
  // get all keys in the object in an array 
  const groceriesEntries = Array.from(Object.keys(groceries));

  groceriesEntries.map((entry) => newMap.set(entry, groceries[entry]));
  return newMap;
}
