"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("sequelize");
// Initialize Express app
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express_1.default.json());
// Initialize Sequelize
const sequelize = new sequelize_1.Sequelize('postgres://username:password@localhost:5432/digital_signing_tool');
// Define models
// import { User, Document, Signature, Field } from './models';
// Define routes
app.get('/', (req, res) => {
    res.send('Digital Signing Tool API');
});
// Sync database and start server
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
