import User from "../User.js";
import 'dotenv/config.js';
import '../../config/database.js';

let users = [
  {
    email: "test1@test.com",
    photo: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    role: 0,
    online: false,
    verified: true,
    password: "hola123",
    verify_code: "1234"
  }
];

users.forEach(async (userData) => {
  // Verifica si un usuario con el mismo correo electrónico ya existe en la base de datos
  const existingUser = await User.findOne({ email: userData.email });

  if (!existingUser) {
    // Si no existe, crea y guarda el usuario
    const user = new User(userData);
    try {
      await user.save();
      console.log('Usuario guardado en la base de datos');
    } catch (error) {
      console.log(error + 'Al intentar guardar al usuario');
    }
  } else {
    // Si el usuario ya existe, muestra un mensaje o toma la acción apropiada
    console.log(`El usuario con correo electrónico ${userData.email} ya existe en la base de datos.`);
  }
});
