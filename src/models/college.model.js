"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//college.model
const mongoose_1 = require("mongoose");
// Create the Mongoose schema
const collegeRegistrationSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    fullName: { type: String, required: true },
    studentId: { type: String, required: true, unique: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    contactNumber: { type: String, required: true },
    emailAddress: { type: String, required: true, unique: true, lowercase: true, trim: true },
    permanentAddress: { type: String, required: true },
    currentAddress: { type: String },
    parentName: { type: String, required: true },
    parentContact: { type: String, required: true },
    course: { type: String, required: true },
    department: { type: String, required: true },
    yearOfStudy: { type: Number, required: true },
    dateOfAdmission: { type: Date, required: true },
    previousQualification: { type: String, required: true },
    nationality: { type: String, required: true },
    bloodGroup: { type: String },
});
// Export the Mongoose model with the interface
const CollegeRegistration = (0, mongoose_1.model)('CollegeRegistration', collegeRegistrationSchema);
exports.default = CollegeRegistration;
