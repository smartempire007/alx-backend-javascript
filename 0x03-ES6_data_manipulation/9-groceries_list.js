export default function groceriesList() {
  const newMap = new Map();
  const groceries = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Bananas: 5,
  };
  const groceriesEntries = Object.entries(groceries);

  groceriesEntries.map((entry) => newMap.set(entry, groceries[entry]));
}
