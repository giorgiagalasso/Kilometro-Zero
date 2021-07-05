const mongoose = require("mongoose");
const Product = require("../models/Product.model");
//const Book = require("../models/Book.model");


const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/Kilometro-Zero";
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});


const nativeProducts = [
  {
    
    name: "Lunette",
    category: "Self Care",
    description: "Menstural Cup",
    rating: "8.5",
    price: "29.90€",
    helpfulUrl: "https://putacupinit.com/",
    reviews: [{ 
        username: String,
        comment: String,
    }],
    imageUrl: String,
  }, 

  {
    name: "La Saponaria",
    category: "Self Care",
    description: "Solid, plastic free moisturizer",
    rating: "8",
    price: "9€",
    helpfulUrl: "https://www.lasaponaria.it/",
    reviews: [{ 
        username: String,
        comment: String,
    }],
    imageUrl: String,
  },
  {
    
    name: "Puranna",
    category: "Self Care",
    description: "Make up remover reusable squares",
    rating: "10",
    price: "3.90€",
    helpfulUrl: "https://www.purannaeco.com/catalog",
    reviews: [{ 
        username: String,
        comment: String,
    }],
    imageUrl: String,
  },

  {
    
    name: "Le Papier",
    category: "Self Care",
    description: "Pencil Shaped Lip-Stick",
    rating: "9.5",
    price: "14.90€",
    helpfulUrl: "https://le-papier.de/en/",
    reviews: [{ 
        username: String,
        comment: String,
    }],
    imageUrl: String,
  },

  {
    
    name: "24 Bottles",
    category: "To go",
    description: "Re usable water bottle",
    rating: "10",
    price: "20€",
    helpfulUrl: "https://www.24bottles.com/product-category/urban-bottle/",
    reviews: [{ 
        username: String,
        comment: String,
    }],
    imageUrl: String,
  },

  {
    
    name: "Eco candela",
    category: "Eco home",
    description: "Plastic free, Vegan candle",
    rating: "9",
    price: "19.90€",
    helpfulUrl: "https://makeyougreener.com/categoria-ecohome/",
    reviews: [{ 
        username: String,
        comment: String,
    }],
    imageUrl: String,
  },

  {
    
    name: "Tru earth",
    category: "Eco home",
    description: "Laundry eco strips",
    rating: "8.5",
    price: "17.99€",
    helpfulUrl: "https://www.tru.earth/",
    reviews: [{ 
        username: String,
        comment: String,
    }],
    imageUrl: String,
  },
  {
    
    name: "Skizo",
    category: "Eco home",
    description: "Microplastics laundry bag",
    rating: "10",
    price: "25€",
    helpfulUrl: "https://skizoshoes.com/produto/stop-microplastics-laundry-bag/",
    reviews: [{ 
        username: String,
        comment: String,
    }],
    imageUrl: String,
  },

  {
    
    name: "Keepcup",
    category: "To go",
    description: "Take away cup",
    rating: "9.5",
    price: "15€",
    helpfulUrl: "https://au.keepcup.com/shop/plastic-cups",
    reviews: [{ 
        username: String,
        comment: String,
    }],
    imageUrl: String,
  },
  {
    
    name: "Sol De Ibiza",
    category: "Self care",
    description: "Natural mineral sun screen 30spf",
    rating: "8.5",
    price: "25€",
    helpfulUrl: "https://soldeibiza.com/collections/all",
    reviews: [{ 
        username: String,
        comment: String,
    }],
    imageUrl: String,
  },
];

Product.create(nativeProducts)
  .then((productsfromdb) => {
    console.log(`Created ${productsfromdb.length} product`);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while creating books from the DB: ${err}`)
  );
   
   
 