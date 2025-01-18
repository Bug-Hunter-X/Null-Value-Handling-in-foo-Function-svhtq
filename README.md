# JavaScript Bug: Null Value Handling in foo Function

This repository demonstrates a common JavaScript bug related to null value handling.  The `foo` function unexpectedly exits when null values are passed as arguments.

## Bug Description
The `foo` function does not handle `null` values correctly.  When `null` is passed as `a` or `b`, the function silently returns without performing the intended operations.  This behavior is unexpected and may lead to subtle errors in the application.

## Solution
The solution involves explicitly checking for `null` values and providing a more robust response, such as returning a default value or throwing an error to indicate an invalid input.

## How to Reproduce
1. Clone this repository.
2. Run the `bug.js` file. Observe that if you pass a null value, the function exits without output.
3. Run the `bugSolution.js` file. Observe how the improved function handles null values.