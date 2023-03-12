import './App.css';
import Landing from "./screens/Landing";
import Home from "./screens/Home";
import Week from "./screens/Week";
import Lesson from "./screens/Lesson";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/week/:index" element={<Week />} />
        <Route path="/week/:weekNumber/day/:dayNumber" element={<Lesson />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
