import Cart from '../../models/Cart.js';

export const addToCart = async (req, res) => {
  try {
    const { userId, productId, amount } = req.body;
    const cartItem = new Cart({ user: userId, product: productId, amount });
    await cartItem.save();
    res.status(201).json({ message: 'Producto agregado al carrito exitosamente', cartItem });

  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el producto al carrito', errorMessage: error.message });
  }
}
