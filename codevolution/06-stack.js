// Last in - First out

function demoStackOperations() {
  // Stack implementation using an array
  const stack = [];

  // Push elements to the stack
  stack.push(10);
  stack.push(20);
  stack.push(30);

  console.log("Stack after pushes: ", stack); // Output: [10, 20, 30]

  // Peek at the top element
  const topElement = stack[stack.length - 1];
  console.log("Top element (peek): ", topElement); // Output: 30

  // Pop the top element
  const poppedElement = stack.pop();
  console.log("Popped element: ", poppedElement); // Output: 30

  console.log("Stack after pop: ", stack); // Output: [10, 20]

  // Check if the stack is empty
  const isEmpty = stack.length === 0;
  console.log("Is stack empty?: ", isEmpty); // Output: false

  // Pop all elements
  stack.pop();
  stack.pop();
  console.log("Stack after popping all elements: ", stack); // Output: []

  console.log("Is stack empty now?: ", stack.length === 0); // Output: true
}

// Call the function to demonstrate stack operations
demoStackOperations();


// ChatGPT Aug 2024