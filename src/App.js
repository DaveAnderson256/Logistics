
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './componets/Welcome';
import NavBar from './componets/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
         <NavBar />
        <Routes>
          
        </Routes>
       
      </Router>
     
    </div>
  );
}

export default App;
