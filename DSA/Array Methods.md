Certainly! In JavaScript, arrays come with a variety of built-in methods that allow you to manipulate and interact with them. Here is a list of commonly used array methods:

### Mutating Methods (Change the Array)
1. **`push(...items)`**: Adds one or more elements to the end of an array and returns the new length of the array.
2. **`pop()`**: Removes the last element from an array and returns that element.
3. **`shift()`**: Removes the first element from an array and returns that element.
4. **`unshift(...items)`**: Adds one or more elements to the beginning of an array and returns the new length of the array.
5. **`splice(start, deleteCount, ...items)`**: Changes the contents of an array by removing existing elements and/or adding new elements.
6. **`reverse()`**: Reverses an array in place.
7. **`sort([compareFunction])`**: Sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.
8. **`copyWithin(target, start, end)`**: Shallow copies part of an array to another location in the same array and returns it without modifying its length.
9. **`fill(value, start, end)`**: Fills all the elements of an array from a start index to an end index with a static value.

### Accessor Methods (Do Not Change the Array)
1. **`concat(...arrays)`**: Combines two or more arrays and returns a new array.
2. **`join([separator])`**: Joins all elements of an array into a string.
3. **`slice(start, end)`**: Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
4. **`indexOf(searchElement, [fromIndex])`**: Returns the first index at which a given element can be found in the array, or -1 if it is not present.
5. **`lastIndexOf(searchElement, [fromIndex])`**: Returns the last index at which a given element can be found in the array, or -1 if it is not present.
6. **`includes(valueToFind, [fromIndex])`**: Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
7. **`toString()`**: Returns a string representing the specified array and its elements.
8. **`toLocaleString()`**: Returns a string representing the elements of the array. The elements are converted to strings using their `toLocaleString` methods.

### Iteration Methods
1. **`forEach(callback(element, index, array), [thisArg])`**: Executes a provided function once for each array element.
2. **`map(callback(element, index, array), [thisArg])`**: Creates a new array with the results of calling a provided function on every element in the calling array.
3. **`filter(callback(element, index, array), [thisArg])`**: Creates a new array with all elements that pass the test implemented by the provided function.
4. **`reduce(callback(accumulator, currentValue, index, array), initialValue)`**: Executes a reducer function on each element of the array, resulting in a single output value.
5. **`reduceRight(callback(accumulator, currentValue, index, array), initialValue)`**: Executes a reducer function on each element of the array, resulting in a single output value, starting from the rightmost element.
6. **`every(callback(element, index, array), [thisArg])`**: Tests whether all elements in the array pass the test implemented by the provided function.
7. **`some(callback(element, index, array), [thisArg])`**: Tests whether at least one element in the array passes the test implemented by the provided function.
8. **`find(callback(element, index, array), [thisArg])`**: Returns the value of the first element in the array that satisfies the provided testing function.
9. **`findIndex(callback(element, index, array), [thisArg])`**: Returns the index of the first element in the array that passes the test implemented by the provided function.
10. **`flat([depth])`**: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
11. **`flatMap(callback(element, index, array), [thisArg])`**: First maps each element using the provided function, then flattens the result into a new array.
12. **`keys()`**: Returns a new Array Iterator object that contains the keys for each index in the array.
13. **`values()`**: Returns a new Array Iterator object that contains the values for each index in the array.
14. **`entries()`**: Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

### Static Methods
1. **`Array.from(arrayLike, mapFn, thisArg)`**: Creates a new, shallow-copied Array instance from an array-like or iterable object.
2. **`Array.of(...elements)`**: Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
3. **`Array.isArray(value)`**: Determines whether the passed value is an Array.

These methods provide a rich set of tools for manipulating and interacting with arrays in JavaScript.
