import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const cors = require('cors');

const app: Application = express();
app.use(cors());
const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server!');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

app.use(express.static("build"));

const items = [
  {
    name: "Laptop",
    price: 300,
  },
  {
    name: "Desktop",
    price: 800,
  }
];

app.get('/api/items', (req: Request, res: Response) => {
  res.send(items);
});