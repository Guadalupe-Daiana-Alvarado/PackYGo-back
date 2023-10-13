import express from 'express';
import { addToCart,getCart} from '../controllers/cart/cartControllers.js';
import { requireAuth } from '../middlewares/authUser.js';

const router = express.Router();

router.post('/add',requireAuth, addToCart);
router.get('/user', requireAuth, getCart);
/* router.put('/update/:cartItemId', updateCartItem);
router.delete('/remove/:cartItemId', removeFromCart);

 */
export default router;
