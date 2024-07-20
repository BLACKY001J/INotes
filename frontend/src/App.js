import Nav from "./components/Nav";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home"
import NoteList from "./components/NotesList";
import Update from "./components/Update";
import About from "./components/About";

function App() {
  return (
    <>                    
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<NoteList />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
