import "./App.css";
import Filter from "./Filter.js";
import Search from "./Search/Search.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./Countup/Counter";
import Productview from "./Productview/Productview";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Filter />} />
          <Route exact path="/Search" element={<Search />} />
          <Route exact path="/Counter" element={<Counter />} />
          <Route exact path="/Productview" element={<Productview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
