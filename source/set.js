// Implement Set class based on freecodecamp.org tasks

class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.values(this.dictionary);
  }

  add(element) {
    let completedSuccessfully = false;
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length += 1;
      completedSuccessfully = true;
    }

    return completedSuccessfully;
  }

  remove(element) {
    let completedSuccessfully = false;
    if (this.has(element)) {
      completedSuccessfully = delete this.dictionary[element];
      this.length -= 1;
    }

    return completedSuccessfully;
  }

  size() {
    return this.length;
  }

  union(setB) {
    const newSet = new Set();
    const addElementToSet = (element) => newSet.add(element);
    this.values().forEach(addElementToSet);
    setB.values().forEach(addElementToSet);

    return newSet;
  }

  intersection(setB) {
    const newSet = new Set();
    this.values().forEach((element) => {
      if (setB.has(element)) {
        newSet.add(element);
      }
    });

    return newSet;
  }

  difference(setB) {
    const newSet = new Set();
    this.values().forEach((element) => {
      if (!setB.has(element)) {
        newSet.add(element);
      }
    });

    return newSet;
  }

  isSubsetOf(setB) {
    return this.values().every((element) => setB.has(element));
  }
}

export default Set;
