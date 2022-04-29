import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';

function App() {
  
  return (
    <div>
       <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
       </Routes>
       <Footer></Footer>
       
    </div>
  );
}

export default App;
