import './App.css';
import { AddCartContextProvider } from './Context/cartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <AddCartContextProvider>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </AddCartContextProvider>

    </div>
  );
}

export default App;
