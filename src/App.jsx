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
      {/* <Home /> */}
      {/* <CatalogFood /> */}
      {/* <CatalogDevice /> */}
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
