import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CatalogDevice from "./pages/CatalogDevice";
import CatalogFood from "./pages/CatalogFood";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogFood" element={<CatalogFood />} />
        <Route path="/catalogDevice" element={<CatalogDevice />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
