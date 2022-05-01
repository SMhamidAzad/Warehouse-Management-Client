import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Blogs from './components/Home/Blogs/Blogs';
import Login from './components/Home/Login/Login/Login';
import NotFound from './components/Shared/NotFound/NotFound';
import SignUp from './components/Home/Login/SignUp/SignUp';
import RequireAuth from './components/Home/Login/RequireAuth/RequireAuth'
import Inventory from './components/Home/Inventory/Inventory';
import ManageInventory from './components/Home/MangeInventory/ManageInventory';
import AddInventory from './components/Home/AddInventory/AddInventory';
import MyItems from './components/Home/MyItems/MyItems';

function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>
        <Route path='/myItem' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
