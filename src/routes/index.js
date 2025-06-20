"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const collegeroutes_1 = __importDefault(require("./collegeroutes"));
const student_routes_1 = __importDefault(require("./student.routes"));
const router = (0, express_1.Router)();
router.use("/college", collegeroutes_1.default);
router.use("/student", student_routes_1.default);
exports.default = router;
