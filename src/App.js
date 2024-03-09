import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import HomePage from './Components/HomePage';


const App = () => {

  return (
    <BrowserRouter >
        <Routes>
        <Route index element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  )
}
// this is the routing page
export default App;