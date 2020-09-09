function badTest(fruit, quantity) {
  if (!fruit) return;
  const q = quantity || 1; // if quantity not provided, default to one

  console.log(`We have ${q} ${fruit}!`);
}

function goodTest(fruit, quantity = 1) {
  // if quantity not provided, default to one
  if (!fruit) return;
  console.log(`We have ${quantity} ${fruit}!`);
}

// É possível fazer o assign direto no parâmetro
function testObj({ name } = {}) {
  console.log(name || "unknown");
}
