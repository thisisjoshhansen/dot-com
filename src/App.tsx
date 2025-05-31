import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import VersionPage from "./pages/VersionPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/version" element={<VersionPage />} />
    </Routes>
  );
}

export default App;
