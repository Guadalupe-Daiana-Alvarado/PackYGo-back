import jwt from 'jsonwebtoken';

export const requireAuth = (req, res, next) => {
  const token = req.headers.Authorization; // Otra forma de enviar el token, como en el encabezado
  console.log(req.headers.Authorization);


  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
      if (err) {
        // Agrega un registro de error para ver los detalles del error
        console.error('Error al verificar el token:', err);
        res.status(401).json({ error: 'Token inválido' });
      } else {
        req.userId = decodedToken.userId;
        next();
      }
    });
  } else {
    // Agrega un registro de información para mostrar que se requiere autenticación
    console.log('Se requiere autenticación');
    res.status(401).json({ error: 'Se requiere autenticación' });
  }
};
