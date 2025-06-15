

//college.controller
import express, { Request, Response } from 'express';
import CollegeRegistration, { ICollegeRegistration } from '../models/college.model';



// POST  College-Registrations
export const createDetails = async (req: Request, res: Response) => {
  try {
    const { id, fullName, studentId, dateOfBirth, gender, contactNumber, emailAddress, permanentAddress, currentAddress, parentName, parentContact, course, department, yearOfStudy, dateOfAdmission, previousQualification, nationality, bloodGroup } = req.body;
    // Create a new CollegeRegistration instance
    const newRegistration = new CollegeRegistration({ id, fullName, studentId, dateOfBirth, gender, contactNumber, emailAddress, permanentAddress, currentAddress, parentName, parentContact, course, department, yearOfStudy, dateOfAdmission, previousQualification, nationality, bloodGroup});

    // Save the registration to the database
    const savedRegistration = await newRegistration.save();

    res.status(201).json(savedRegistration);
    console.log("sucessfully data is stored")
  }
  catch {
    console.log("ERROR not stored")
    res.status(404).json("DATA IS NOT STORE")
  }

}
//get Method

export const getDetails = async (req: Request, res: Response) => {
  try {
    const getdetails = await CollegeRegistration.find({});
    res.json(getdetails)
  }
  catch {
    res.json("Not Data get");
  }
}
//get id method
export const getById = async (req: Request, res: Response) => {
  
 try {
   const id = req.params.id;
   console.log(id)
    const clgdetails = await CollegeRegistration.findById(id);
    res.json(clgdetails);
  } catch (error: any) {
    res.status(500).json("id is not value")
  }
};

//update method
export const updatedId = async (req: Request, res: Response) => {
  const upid = req.params.id;
  const updetails = req.body;
  const updetail = await CollegeRegistration.updateOne({ _id: upid }, updetails);
  res.json(updetail);
};
