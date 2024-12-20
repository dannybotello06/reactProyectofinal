import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import NavBar from "./components/NavBar/NavBar";
import Carousel from "./components/CarouselProm/CarouselPromo";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./context/NotificationContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {


  
  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
          
            <NavBar title="Dulceria Colombina" />
            
             <Carousel  />
          

            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route
                exact
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route
                exact
                path="/detail/:productId"
                element={<ItemDetailContainer />}
              />

              <Route exact path="/cart" element={<Cart />} />

              <Route exact path="/checkout" element={<Checkout />} />


               <Route path="*" element={<h1>:( 404 Not found</h1>} /> 
              
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  );
}

export default App;