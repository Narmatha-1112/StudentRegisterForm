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
exports.updatedId = exports.getById = exports.getDetails = exports.createDetails = void 0;
const college_model_1 = __importDefault(require("../models/college.model"));
// POST  College-Registrations
const createDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, fullName, studentId, dateOfBirth, gender, contactNumber, emailAddress, permanentAddress, currentAddress, parentName, parentContact, course, department, yearOfStudy, dateOfAdmission, previousQualification, nationality, bloodGroup } = req.body;
        // Create a new CollegeRegistration instance
        const newRegistration = new college_model_1.default({ id, fullName, studentId, dateOfBirth, gender, contactNumber, emailAddress, permanentAddress, currentAddress, parentName, parentContact, course, department, yearOfStudy, dateOfAdmission, previousQualification, nationality, bloodGroup });
        // Save the registration to the database
        const savedRegistration = yield newRegistration.save();
        res.status(201).json(savedRegistration);
        console.log("sucessfully data is stored");
    }
    catch (_a) {
        console.log("ERROR not stored");
        res.status(404).json("DATA IS NOT STORE");
    }
});
exports.createDetails = createDetails;
//get Method
const getDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getdetails = yield college_model_1.default.find({});
        res.json(getdetails);
    }
    catch (_a) {
        res.json("Not Data get");
    }
});
exports.getDetails = getDetails;
//get id method
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log(id);
        const clgdetails = yield college_model_1.default.findById(id);
        res.json(clgdetails);
    }
    catch (error) {
        res.status(500).json("id is not value");
    }
});
exports.getById = getById;
//update method
const updatedId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const upid = req.params.id;
    const updetails = req.body;
    const updetail = yield college_model_1.default.updateOne({ _id: upid }, updetails);
    res.json(updetail);
});
exports.updatedId = updatedId;
