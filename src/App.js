import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Team from "./pages/Team/Team";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path = "/blog" element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
