outerLoop: for (let i = 2; i <= 10; i++) {
    if (i % 2 !== 0) {

      continue outerLoop;
    }
    console.log(i);
  }