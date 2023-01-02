import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './Components/Homepage';
import Addproduct from './Components/Addproduct';

import 'react-toastify/dist/ReactToastify.css';


const App = () => {

 
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/addproduct" element={<Addproduct/>}></Route>

      

    </Routes>
    
    

    </>
  )
}

export default App;