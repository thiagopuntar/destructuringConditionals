function badTest(color) {
  // use switch case to find fruits in color
  switch (color) {
    case "red":
      return ["apple", "strawberry"];
    case "yellow":
      return ["banana", "pineapple"];
    case "purple":
      return ["grape", "plum"];
    default:
      return [];
  }
}

const fruitColor = {
  red: ["apple", "strawberry"],
  yellow: ["banana", "pineapple"],
  purple: ["grape", "plum"],
};

function test(color) {
  return fruitColor[color] || [];
}

// Testando com MAP

const fruitColorMap = new Map()
  .set("red", ["apple", "strawberry"])
  .set("yellow", ["banana", "pineapple"])
  .set("purple", ["grape", "plum"]);

function testWithMap(color) {
  return fruitColorMap.get(color) || [];
}
