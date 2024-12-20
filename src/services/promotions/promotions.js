const promotions = [
  {
    id: "1",
    name: "Descuento 10% Caramelos",
    img: "https://colombina.com/uploads/promos/f-0-40-17840291_x850LQsl_Banner-1110px-x-424px.png"
  
  },
  {
    id: "2",
    name: "Pague 2 lleve 1",
    img: "https://colombina.com/uploads/promos/Banner-principal.png"

  },
  {
    id: "3",
    name: "Nuevos Productos",
    img: "https://colombina.com/uploads/custom-page/PDF2024/Banner%201110x424%20Colombina%20Market%20Tiktok.png",

  }
];

// obtener todos los productos
export const getPromotions = () => {
  return new Promise((resolve) => {
 
      resolve(promotions);
   
  });
};



