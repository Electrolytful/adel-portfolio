import { Routes, Route } from "react-router-dom";

import { Home, AboutMe, GetInTouch, Error } from "./pages";

import { Layout } from "./components";

export default function App() {
  return (
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="about-me" element={<AboutMe />} />
            <Route path="get-in-touch" element={<GetInTouch />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
  );
}
