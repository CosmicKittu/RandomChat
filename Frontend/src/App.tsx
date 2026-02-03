import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useState, useEffect } from "react";
import Home from "./Pages/home";
import Login from "./Pages/login";
import Chat from "./Pages/chat";
import About from "./Pages/about";

function App() {
  // const [user, setUser] = useState(null)
  // const [loading, setloading] = useState(true)

  // useEffect(() => {

  // }, [])
  return (
    <>
      <BrowserRouter>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
