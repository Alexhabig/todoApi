"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./todos"));
const router = express_1.default.Router();
exports.default = () => {
    (0, todos_1.default)(router);
    // users(router);
    return router;
};
//# sourceMappingURL=index.js.map