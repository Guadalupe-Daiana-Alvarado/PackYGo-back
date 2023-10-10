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