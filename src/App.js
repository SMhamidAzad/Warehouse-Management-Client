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

function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
