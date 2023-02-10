import React from 'react'
import { ToastContainer } from 'react-toastify';
import Navbar from './component/Navbar';
import {Route, Routes} from 'react-router-dom'
import Home from './Screen/Home';
import Edit from './Screen/Edit';
import AddContact from './Screen/AddContact';



const App=()=> {
  return (
    <div className="App">
      {/* /add /edit/:id */}
      <ToastContainer/>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}  />
      <Route  path='/add' element={<AddContact/>} />

      <Route  path='/edit/:id' element={<Edit/>}/>
     </Routes>
     
      
    </div>
  );
}

export default App;
