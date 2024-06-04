process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  process.stdout.write(`Your name is: ${name}`);
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
  process.exit(0);
});
