
//student controller
import express, { Request, Response } from 'express';
import StudentModel, { IStudent } from '../models/student.model';



// POST /students - Add a new student
export const createDetail = async (req: Request, res: Response) => {
  try {
    const { fullName, emailAddress, parentGuardianName, age, studentId, dateOfBirth, gender, address,
       attendancePercentage, academyMark,} = req.body;
// Create a new student 
    const newStudent = new StudentModel({
      fullName, emailAddress, parentGuardianName, age, studentId, dateOfBirth, gender, address, 
      
      attendancePercentage, academyMark,
    });

    // Save the student to the database
    const savedStudent = await newStudent.save();
    
    res.status(201).json(savedStudent);
     console.log("Success Data is stored ")
  }
 catch (error) {
  console.error("Error data is not stored", error);
  res.status(500).json({ error: "Failed to create student" });
}
};

//get Method
export const getDetail= async (req: Request, res: Response) => {
  try {
       const getdetails=await StudentModel.find({});
       console.log(getdetails)
       res.json(getdetails)
  }
 catch (error) {
  console.error("Failed to fetch data", error);
  res.status(500).json({ error: "Failed to fetch data" });
}

}

//get id method
export const getId = async (req: Request, res: Response) => {
  try {
    const getid = req.params.id;
    const student = await StudentModel.findById(getid);
   
    res.json(student);
  } catch (error) {
    console.error("Invalid ID", error);
    res.status(500).json({ error: "Invalid ID" });
  }
};


//update method
export const updatedId = async (req: Request, res: Response) => {
  try {
    const upid = req.params.id;
    const updetails = req.body;
    const updatedStudent = await StudentModel.findByIdAndUpdate(upid, updetails, { new: true });
    
    res.json(updatedStudent);
  } catch (error) {
    console.error("Failed to update", error);
    res.status(500).json({ error: "Failed to update student" });
  }
};
