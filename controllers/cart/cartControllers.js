import Cart from '../../models/Cart.js';
import Product from '../../models/Product.js'
import User from '../../models/User.js'

export const addToCart = async (req, res) => {
  try {
    const { userId, productId, amount } = req.body;

    // Encuentra el carrito del usuario o crea uno si no existe
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, products: [] });
    }

    // Busca si el producto ya está en el carrito
    const existingProductIndex = cart.products.findIndex(
      (productItem) => productItem.product == productId
    );

    if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      cart.products[existingProductIndex].amount += amount;
    } else {
      // Si el producto no está en el carrito, agrégalo
      cart.products.push({ product: productId, amount });
    }

    await cart.save();
    res.status(201).json({
      message: 'Producto agregado al carrito exitosamente',
      cartItem: cart,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Error al agregar el producto al carrito',
      errorMessage: error.message,
    });
  }
}


// controllers/cart/getCart.js


export const getCart = async (req, res) => {
  try {
    const userEmail = req.user.email; 
    console.log("email del usuario",userEmail)
    const user = await User.findOne({ email:userEmail });

    if (!user) {
      return res.status(404).json({ message: 'El usuario no existe', success: false });
    }

    console.log('Solicitud GET para obtener el carrito del usuario:', user);

    // Busca el carrito del usuario
    const cart = await Cart.findOne({ user: user._id });

    if (!cart) {
      console.log('El carrito del usuario no existe.');
      return res.status(404).json({ message: 'El carrito del usuario no existe', success: false });
    }

    console.log('Carrito encontrado:', cart);

    return res.status(200).json({ cart, message: 'Carrito obtenido exitosamente', success: true });
  } catch (error) {
    console.error('Error al obtener el carrito:', error);
    res.status(500).json({ error: 'Error al obtener el carrito', errorMessage: error.message });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    // Encuentra el carrito del usuario
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({
        message: 'El carrito del usuario no existe',
        success: false,
      });
    }

    // Busca si el producto está en el carrito
    const existingProductIndex = cart.products.findIndex(
      (productItem) => productItem.product == productId
    );

    if (existingProductIndex !== -1) {
      // Si el producto está en el carrito, elimínalo
      cart.products.splice(existingProductIndex, 1);
      await cart.save();

      return res.status(200).json({
        message: 'Producto eliminado del carrito exitosamente',
        cart: cart,
        success: true,
      });
    } else {
      return res.status(404).json({
        message: 'El producto no está en el carrito',
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: 'Error al eliminar el producto del carrito',
      errorMessage: error.message,
    });
  }
};
