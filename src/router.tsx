import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/layout";
import Home from "./pages/home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
