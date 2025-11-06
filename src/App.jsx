import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

// Lazy loading для страниц
const Home = lazy(() => import("./pages/Home"));
const CatalogFood = lazy(() => import("./pages/CatalogFood"));
const CatalogDevice = lazy(() => import("./pages/CatalogDevice"));
const Contacts = lazy(() => import("./pages/Contacts"));

// Компонент загрузки
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '200px',
    fontSize: '18px',
    color: '#E6007E'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #E6007E',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginRight: '10px'
    }}></div>
    Загрузка...
  </div>
);

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogFood" element={<CatalogFood />} />
          <Route path="/catalogDevice" element={<CatalogDevice />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
