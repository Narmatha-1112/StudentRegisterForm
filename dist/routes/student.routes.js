"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//student routes
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("../controllers/student.controller");
const student_controller_2 = require("../controllers/student.controller");
const student_controller_3 = require("../controllers/student.controller");
const router = express_1.default.Router();
router.post('/creates', student_controller_1.createDetail);
router.get('/gets', student_controller_2.getDetail);
router.get('/get/:id', student_controller_3.getId);
router.put('/update/:id', student_controller_3.updatedId);
exports.default = router;
