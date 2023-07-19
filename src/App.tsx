import { Routes, Route } from "react-router-dom";
import Countries from "./pages/Countries";
import Selected from "./pages/Selected";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/selected/:name" element={<Selected />} />
      </Routes>
    </>
  );
}
