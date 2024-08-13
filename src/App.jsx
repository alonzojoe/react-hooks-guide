import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "@/Layouts/RootLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
