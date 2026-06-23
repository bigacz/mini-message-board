import express from 'express';
import process from 'node:process';
import { text } from 'node:stream/consumers';

const app = express();

app.set('view engine', 'ejs');
app.set('views', process.cwd() + '/views/');

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

app.use('/', (req, res) => {
  res.render('index', { messages });
});

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    throw new Error(error);
  }

  console.log(`Server started on port ${PORT}`);
});
