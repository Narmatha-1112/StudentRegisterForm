

//student routes
import express from 'express';
import{createDetail}from '../controllers/student.controller';
import{getDetail}from '../controllers/student.controller';
import{getId, updatedId}from '../controllers/student.controller';
const router = express.Router();
router.post('/creates',createDetail);
router.get('/gets',getDetail);
router.get('/get/:id',getId);
router.put('/update/:id', updatedId)
export default router;

