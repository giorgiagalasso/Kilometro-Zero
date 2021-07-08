const mongoose = require("mongoose");
const Product = require("../models/Product.model");
//const Book = require("../models/Book.model");

const MONGO_URI =
  "mongodb+srv://admin:admin1996@cluster0.q81ks.mongodb.net/Cluster0?retryWrites=true&w=majority";
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
    rating: "9",
    price: "29.90€",
    helpfulUrl: "https://putacupinit.com/",
    imageUrl:
      "https://res.cloudinary.com/b-jb/image/upload/v1625475888/kilometro-zero/LUNETTE_jrvlzr.jpg",
  },

  {
    name: "La Saponaria",
    category: "Self Care",
    description: "Solid, plastic free moisturizer",
    rating: "8",
    price: "9€",
    helpfulUrl: "https://www.lasaponaria.it/",
    imageUrl:
      "https://res.cloudinary.com/b-jb/image/upload/v1625475888/kilometro-zero/LA_SAPONARIA_spss4k.jpg",
  },
  {
    name: "Puranna",
    category: "Self Care",
    description: "Make up remover reusable squares",
    rating: "10",
    price: "3.90€",
    helpfulUrl: "https://www.purannaeco.com/catalog",
    imageUrl:
      "https://res.cloudinary.com/b-jb/image/upload/v1625475889/kilometro-zero/PURANNA_phson7.jpg",
  },

  {
    name: "Le Papier",
    category: "Self Care",
    description: "Pencil Shaped Lip-Stick",
    rating: "10",
    price: "14.90€",
    helpfulUrl: "https://le-papier.de/en/",
    imageUrl:
      "https://res.cloudinary.com/b-jb/image/upload/v1625475888/kilometro-zero/PAPIER_dx908d.jpg",
  },

  {
    name: "24 Bottles",
    category: "To Go",
    description: "Re usable water bottle",
    rating: "9",
    price: "20€",
    helpfulUrl: "https://www.24bottles.com/product-category/urban-bottle/",
    imageUrl:
      "https://res.cloudinary.com/b-jb/image/upload/v1625475888/kilometro-zero/24BOTTLE_egb0qe.png",
  },

  {
    name: "Eco candela",
    category: "Eco Home",
    description: "Plastic free, Vegan candle",
    rating: "8",
    price: "19.90€",
    helpfulUrl: "https://makeyougreener.com/categoria-ecohome/",
    imageUrl:
      "https://res.cloudinary.com/b-jb/image/upload/v1625480027/kilometro-zero/CANDELA_te5n0j.jpg",
  },

  {
    name: "Tru earth",
    category: "Eco Home",
    description: "Laundry eco strips",
    rating: "7",
    price: "17.99€",
    helpfulUrl: "https://www.tru.earth/",
    imageUrl:
      "https://res.cloudinary.com/b-jb/image/upload/v1625475888/kilometro-zero/TRU_EARTH_al6hmy.jpg",
  },
  {
    name: "Skizo",
    category: "Eco Home",
    description: "Microplastics laundry bag",
    rating: "10",
    price: "25€",
    helpfulUrl:
      "https://skizoshoes.com/produto/stop-microplastics-laundry-bag/",
    imageUrl:
      "https://res.cloudinary.com/b-jb/image/upload/v1625475889/kilometro-zero/SKIZO_eelvgg.png",
  },

  {
    name: "Keepcup",
    category: "To Go",
    description: "Take away cup",
    rating: "8",
    price: "15€",
    helpfulUrl: "https://au.keepcup.com/shop/plastic-cups",
    imageUrl:
      "https://res.cloudinary.com/b-jb/image/upload/v1625475888/kilometro-zero/KEEPCUP_hizteh.png",
  },
  {
    name: "Sol De Ibiza",
    category: "Self Care",
    description: "Natural mineral sun screen 30spf",
    rating: "8",
    price: "25€",
    helpfulUrl: "https://soldeibiza.com/collections/all",
    imageUrl:
      "https://res.cloudinary.com/b-jb/image/upload/v1625475888/kilometro-zero/IBIZA_toiqpo.jpg",
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
