function dynamicProps() {
  const nameProp = "name";

  const obj = {
    named: "Teste",
  };

  const { [nameProp]: name = "Unknown" } = obj;
  console.log(`Hello, ${name}!`);
}

dynamicProps();
