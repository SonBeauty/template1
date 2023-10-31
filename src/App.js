import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Template1 from "./pages/Template1/Template1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/template1" element={<Template1 />} />
    </Routes>
  );
}

export default App;
