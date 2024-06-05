import express, { Request, Response } from 'express';
import { Sequelize } from 'sequelize';

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Initialize Sequelize
const sequelize = new Sequelize('postgres://username:password@localhost:5432/digital_signing_tool');

// Define models
import { User, Document, Signature, Field } from './models';

// Define routes
app.get('/', (req: Request, res: Response) => {
  res.send('Digital Signing Tool API');
});

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
