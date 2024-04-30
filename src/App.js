import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import AddBook from "./components/AddBook";
import Home from "./components/Home";
import Books from "./components/book/Books";
import About from "./components/About";
import BookDetails from "./components/book/BookDetails";

function App() {
  return (
    <div className="relative bg-gradient-to-bl from-slate-950 to-zinc-900  w-full min-h-screen text-zinc-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/add" element={<AddBook />} eaxct />
        <Route path="/books" element={<Books />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/books/:id" element={<BookDetails />} exact />
      </Routes>
    </div>
  );
}

export default App;
