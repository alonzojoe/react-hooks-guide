import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "@/Layouts/RootLayout";
import HookUseState from "@/pages/HookUseState";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/use-state" element={<HookUseState />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
