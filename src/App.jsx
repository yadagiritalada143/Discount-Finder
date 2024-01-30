import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import MyWishList from './Pages/MyWishList';
import BlogPage from './Pages/BlogPage';
import Help from './Pages/Help';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
         <Routes>
         <Route path='' element={<HomePage />} />
          <Route path='/aboutus' element={<AboutUs />}/>
          <Route path='/mywishlist' element={<MyWishList />}/>
          <Route path='/blogpage' element={<BlogPage />}/>
          <Route path='/help' element={<Help />}/>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
