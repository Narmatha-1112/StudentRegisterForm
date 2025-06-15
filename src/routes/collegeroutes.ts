//college.routes

import express from 'express';
import{createDetails,getDetails}from '../controllers/college.controller';
import { getById } from '../controllers/college.controller';
import { updatedId} from '../controllers/college.controller';
const router = express.Router();
router.post('/createdetails',createDetails);
router.get('getids/:id',getById)

router.get('/getdetails',getDetails);
router.put('/updatedetails/:id', updatedId)
export default router;
