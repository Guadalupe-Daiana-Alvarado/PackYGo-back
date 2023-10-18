import User from "../../models/User.js"

const signUp = async (req, res) => {
  const { email, password, photo } = req.body;

  try {
    const user = await User.create({ email, password, photo });
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default signUp;


/* import User from "../../models/User.js";

const signUp = async (req, res) => {
  const { email, password, photo, name, surname, address, phone } = req.body;

  try {
    // Intenta crear un nuevo usuario
    const user = await User.create({
      email,
      password,
      photo,
      name,
      surname,
      address,
      phone,
    });

    // Si la creación es exitosa, responde con un código 201 (Created) y los datos del usuario
    res.status(201).json({ user });
  } catch (error) {
    // Si se produce un error, registra el error y responde con un código 500 (Internal Server Error)
    console.error("Error al crear un nuevo usuario:", error);
    res.status(500).json({ error: "Error al crear un nuevo usuario" });
  }
};

export default signUp;
 */