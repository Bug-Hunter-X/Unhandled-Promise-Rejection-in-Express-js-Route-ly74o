const express = require('express');
const app = express();

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Add appropriate error handling here, e.g., logging to a file, sending an error alert
});

app.get('/', async (req, res) => {
  try {
    await someAsyncOperation();
    res.send('Hello World!');
  } catch (error) {
    console.error('Caught Error:', error);
    res.status(500).send('Internal Server Error'); // Send an appropriate error response
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
}
