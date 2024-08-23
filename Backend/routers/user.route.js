import express from 'express';
import { SignUp,SignIn} from '../controller/user.controller..js';
import { VerifyToken } from '../middleware/auth.js';
 
const router = express.Router();
 
router.post("/signUp",SignUp);
router.post("/signIn",SignIn);
// router.post("/findUserByEmail",findByEmail);
// router.post("/updatedetail",updateUser)
// router.post("/updatePassword",updatePassword)
export default router;