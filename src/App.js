import "./App.css";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import ProductDetails from "./pages/ProductDetails";
import RegisterPage from "./pages/RegisterPage";
import AdminPage from "./pages/AdminPage";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <BackToTop />
      <AdminPage />
      <ProductDetails />
      <LoginPage />
      <RegisterPage />
    </div>
  );
}

export default App;
