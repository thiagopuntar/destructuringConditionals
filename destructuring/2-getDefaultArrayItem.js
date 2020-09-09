function getArrayItem() {
  const colors = [];

  let firstColor = "white";
  if (colors.length > 0) {
    firstColor = colors[0];
  }

  // const [firstColor = "white"] = colors;

  console.log(firstColor);
}

function get2ArrayItem() {
  const colors = [];
  const [, secondColor = "black"] = colors;
  console.log(secondColor);
}

getArrayItem();
