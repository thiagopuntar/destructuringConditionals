const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "grape", color: "purple" },
];

function test() {
  let isAllRed = true;

  // condition: all fruits must be red
  for (let f of fruits) {
    if (!isAllRed) break;
    isAllRed = f.color == "red";
  }

  console.log(isAllRed); // false
}

function goodTest() {
  // condition: short way, all fruits must be red
  const isAllRed = fruits.every((f) => f.color == "red");

  console.log(isAllRed); // false
}
