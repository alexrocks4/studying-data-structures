/**
* Dynamic array implementation based on static Int32Array Typed arrays.
* Dynamic array has length and Capacity.
* Capacity - static array length up to which dynamic array can be extended
* without resizing and reallocation.
* length - dynamic array length that user can access. length should be less than
* capaity.
* If length becomes greater than capacity - its time to resizing static array and reallocation.
*/

const ARRAY_ELEMENT_SIZE_IN_BYTES = 4;
const scale = 2; // In how many times to increase array after exhaustion

class DynamicInt32Array {
  #capacity = 0;

  #array = new Int32Array();

  #resizeArray(newLength) {
    this.#capacity = newLength * scale;
    const buffer = new ArrayBuffer(this.#capacity * ARRAY_ELEMENT_SIZE_IN_BYTES);
    const newArray = new Int32Array(buffer);
    // Slice array for the case if we are decreasing array size
    newArray.set(this.#array.slice(0, newLength));
    this.#array = newArray;
  }

  #resetArray() {
    this.#capacity = 0;
    this.#array = new Int32Array();
  }

  constructor() {
    this.length = 0; // User can access length of array
  }

  push(element) {
    this.length += 1;

    if (this.length > this.#capacity) {
      this.#resizeArray(this.length);
    }

    this.#array[this.length - 1] = element;

    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  isValidIndex(index) {
    return index >= 0 && index < this.length;
  }

  get(index) {
    return this.isValidIndex(index) ? this.#array[index] : null;
  }

  set(index, element) {
    let result = null;

    if (index >= 0 && index <= this.length) {
      this.#array[index] = element;
      result = element;
    }

    return result;
  }

  remove(index) {
    let result = null;

    if (this.isValidIndex(index)) {
      result = this.#array[index];

      // Rewrite array from the start. Skip removing element.
      for (let i = 0, j = 0; i < this.length; i += 1) {
        if (this.#array[i] !== index) {
          this.#array[j] = this.#array[i];
          j += 1;
        }
      }

      this.length -= 1;

      if (this.length === 0) {
        this.#resetArray();
      } else {
        this.#resizeArray(this.length);
      }
    }

    return result;
  }

  getStaticArray = () => this.#array; // For debugging

  * [Symbol.iterator]() {
    for (let i = 0; i < this.length; i += 1) {
      yield this.#array[i];
    }
  }
}

export default DynamicInt32Array;
