import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-12 border-t py-6 text-sm text-muted-foreground">
      <Container className="flex flex-col">
        <section>
          <p>@ 2025 Nathan's Domain</p>
        </section>
      </Container>
    </footer>
  );
}
