class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.comparator = (left, right) => left - right;
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    let arraySorted = [];

    indices.forEach(element => {
      arraySorted.push(this.array[element]);
    });

    arraySorted.sort(this.comparator);
    indices.sort((left, right) => left - right);

    indices.forEach((element, j) => {
      this.array[element] = arraySorted[j];
    });
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;