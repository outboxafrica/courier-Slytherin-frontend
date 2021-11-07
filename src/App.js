import AppContextProvider from './Contexts/AppContext';
import './App.css';

import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        {/* <Shop /> */}
        {/* <Cart /> */}
        <Admin />
      </AppContextProvider>
    </div>
  );
}

export default App;
