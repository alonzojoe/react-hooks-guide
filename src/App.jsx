import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "@/Layouts/RootLayout";
import NotFound from "@/pages/error/NotFound";
import HookUseState from "@/pages/use-state/HookUseState";
import HookUseReducer from "@/pages/use-reducer/HookUseReducer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/use-state" element={<HookUseState />} />
          <Route path="use-reducer" element={<HookUseReducer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
