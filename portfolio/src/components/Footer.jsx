import { useState, useEffect } from "react";
import Container from "./Container";

export default function Footer() {
  const [count, setCount] = useState(0);

  // TODO: use the POST method for the fetch request
  useEffect(() => {
    async function incrementCount() {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL, {
          method: "POST",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setCount(data.count);
      } catch (error) {
        console.error("Error occured:", error);
      }
    }
    incrementCount();
  }, []);

  return (
    <footer className="mt-12 border-t py-6 text-sm text-muted-foreground">
      <Container className="flex flex-row justify-between">
        <section>
          <p>@ 2025 Nathan's Domain</p>
        </section>
        <section>
          <p>total visits: {count}</p>
        </section>
      </Container>
    </footer>
  );
}
