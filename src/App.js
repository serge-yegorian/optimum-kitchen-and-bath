import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
