import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import Welcome from "./pages/Welcome"
import Letter from "./pages/Letter"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Welcome />} />
      <Route path="/letter" element={<Letter />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
)
