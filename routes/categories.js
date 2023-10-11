import express  from 'express';
import read from "../controllers/categories/categoires.js"
const router = express.Router();

/* GET users listing. */
router.get('/', read);

export default  router;
