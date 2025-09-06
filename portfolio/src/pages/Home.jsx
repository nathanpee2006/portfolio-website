import Hero from "../sections/Hero";
import Background from "../sections/Background";
import Projects from "../sections/SampleProjects";
import Container from "../components/Container";

export default function Home() {
  return (
    <Container className="flex flex-col">
      <main>
        <article className="mt-8 flex flex-col gap-16 pb-16">
          <Hero />
          <Background />
          <Projects />
        </article>
      </main>
    </Container>
  );
}
