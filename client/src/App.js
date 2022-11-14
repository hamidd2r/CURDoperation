
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar';
// import Home from './components/Home';
// import AddEmployee from './components/AddEmployee';
import { Route, Routes} from 'react-router-dom'
// import Edit from './components/Edit';
// import Details from './components/Details';
// import Uselogin from './components/Uselogin';
// import Product from './components/Product';
// import Aproduct from './components/Aproduct';
// import Uproduct from './components/Uproduct';
import Logout from './components/Logout';
import Profile from './components/Profile';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <>
     <Navbar/>
   

     <Routes>

     <Route element={<PrivateComponent/>}>
    <Route path='/' element={<ProductList/>}></Route>
    <Route path='/add' element={<AddProduct/>}></Route>
    <Route path='/update/:id' element={<UpdateProduct/>}></Route>
    <Route path='/logout' element={<Logout/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
</Route>

    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
   

    </Routes>

    </>
  );
}

export default App;
