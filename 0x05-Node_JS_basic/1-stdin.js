console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  const name = process.stdin.read();
  console.log(`Your name is: ${name}`);
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
  process.exit(0);
});
