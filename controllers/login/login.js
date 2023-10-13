import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate({ email: req.body.email }, { online: true });
    if (!user) {
      return res.status(401).json({
        message: 'La autenticación falló',
        success: false
      });
    }

    // Genera un token con el ID del usuario
    const token = req.token;

    const userData = {
      email: user.email,
      photo: user.photo,
      role: user.role,
      id: user._id
    };

    return res.status(200).json({
      response: { token, user: userData },
      message: 'Inicio de sesión exitoso y generación de token',
      success: true
    });
  } catch (error) {
    next(error);
  }
};
