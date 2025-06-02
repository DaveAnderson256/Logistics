import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './componets/Welcome';
import NavBar from './componets/Navbar';
import { ProductProvider } from './componets/ProductContext';
import ProductTable from './componets/ProductTable';
import AddProduct from './componets/AddProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductProvider>
          <NavBar />
          <div className='row'>
            <div className='col-sm-10 col-12 me-auto ms-auto mt-4 mb-4'>
              <Routes>
                <Route path="/" element={<><Welcome /><ProductTable /></>} />
                <Route path="/addproduct" element={<AddProduct />} />
              </Routes>
            </div>
          </div>
        </ProductProvider>
      </Router>
    </div>
  );
}

export default App;
