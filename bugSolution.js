function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Or throw an error: throw new Error('Null values are not allowed');
  }
  // ...
}