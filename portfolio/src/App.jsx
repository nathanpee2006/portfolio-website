import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Background from "./sections/Background";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <div className="mx-auto max-w-3xl flex flex-col px-10">
        <main>
          <article className="mt-8 flex flex-col gap-16 pb-16">
            <Hero />
            <Background />
            <Projects />
          </article>
        </main>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
