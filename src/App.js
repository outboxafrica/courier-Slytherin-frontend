import AppContextProvider from './context/AppContext';
import './App.css';

import Shop from './views/Shop';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Shop />
      </AppContextProvider>
    </div>
  );
}

export default App;
