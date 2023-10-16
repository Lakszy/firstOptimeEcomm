import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
import FilteredProducts from "./Components/FilterProducts/FilteredProducts";
import SingleProduct from "./Components/FilterProducts/SingleProduct";
import SimpleRegistration from "./Components/CheckOut/Checkout";

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={ <Main />}
        />
        <Route
          path="/filteredProducts/:type"
          element={<FilteredProducts />}
        />
        <Route
          path="/filteredProducts/:type/:id"
          element={<SingleProduct />}
        />
        <Route
          path="/checkout/lakszy"
          element={<SimpleRegistration />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

