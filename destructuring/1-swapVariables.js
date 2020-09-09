function swap() {
  let a = 1;
  let b = 2;
  let temp;

  temp = a;
  a = b;
  b = temp;

  // let a = 1;
  // let b = 2;
  // [a, b] = [b, a];

  console.log(a, b);
}

swap();
