"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Set the port number for the server
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello from Backend');
});
// Start the server and listen on Port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
