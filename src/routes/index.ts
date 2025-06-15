import { Router } from 'express';
import collegeRouter from "./collegeroutes";
import studentRouter from "./student.routes"
const router = Router();

router.use("/college", collegeRouter)
router.use("/student",studentRouter)

export default router;
