const fibonacciSequence = (lastNumber) => {
  let a, b, nxt;

  a = 0;
  b = 1;
  nxt = 0;

  console.log("Fibonacci Sequence:");
  while (nxt < lastNumber) {
    // * to avoid default new line, use this instead * //
    process.stdout.write(`${nxt} | `);
    a = b;
    b = nxt;
    nxt = a + b;
  }
};

fibonacciSequence(23);
