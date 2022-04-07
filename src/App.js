import './App.css';
import { AddCartContextProvider } from './Context/cartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ItemIndex from './Components/ItemIndex/ItemIndex';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AddCartContextProvider>
        <BrowserRouter>
          <NavBar />
          <div className="App-header">
            <Routes>
              <Route path='/' element={<ItemIndex />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AddCartContextProvider>
    </div>
  );
}

export default App;
