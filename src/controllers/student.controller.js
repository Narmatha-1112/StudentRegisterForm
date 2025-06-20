"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedId = exports.getId = exports.getDetail = exports.createDetail = void 0;
const student_model_1 = __importDefault(require("../models/student.model"));
// POST /students - Add a new student
const createDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, emailAddress, parentGuardianName, age, studentId, dateOfBirth, gender, address, attendancePercentage, academyMark, } = req.body;
        // Create a new student 
        const newStudent = new student_model_1.default({
            fullName, emailAddress, parentGuardianName, age, studentId, dateOfBirth, gender, address,
            attendancePercentage, academyMark,
        });
        // Save the student to the database
        const savedStudent = yield newStudent.save();
        res.status(201).json(savedStudent);
        console.log("Success Data is stored ");
    }
    catch (error) {
        console.error("Error data is not stored", error);
        res.status(500).json({ error: "Failed to create student" });
    }
});
exports.createDetail = createDetail;
//get Method
const getDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getdetails = yield student_model_1.default.find({});
        console.log(getdetails);
        res.json(getdetails);
    }
    catch (error) {
        console.error("Failed to fetch data", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});
exports.getDetail = getDetail;
//get id method
const getId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getid = req.params.id;
        const student = yield student_model_1.default.findById(getid);
        res.json(student);
    }
    catch (error) {
        console.error("Invalid ID", error);
        res.status(500).json({ error: "Invalid ID" });
    }
});
exports.getId = getId;
//update method
const updatedId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const upid = req.params.id;
        const updetails = req.body;
        const updatedStudent = yield student_model_1.default.findByIdAndUpdate(upid, updetails, { new: true });
        res.json(updatedStudent);
    }
    catch (error) {
        console.error("Failed to update", error);
        res.status(500).json({ error: "Failed to update student" });
    }
});
exports.updatedId = updatedId;
