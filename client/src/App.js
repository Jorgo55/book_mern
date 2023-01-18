import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./components/Update";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/edit/:id" element={<Update />} />
          <Route path="/view/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
