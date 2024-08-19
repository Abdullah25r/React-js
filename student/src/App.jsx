import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Shopping cart/Navbar';
import Products from './components/Shopping cart/pages/Products';
import Footer from './components/Shopping cart/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  
  return (
    <BrowserRouter>
      {/* <Card /> */}
      {/* <Weather/> */}
     {/* <TodoApp/> */}
      {/* <Calculator/> */}
      {/* <Quiz/> */}
      {/* <Markdown/> */}
     
      <Navbar/>
      {/* <Products/> */}
      <Routes>
        <Route path='/' element={<Products></Products>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
