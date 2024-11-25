import Nav from "./components/Nav";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PagenotFound from "./pages/PagenotFound";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import ShopProvider from "./context/Shop-context";
import Productdetails from "./pages/productdetails";


export default function App() {
  return (

    <ShopProvider>

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PagenotFound />} />
          <Route path="/productdetails" element={<Productdetails />} />
        </Routes>
      </BrowserRouter>
    </ShopProvider>

  )
}
