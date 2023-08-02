
//import "./App.css"
import Signin from './login/Signin';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Signup from './login/Signup';
import Navbar from './homepage/Navbar';
import Home from './homepage/Home';
import Product from './productpage/Product';
import Profile from './ProfilePage/Profile';
import Collection from './Collectionpage/Collection';
import Add from './Collectionpage/Add';
import Cart from './Cart/Cart';


function App() {
  return (
  /*  <BrowserRouter>
     <Routes>
      <Route path='/' element={<Signin/>} />
      <Route path='/signup' element={<Signup/>} />
     </Routes>
    </BrowserRouter>*/
    <>
    <Profile />
  
     </>
  );
}

export default App;
