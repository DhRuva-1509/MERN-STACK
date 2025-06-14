import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Register from './pages/Authentication/Register.jsx';

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
     </Router>
    </>
  )
}

export default App
