import express from  'express';
import signUp from '../controllers/register/register.js';
import signout from '../controllers/login/logout.js';
import validator from '../middlewares/validator.js';
import userSchema from "../schema/userSchema.js";
import hasheador from "../middlewares/hasheador.js";
import signIn from '../controllers/login/login.js';
import passwordBcript from '../middlewares/passwordBcript.js';
import accountNotExist from '../middlewares/accountNotExist.js';
import generateToken from '../middlewares/generateToken.js';
import { requireAuth } from '../middlewares/authUser.js';
import { getUserById } from '../controllers/register/getUser.js';



let router = express.Router();

router.get('/:_id', getUserById );
router.post('/register',validator(userSchema),hasheador , signUp);
router.post('/login', accountNotExist, passwordBcript, generateToken, signIn,);
router.post('/signout', signout)


export default router;
