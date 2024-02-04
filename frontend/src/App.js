import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Employee from './Employee';
import CreateEmployee from './CreateEmployee';
import UpdateEmployee from './UpdateEmployee';
import Login from './LoginUser'
import Signup from './Signup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/create' element={<CreateEmployee />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/update/:id' element={<UpdateEmployee />}></Route>
        <Route path='/tableView' element={<Employee/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
