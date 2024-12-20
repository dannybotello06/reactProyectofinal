import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../services/firebase";

const docData = {
     name: "Caramelo blando COFFEE DELIGHT de café x 100un",
     category: "dulces",
     description: "Caramelo blando COFFEE DELIGHT de café x 100un",
     price:1022,
     img:"https://colombina-commerce-p1.s3.amazonaws.com/products/images/7702011010612/7702011010612_A1N1_es_s0.jpg",
     stock: 30
};
await setDoc(doc(db, "products", "one"), docData);