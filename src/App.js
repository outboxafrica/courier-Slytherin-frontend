import "./App.css";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import ProductDetails from "./pages/ProductDetails";
import RegisterPage from "./pages/RegisterPage";
import AdminPage from "./pages/AdminPage";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import AppContextProvider from './Contexts/AppContext';

import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Admin from './pages/Admin/Admin';
function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Navbar />
      <Home />
      <BackToTop />
      <AdminPage />
      <ProductDetails />
      <LoginPage />
      <RegisterPage />


      
        <Shop />
        <Cart />
        <Admin />
      </AppContextProvider>
    </div>
  );
}

export default App;
