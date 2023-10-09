import express from 'express';
import UserRouter from "./users.js"

let router = express.Router();

router.use('/users', UserRouter);

export default router;
