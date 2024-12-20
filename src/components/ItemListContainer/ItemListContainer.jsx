import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { collection, getDocs, query, where,setDoc,doc } from "firebase/firestore";
import { useNotification } from "../../context/NotificationContext";
function ItemListContainer({greetings}) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
    const {setNotification} = useNotification()
    const docData = {
      name: "Barra de cereal COLOMBINA 100% con fibra x 138g",
      category: "pasabocas",
      description: "Barra de cereal COLOMBINA 100% con fibra x 138g",
      price:7361,
      img:"https://colombina-commerce-p1.s3.amazonaws.com/products/images/7702011128836/7702011128836_A1R1_es_s0.jpg",
      stock: 100
 };
     setDoc(doc(db, "products", "21"), docData);
 
    useEffect(()=>{
      setLoading(true)
      const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products")
      
      getDocs(collectionRef)
        .then((querySnapshot)=>{
           const products = querySnapshot.docs.map((doc)=>{
            return {id: doc.id, ...doc.data()}
          })
          setProducts(products)
        })
      .catch(() => {
        setNotification("Error", `No es posible cargar los productos`)
      })
      .finally(()=>{
        setLoading(false);
      })
    },[categoryId])

    if(loading) {




      return (
        <h3
          style={{
            color: "white",
            backgroundColor: "#d68fff",
            textAlign: "center",
          }}
        >
          Cargando productos...
        </h3>
      );
    }

  return (
    <>
      <h2>{greetings}</h2>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer