function immutableArray() {
  const numbers = [1, 2, 3];

  const [, ...fooNumbers] = numbers;

  console.log(fooNumbers);
  console.log(numbers);
}

function immutableObject() {
  const big = {
    foo: "value Foo",
    bar: "value Bar",
  };

  const { foo, ...small } = big;

  console.log(small);
  console.log(big);
}

immutable();
