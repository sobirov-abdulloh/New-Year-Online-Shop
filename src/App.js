import "./App.css";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Basket from "./pages/Basket/Basket";
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import ProductDeteil from "./pages/ProductDeteil/ProductDeteil";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Katalog from "./pages/Katalog/Katalog";
import ProtectedRoutes from "./ProtectedRoutes";
import { useSelector } from "react-redux";
import Order from "./pages/Order/Order";
import Products from "./components/Products/Products";

function App() {
  const users = useSelector((state) => state.users.users);
  console.log(users)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/basket" element={<Basket />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/katalog" element={<Katalog />} />

          <Route path="/order" element={<Order />} />

          <Route path="/productDeteil/:id" element={<ProductDeteil />} />
          <Route path="/product" element={<Products />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
