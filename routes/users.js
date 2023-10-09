import express from  'express';
import signUp from '../controller/register/register.js';
import validator from '../middlewares/validator.js';
import userSchema from "../schema/userSchema.js";
let router = express.Router();

router.post('/register',validator(userSchema), signUp);

export default router;
