import User from '../../models/User.js';
// Obtener un Usero por ID

export const getUserById = async (req, res) => {

    try {
      const user = await User.findById(req.params._id);
      
      console.log('PARAM',req.params._id)
    
      res.status(200).json({
        user
    });
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el User' });
    }
  };
  
  
  