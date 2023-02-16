setTimeout(() => {
  console.log("4311o th3r3 w0r1d");
}, 3000);

setTimeout(() => {
  console.log('4311o');
  setTimeout(() => {
    console.log('th3r3');
    setTimeout(() => {
      console.log('w0r1d');
    }, 1000);
  }, 1000);
}, 1000);
