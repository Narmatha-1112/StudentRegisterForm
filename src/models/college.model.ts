
//college.model
import mongoose, { Document, Schema, model } from 'mongoose';
// Define a TypeScript interface for the CollegeRegistration document
export interface ICollegeRegistration extends Document {
  id:number;
  fullName: string;
  studentId: String;
  dateOfBirth: Date;
  gender: string;
  contactNumber: string;
  emailAddress: string;
  permanentAddress: string;
  currentAddress: string;
  parentName: string;
  parentContact: string;
  course: string;
  department: string;
  yearOfStudy: number;
  dateOfAdmission: Date;
  previousQualification: string;
  nationality: string;
  bloodGroup: string;
}
// Create the Mongoose schema
const collegeRegistrationSchema: Schema = new Schema({
  id:{type:Number,required:true},
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
const CollegeRegistration = model<ICollegeRegistration>('CollegeRegistration', collegeRegistrationSchema);
export default CollegeRegistration;
