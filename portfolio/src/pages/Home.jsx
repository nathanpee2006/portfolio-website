import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import Background from "../sections/Background";
import Projects from "../sections/Projects";

export default function Home() {
  return (
    <>
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
    </>
  );
}
