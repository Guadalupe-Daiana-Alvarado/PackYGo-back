import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  try {
  

    const token = jwt.sign(
      {
        
        email: req.body.email || req.user.email,
      },
      process.env.SECRET,
      { expiresIn: 60 * 60 * 24 }
    );

    console.log('Token generado:', token);

    req.token = token;
    return next();
  } catch (error) {
    // Manejo de excepciones
    console.error('Error en el middleware de generación de token:', error);

    // Puedes responder con un código de estado 500 y un mensaje de error
    res.status(500).json({ error: 'Ocurrió un error en el servidor al generar el token' });
  }
};
