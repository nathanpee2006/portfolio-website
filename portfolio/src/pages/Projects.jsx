import Container from "@/components/Container";
import SampleProjects from "@/sections/SampleProjects";

export default function Projects() {
  return (
    <Container className="flex flex-col">
      <main>
        <article className="mt-8 flex flex-col gap-16 pb-16">
          <SampleProjects showAll={true} />
        </article>
      </main>
    </Container>
  );
}
