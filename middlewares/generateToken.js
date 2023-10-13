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

    // Agrega un registro de depuración para verificar el token generado
    console.log('Token generado:', token);

    req.token = token;
    return next();
  } catch (error) {
    // Manejo de excepciones
    console.error('Error en el middleware de generación de token:', error);
    res.status(500).json({ error: 'Ocurrió un error en el servidor al generar el token' });
  }
};
