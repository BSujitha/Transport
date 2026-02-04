import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookLorry from "./components/BookLorry";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-lorry" element={<BookLorry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
