import Product from "../Product.js"; // Asegúrate de importar el modelo de producto
import Category from "../Category.js"
import 'dotenv/config.js';
import '../../config/database.js';


const products = [
 
  {
    name:"Suitcase Nat Geo Transit ",
    photo:"https://pilgrim.cl/cdn/shop/products/NGMTRP_800x.jpg?v=1658162084",
    description:"The incredible Transit suitcase from NATGEO is the perfect size to carry everything you need on your trips. (and if you lack space... it's expandable!). It comes with 4 double wheels with 360° swivel that distribute the weight so you can easily carry it everywhere. Made of PC-ABS material, a polymer that has great resistance to impacts and temperature changes, making it the ideal option for demanding environments.",
    price:80,
    category:"suitcases",
    stock:5
  },
  {
    name: "Travelpro Platinum Elite Suitcase ",
    photo:"https://m.media-amazon.com/images/I/816mZi83UDL._AC_SX425_.jpg",
    description: "This luggage has PrecisionGlide System that delivers precise control and effortless roll on eight MagnaTrac self-aligning spinner wheels led by a height-adjustable PowerScope handle with comfortable Contour Grip. Suitcase Case Dimensions: 25 in x 18 in x 11.25 in, Overall Dimensions ( includes wheels & carry handles): 28 in x 18.5 in x 11.75 in, Weight: 9.8 lbs, Volume: 97 L.",
    price: 365,
    category: "suitcases",
    stock:2
  },
  {
    name: "Suitcase National Geographic Aerodrome",
    photo:"https://pilgrim.cl/cdn/shop/products/NGMAEROAZ_2000x.jpg?v=1651074517",
    description: "Una maleta espaciosa para tus viajes",
    price: 79.99,
    category: "suitcases",
    stock:3
  },
  {
    name: "Suitcase Travelpro Maxlite 5",
    photo:"https://m.media-amazon.com/images/I/71DLfi5uxaL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    description: "A half-pound lighter than the maxlite 4 version, this expandable Rollaboard suitcase with lightweight yet durable honeycomb frame system lets you pack more with less weight. Case Dimensions: 26 in x 18.5 in x 11 in, Overall Dimensions (wheels & carry handles): 28 in x 19 in x 11 in, Weight: 7.1 lbs",
    price: 186,
    category: "suitcases",
    stock:6
  },
  {
    name: "Suitcase Samsonite Saire LTE ",
    photo:"https://m.media-amazon.com/images/I/81pp0y+n52L._AC_SX425_.jpg",
    description: "The Medium Check-In features Dual Spinner Wheels for an effortless glide; as well as plenty of pockets on the exterior and ample space in the interior for maximum packing capabilities!",
    price: 169,
    category: "suitcases",
    stock:1
  },
  {
    name: "Suitcase Samsonite Solyte DLX",
    photo:"https://m.media-amazon.com/images/I/71Sw7EnGo-L._AC_SX425_.jpg",
    description: "Introducing Aspire DLX, the collection that offers the most essential and top rated Samsonite features, so you can pack your way, while maximizing capacity.",
    price: 116,
    category: "suitcases",
    stock:5
  },
  {
    name: "Matein Travel Laptop Backpack",
    photo:"https://m.media-amazon.com/images/I/81L8quiJXhL._AC_SY450_.jpg",
    description: "LOTS OF STORAGE SPACE&POCKETS: One separate laptop compartment hold 15.6 Inch Laptop as well as 15 Inch,14 Inch and 13 Inch Laptop. One spacious packing compartment roomy for daily necessities,tech electronics accessories. Front compartment with many pockets, pen pockets and key fob hook, makes your items organized and easier to find.",
    price: 29,
    category: "backpacks",
    stock:10
  },
  {
    name: "LOVEVOOK Laptop Backpack",
    photo:"https://m.media-amazon.com/images/I/71cv03B5ksL._AC_SX425_.jpg",
    description: "Multi compartments. Total 4 compartments: 1 separate laptop compartment, 1 main compartment and 2 front compartments provide multi-functional for your computer, A4 folder, books, clothes, etc.",
    price: 30,
    category: "backpacks",
    stock:3
  },
  {
    name: "GRAND TRAVEL BACKPACK",
    photo:"https://xclusive.cl/cdn/shop/files/Frentesinfondosinlogo.png?v=1684267387&width=500",
    description: "Ergonomic back design with airflow and ventilated padding for greater support and comfort, reducing shoulder and neck pressure. Expandable design from 29 Liters to 39 Liters.",
    price: 60,
    category: "backpacks",
    stock:2
  },
  {
    name: "REI Co-op Recycled Backpack",
    photo:"https://www.rei.com/media/62b17d7b-c4ce-4f50-a789-6eaffefa4dff.jpg?size=784x588",
    description: "Now made with rugged, recycled ripstop nylon that withstands whatever the road throws your way. Mesh back panel offers cushioning and ventilation to keep your back cool",
    price: 199,
    category: "backpacks",
    stock:2
  },
  {
    name: "Osprey Fairview Backpack Women's",
    photo:"https://www.rei.com/media/ad7b91ed-4c8c-46a5-a067-154cd7db2523.jpg?size=784x588",
    description: "4 mm LightWire peripheral frame effectively transfers the load from harness to hipbelt. Atilon framesheet spreads the load across the entire back panel to the peripheral frame",
    price: 185,
    category: "backpacks",
    stock:2
  },
  {
    name: "ProEtrade Backpack",
    photo:"https://m.media-amazon.com/images/I/91zm11ULu7L._AC_UY500_.jpg",
    description: "Large capacity & and multi compartments. Total 9 pockets, 2 main compartment, 1 laptop compartment, 2 front zipped pocket, both side water bottle pockets for holding water bottles or umbrellas, 1 inner pockets for keys, pen or small accessories, 1 anti theft pocket for protect your belongings, 1 glasses pocket & mesh pocket on straps, the multi pocket & compartments keep your things organized.",
    price: 35,
    category: "backpacks",
    stock:4
  },
  
  {
    name: "Roadside Waist pack",
    photo:"https://mountainhardwearcl.vtexassets.com/arquivos/ids/164142-800-auto?v=638031741538970000&width=800&height=auto&aspect=true",
    description: "420D nylon with special carbonate coating for durability. Two-way zipper main compartment with dividing sleeve organizer. Quick access front zipper pocket",
    price: 20,
    category: "waistpacks",
    stock:8
  },
  {
    name: "Mountain Wear Waist pack",
    photo:"https://mountainhardwearcl.vtexassets.com/arquivos/ids/164237-800-auto?v=638031741970600000&width=800&height=auto&aspect=true",
    description: "420D nylon with special carbonate coating for durability. Two-way zipper main compartment with dividing sleeve organizer. Quick access front zipper pocket. SR buckle and strap belt behind back panel making it a travel organizer",
    price: 23,
    category: "waistpacks",
    stock:4
  },
  {
    name: "Osprey Tempest 6 Waist pack",
    photo:"https://www.rei.com/media/579310bb-dfba-4d39-a891-a8df5c70861c.jpg?size=784x588",
    description: "Body-hugging Biostretch waistbelt keeps your load stable, no matter if you're day hiking or trail running. Dual-zippered panel access to main compartment makes it easy to get items in and out.",
    price: 90,
    category: "waistpacks",
    stock:2
  },
  {
    name: "Osprey Savu 5 Hydration Waist Pack",
    photo:"https://www.rei.com/media/8baa0a59-f054-4a3c-abf9-1eecefd18ad7.jpg?size=784x588",
    description: "PFAS-free durable water repellent (DWR) finish. 2 rigid snap-in-place or tuck-away water bottle sleeves make it easy to pull and replace water bottles as you pedal (bottles not included)",
    price: 65,
    category: "waistpacks",
    stock:1
  },
  {
    name: "Cotopaxi Allpa X 4 L Waist Pack",
    photo:"https://www.rei.com/product/206706/cotopaxi-allpa-x-4-l-hip-pack",
    description: "Perfect for a life in transit, the Allpa X offers comfortable carry around your hip or worn crossbody. Main compartment features a 2-way zipper. Butterfly-style opening for easy access.",
    price: 75,
    category: "waistpacks",
    stock:3
  },
  {
    name: "Large Fanny Waist Pack",
    photo:"https://http2.mlstatic.com/D_NQ_NP_877970-MLC70869225129_082023-O.webp",
    description: "Large fanny pack travel waist bag lightweight for men&women with adjustable strap t206 black. It has a large compartment with waterproof dividers so you can carry items that may get wet, such as bottles of shampoo and creams.",
    price: 65,
    category: "waistpacks",
    stock:7
  },
  {
    name: "10 Pack Luggage Tag",
    photo:"https://m.media-amazon.com/images/I/71DnuTYC5hL._AC_SX425_.jpg",
    description: "The color of the travel tag is very eye-catching, and you can see your luggage from a distance. Made of the highest quality rigid PVC material, it can prevent bending, breaking and tearing.",
    price: 6,
    category: "accesories",
    stock:20
  },
  {
    name: "EPICKA Universal Travel Adapter",
    photo:"https://m.media-amazon.com/images/I/61cE3xIDSXL._AC_SX425_.jpg",
    description: "WORLDWIDE ADAPTER - Our all-in-one adapter is equipped with 4 different plug types that could plug into the sockets of 200+ countries and regions: Type C (most popular type) for use in most of Europe, including France, Germany, Italy, Spain, Iceland, Greece, and many other countries.",
    price: 30,
    category: "accesories",
    stock:13
  },
  {
    name: "LeanTravel Compression Packing Cubes",
    photo:"https://m.media-amazon.com/images/I/A1J6P+IIgiL._AC_SX425_.jpg",
    description: "STYLISH, WRINKLE-FREE PACKING thanks to our premium quality polyester fabric and sturdy construction with durable mesh; Clothes can be seen through an inspection and odors are minimized thanks to increased breathability.",
    price: 45,
    category: "accesories",
    stock:4
  },
  {
    name: "LeanTravel Compression Packing Cubes",
    photo:"https://m.media-amazon.com/images/I/A1J6P+IIgiL._AC_SX425_.jpg",
    description: "STYLISH, WRINKLE-FREE PACKING thanks to our premium quality polyester fabric and sturdy construction with durable mesh; Clothes can be seen through an inspection and odors are minimized thanks to increased breathability.",
    price: 45,
    category: "accesories",
    stock:4
  },
  {
    name: " Travel Cable Organizer",
    photo:"https://m.media-amazon.com/images/I/81hLyL0rX2S._AC_SX425_.jpg",
    description: "Compact size and lightweight make it easy to carry and put into your backpack, handbags or laptop bag without taking much space. Suitable for family use and daily organization.",
    price: 9,
    category: "accesories",
    stock:5
  },
  {
    name: "Passport Holder Neck",
    photo:"https://m.media-amazon.com/images/I/71Jve2P0eCL._AC_UX522_.jpg",
    description: "PERFECT FOR TRAVEL - COMFORTABLE, LIGHTWEIGHT, AND WATER RESISTANT PASSPORT AND VACCINE CARD HOLDER designed to offer you a safe and secure location to store valuables , passports, and credit cards.",
    price: 18,
    category: "accesories",
    stock:5
  },
  {
    name: "URBEST Luggage Cover Protector",
    photo:"https://m.media-amazon.com/images/I/61r8MM04o6L._AC_SY550_.jpg",
    description: "Head-to-toe Protection: Perfectly tailored for almost all suitcases, the luggage cover provides protection from all the dirt, scuffs, and scratches that usually come with checking luggage when traveling – ensuring your suitcase arrives as clean as the day it departs.",
    price: 16,
    category: "accesories",
    stock:9
  },
  {
    name: "Digital Luggage Scale",
    photo:"https://m.media-amazon.com/images/I/61ledwy+gcL._AC_SX425_.jpg",
    description:" PRECISION ACCURACY. Capacity: 110lb / 50kg, Graduation: 0.1lb / 50g, Unit: lb / kg /oz / g. EASY TO READ - Auto-off functions , auto-lock display. Long life lithium battery included.",
    price: 9,
    category: "accesories",
    stock:13
  },
  {
    name: "Shintop 11 pack Travel Bottles",
    photo:"https://m.media-amazon.com/images/I/41uUqW-HzKL._SY300_SX300_QL70_FMwebp_.jpg",
    description:"Designed for travel essentials. Our 11 pack reusable travel bottles set with 1 waterproof bag, 2 pcs silicone bottles (3oz/90ml), 2 pcs silicone bottles(2oz/60ml), 2 pcs spray bottles(1.05oz/30ml), 4 pcs cream boxs(0.35oz/10ml), 1pcs funnels, labels, brush and 2 pcs spatula!Different accessories for your different needs",
    price: 11,
    category: "accesories",
    stock:7
  },
  {
    name: "Newbealer Travel Iron",
    photo:"https://m.media-amazon.com/images/I/71T1xLQwXEL._AC_SX522_.jpg",
    description:"The mini iron is designed with a dual-voltage switch, which allows you to bring it anywhere worldwide. 300 watts of power removes wrinkles from almost any fabric for photo-worthy outfits.",
    price: 23,
    category: "accesories",
    stock:3
  },
  {
    name: "SUPFINE 2 Pack Waterproof Phone Pouch",
    photo:"https://m.media-amazon.com/images/I/71bsAu+tF+L._AC_SX679_.jpg",
    description:"Display Universal Size 9 inches floating bag capacity fits all smartphones-Compatible. IPX8 certified professional floating waterproof cell phone pouch is specially designed for outdoor activities.",
    price: 15,
    category: "accesories",
    stock:5
  },
  {
    name: "Dog Water/Food Bottle",
    photo:"https://m.media-amazon.com/images/I/81gEQ3fdLnL._AC_SX679_.jpg",
    description:"Avelora water bottle can hold max 19 ounces (550 ml) of water and 100 g food. It not only ensures dog drinking water easily but also cat, rabbit or other small pet to drinking water easily.",
    price: 17,
    category: "pets",
    stock:5
  },
  {
    name: " Pet Travel Carrier",
    photo:"https://m.media-amazon.com/images/I/91Y6h3kNrxL._AC_SY879_.jpg",
    description:"Recommended max load of 8 lbs (3.6 kg). Please do not choose your carrier based on weight--please reference your pet's length and height in selecting a carrier size.",
    price: 29,
    category: "pets",
    stock:5
  },
  {
    name: "Dog Seat Cover",
    photo:"https://m.media-amazon.com/images/I/71aO4wyv8SL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    description:"URPOWER dog seat cover with side flaps can protect not only your backseat but also the car door from scratches.",
    price: 34,
    category: "pets",
    stock:3
  },
  {
    name: "Dog Travel Bag",
    photo:"https://m.media-amazon.com/images/I/81m4psVSrpL._AC_SX679_.jpg",
    description:"Large Capacity and Functional:This pet travel bag has a large inner compartment to store pet treats, toys, and other pet supplies for dogs and cats!Comes with multiple functional pockets and built-in adjustable flap to stay flexible and organized.Enough storage space for all your pet's essentials.",
    price: 34,
    category: "pets",
    stock:2
  },
  {
    name: "Phone Holder",
    photo:"https://m.media-amazon.com/images/I/61xHQoosSAL._AC_SX569_.jpg",
    description:"This travel essential phone holder helps to free up your hands and enjoy travel. You can mount it to various seat backs or tray table during a flight in order to watch a movie. ",
    price: 11,
    category: "accesories",
    stock:6
  },
  
  
  
];

async function loadProducts() {
  for (const productData of products) {
    try {
      // Buscar el ObjectId de la categoría correspondiente
      const category = await Category.findOne({ name: productData.category });

      if (category) {
        // Asignar el ObjectId de la categoría al producto
        productData.category = category._id;

        // Crear un nuevo producto y guardarlo en la base de datos
        const product = new Product(productData);
        await product.save();
        console.log(`Producto ${product.name} guardado en la base de datos`);
      } else {
        console.log(`La categoría '${productData.category}' no se encontró en la base de datos.`);
      }
    } catch (error) {
      console.log(`Error al intentar guardar el producto ${productData.name}: ${error}`);
    }
  }
}

// Llama a la función para cargar los productos
loadProducts();