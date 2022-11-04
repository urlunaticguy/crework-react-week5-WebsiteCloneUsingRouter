import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import ListingIndividual from "./Components/ListingIndividual";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listings/:id" element={<ListingIndividual />} />
    </Routes>
  );
}

export default App;
