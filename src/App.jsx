import Footer from "./components/Footer";
import Header from "./components/Header";
import Catalog_food from "./pages/Catalog_food";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Catalog_food />
      <Footer />
    </div>
  );
}

export default App;
