"use strict";
//college.routes
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const college_controller_1 = require("../controllers/college.controller");
const college_controller_2 = require("../controllers/college.controller");
const college_controller_3 = require("../controllers/college.controller");
const router = express_1.default.Router();
router.post('/createdetails', college_controller_1.createDetails);
router.get('getids/:id', college_controller_2.getById);
router.get('/getdetails', college_controller_1.getDetails);
router.put('/updatedetails/:id', college_controller_3.updatedId);
exports.default = router;
