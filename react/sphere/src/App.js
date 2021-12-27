import './App.scss';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { 
  About, 
  Blog, 
  Home, 
  Products, 
  SingleProduct, 
  Page404 ,
  SignUp
} from './pages';

const App = () => {
  return (
    <div className='App'>
          <Routes> 
            <Route path='/' element={<Layout />}> 

                <Route index element={<Home />} />
                <Route path='about' element={<About />} /> 
                <Route path='blog' element={<Blog />} /> 
                <Route path='products' element={<Products />} /> 
                <Route path='products/:id' element={<SingleProduct />} /> 
                <Route path='signup' element={<SignUp />} />
                <Route path='*' element={<Page404 />} />

            </Route>
        </Routes>
    </div>
  );
}

export default App;
