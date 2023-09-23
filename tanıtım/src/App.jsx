import './App.css'
import Navbar from "./layouts/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Products from "./components/Products.jsx";
import Footer from "./layouts/Footer.jsx";

function App() {

  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/about" exact element={<About/>}/>
            <Route path="/contact" exact element={<Contact/>}/>
            <Route path="/products" exact element={<Products/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
