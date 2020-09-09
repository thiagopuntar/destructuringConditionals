function testBad(fruit, quantity) {
  const redFruits = ["apple", "strawberry", "cherry", "cranberries"];

  // condition 1: fruit must has value
  if (fruit) {
    // condition 2: must be red
    if (redFruits.includes(fruit)) {
      console.log("red");

      // condition 3: must be big quantity
      if (quantity > 10) {
        console.log("big quantity");
      }
    }
  } else {
    throw new Error("No fruit!");
  }
}

function test(fruit, quantity) {
  const redFruits = ["apple", "strawberry", "cherry", "cranberries"];

  // condition 1: throw error early
  if (!fruit) throw new Error("No fruit!");

  // condition 2: must be red
  if (redFruits.includes(fruit)) {
    console.log("red");

    // condition 3: must be big quantity
    if (quantity > 10) {
      console.log("big quantity");
    }
  }
}

function goodTest(fruit, quantity) {
  const redFruits = ["apple", "strawberry", "cherry", "cranberries"];

  if (!fruit) throw new Error("No fruit!"); // condition 1: throw error early
  if (!redFruits.includes(fruit)) return; // condition 2: stop when fruit is not red

  console.log("red");

  // condition 3: must be big quantity
  if (quantity > 10) {
    console.log("big quantity");
  }
}
