import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <main>
        <section>
          <h1>about me</h1>
        </section>
        <div>experience</div>
        <section>
          <h1>projects</h1>
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;
