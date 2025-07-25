"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config({ path: '.env.local' });
const app = (0, express_1.default)();
console.log(process.env.PORT); // Log the port to verify it's loaded correctly
// Set the port number for the server
const port = process.env.PORT || 3001;
app.get('/', (req, res) => {
    res.send('Hello from Backend');
});
// Start the server and listen on Port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
