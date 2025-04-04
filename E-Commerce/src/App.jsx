import {BrowserRouter, Routes, Route} from "react-router-dom";
import Product from "./Components/Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path = "/" element = {<Product/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
