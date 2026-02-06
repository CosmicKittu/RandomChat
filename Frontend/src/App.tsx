
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import Chat from "./pages/chat"
import About from "./pages/about"
import Layout from "./layout/sidebar"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Layout />}>
          <Route index element={<h1>hello</h1>} />
          <Route path=":id" element={<h1>hello</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App