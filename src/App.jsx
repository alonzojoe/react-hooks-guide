import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/home/Home";
import RootLayout from "@/Layouts/RootLayout";
import NotFound from "@/pages/error/NotFound";
import HookUseState from "@/pages/use-state/HookUseState";
import HookUseReducer from "@/pages/use-reducer/HookUseReducer";
import HookUseEffect from "@/pages/use-effect/HookUseEffect";
import HookUseRef from "@/pages/use-ref/HookUseRef";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/use-state" element={<HookUseState />} />
          <Route path="use-reducer" element={<HookUseReducer />} />
          <Route path="use-effect" element={<HookUseEffect />} />
          <Route path="use-ref" element={<HookUseRef />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
