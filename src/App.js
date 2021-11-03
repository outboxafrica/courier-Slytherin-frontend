import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      {/* <ProductDetails /> */}
      <div style={{ height: "100vh" }}></div>
    </div>
  );
}

export default App;
