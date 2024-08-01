import './App.css';
import { AddCartContextProvider } from './Context/cartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ItemIndex from './Components/ItemIndex/ItemIndex';
import StockConsulta from './Components/StockConsulta/StockConsulta';
import StockConsultaCategoria from './Components/StockConsultaCategoria/StockConsultaCategoria';
import ItemListCables from './Components/ItemListContainer/ItemListCables';
import ItemListCartuchos from './Components/ItemListContainer/ItemListCartuchos';
import ItemNuevo from './Components/ItemNuevo/ItemNuevo';
import StockRegistered from './Components/StockRegistered/StockRegistered';

import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemListContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import FormBuy from './Components/FormBuy/FormBuy';
import PurchaseCompleted from './Components/PurchaseCompleted/PurchaseCompleted';
import InfoEvento from './Components/InfoEvento/InfoEvento';
import Footer from './Components/Footer/Footer';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <AddCartContextProvider>
        <BrowserRouter>
          <ScrollToTop />
          <NavBar />
          <div className="App-header">
            <Routes>
              <Route path='/' element={<ItemIndex />}></Route>
              <Route path='/home' element={<ItemIndex />}></Route>
              <Route path='/stock' element={<StockConsulta />}></Route>
              <Route path='/consultar-por-categoria' element={<StockConsultaCategoria />}></Route>
              <Route path='/consultar-por-cables' element={<ItemListCables />}></Route>
              <Route path='/consultar-por-cartuchos' element={<ItemListCartuchos />}></Route>
              <Route path='/agregar-producto' element={<ItemNuevo />}></Route>
              <Route path='/stockRegistered' element={<StockRegistered />}></Route>
              <Route path='/category/:categoryId' element={<ItemListCartuchos />}></Route>
              <Route path='/detail/:paramId' element={<ItemDetailContainer />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/formBuy' element={<PrivateRoute privType='formBuy'><FormBuy /></PrivateRoute>}></Route>
              <Route path='/purchaseCompleted' element={<PrivateRoute privType='purchaseCompleted'><PurchaseCompleted /></PrivateRoute>}></Route>
              <Route path='/infoEvento' element={<InfoEvento />}></Route>
              <Route path='*' element={<h2>Not found</h2>}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AddCartContextProvider>
    </div>
  );
}

export default App;
