const sentence = "hello there from lighthouse labs";

for (const char of sentence) {
  console.log(char);
}

const sentence = "Hello, world!";
for (const char of sentence) {
  process.stdout.write(char);
}


const sentence = "Hello, world!";
for (const [index, char] of sentence.split("").entries()) {
  setTimeout(() => {
    process.stdout.write(char);
    if (index === sentence.length - 1) {
      process.stdout.write("\n"); // add newline at the end
    }
  }, (index + 1) * 1000); // delay each character by index * 1 second
}

const sentence = "Hello, world!";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 50); // add 50ms to the delay for each character
}
setTimeout(() => {
  process.stdout.write('\n'); // add newline after all characters are output
}, delay);

const sentence = "Hello, world!";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 50); // add 50ms to the delay for each character
}
setTimeout(() => {
  process.stdout.write('\n'); // add newline after all characters are output
}, delay + 50); // add extra 50ms delay for the final newline character
