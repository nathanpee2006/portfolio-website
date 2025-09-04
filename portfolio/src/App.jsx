import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./sections/Projects";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
