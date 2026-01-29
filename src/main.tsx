import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
// import { Landing } from "./pages/landing/Landing.tsx";
import { Blog } from "./pages/blog/blog.tsx";
import { Contact } from "./pages/contact/Contact.tsx";
// import { Intro } from "./pages/intro/Intro.tsx";
import { Error } from "./pages/error/error.tsx";
import { Resume } from "./pages/resume/Resume.tsx";

const redirectParam = new URLSearchParams(window.location.search).get("redirect");
if (redirectParam) {
  window.history.replaceState(null, "", redirectParam);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/natcace-home">
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route  element={<Landing />} /> */}
          {/* <Route path="/intro" element={<Intro />} /> */}
          <Route index element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
