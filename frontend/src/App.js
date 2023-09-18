
import "./App.css";
import Basket from "./Pages/Basket";

import Meals from "./Pages/Meals"
//import { addItem } from "./Pages/AddItem";
 import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar  />
        <Routes>
          <Route
            path='/'
            element={<Meals />}
          />
          <Route
          path='/cart'
          element={<Basket />}
          />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
  }

export default App;
