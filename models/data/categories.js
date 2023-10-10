import Category from "../Category.js";
import 'dotenv/config.js';
import '../../config/database.js';

let categories = [
  {
    name: "suitcases"
  },
  {
    name: "backpacks"
  },
  {
    name: "accesories"
  },
  {
    name: "waistpacks"
  },
  {
    name: "pets"
  }
];

categories.forEach(async (categoryData) => {
  try {
      const category = new Category(categoryData);
      await category.save();
      console.log(`Categoría ${category.name} guardada en la base de datos`);
    
  } catch (error) {
    console.log(`Error al intentar guardar la categoría ${categoryData.name}: ${error}`);
  }
});
