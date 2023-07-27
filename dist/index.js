"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
require("dotenv/config");
// import cookieParser from 'cookie-parser';
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const allowedOrigins = ['http://localhost:3000', 'https://todo-list-six-sand.vercel.app'];
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.use((0, compression_1.default)());
// const server = http.createServer(app);
const PORT = process.env.PORT;
// server.listen(3001, () => {
//     console.log(`Server running on http://localhost:3001/`)
// });
app.get("/", (req, res) => {
    res.send("Hello");
});
app.listen(PORT, () => {
    console.log(`Server running on Port ` + PORT);
});
const MONGO_URL = 'mongodb+srv://xalex:xalex@cluster0.aawauya.mongodb.net/?retryWrites=true&w=majority';
mongoose_1.default.Promise = Promise;
mongoose_1.default.connect(MONGO_URL);
mongoose_1.default.connection.on('error', (error) => console.log(error));
app.use('/', (0, router_1.default)());
//# sourceMappingURL=index.js.map