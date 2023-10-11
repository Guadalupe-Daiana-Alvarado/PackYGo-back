import express from 'express';
import { addToCart} from '../controllers/cart/cartControllers.js';
import { requireAuth } from '../middlewares/authUser.js';

const router = express.Router();

router.post('/add',requireAuth, addToCart);
/* router.put('/update/:cartItemId', updateCartItem);
router.delete('/remove/:cartItemId', removeFromCart);
router.get('/user/:userId', getCart);
 */
export default router;
