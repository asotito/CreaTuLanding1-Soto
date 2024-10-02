import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartDetail from './components/CartDetail';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
