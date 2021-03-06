import DynamicInt32Array from './dynamic-int32-array.js';
import Set from './set.js';

/* eslint-disable no-console */

// Dynamic array
const array = new DynamicInt32Array();
console.log('New array: ', array);

array.push(1);
array.push(2);
array.push(3);
console.log('Added 3 elements: ', array.getStaticArray());
console.log('test itarable : ', [...array]);
console.log('array[1]: ', array.get(1));
console.log('array[2]: ', array.get(2));
console.log('array[100]: ', array.get(100));
array.set(2, 1000);
console.log('set array[2] = 1000 : ', array.getStaticArray());
array.remove(2);
console.log('removed array[2] : ', array.getStaticArray());
array.remove(0);
console.log('removed array[0] : ', array.getStaticArray());
array.remove(0);
console.log('removed array[0] : ', array.getStaticArray());

// Set
const set = new Set();
set.add(1);
console.log('\n\n', set);
set.remove(1);
console.log(set);
const newSet = new Set();
newSet.add(1);
newSet.add(2);
newSet.add(3);
set.union(newSet);
console.log(set.union(newSet));
