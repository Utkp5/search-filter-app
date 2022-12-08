import "./App.css";
import Filter from "./Filter.js";
import Search from "./Search/Search.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Filter />} />
          <Route exact path="/Search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
