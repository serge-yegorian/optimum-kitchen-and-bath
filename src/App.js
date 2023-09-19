import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/team" element={<Team/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
