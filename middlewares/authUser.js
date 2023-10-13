import jwt from 'jsonwebtoken';

export const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  // Verificar el token
  jwt.verify(token.split(' ')[1], process.env.SECRET, (err, decodedToken) => {
    if (err) {
      console.error('Error al verificar el token:', err);
      return res.status(401).json({ error: 'Token inválido' });
    }

    // El token es válido, establecer el usuario en req.user con el ID del usuario
    req.user = {
      email: decodedToken.email // Agrega otros datos del usuario si es necesario
    };

    next();
  });
};
