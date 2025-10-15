import { FileUser, Github, Mail } from "lucide-react";
import photo from "../assets/nathan-palileo.jpg";

export default function Hero() {
  return (
    <section className="flex gap-8">
      <div>
        <h1 className="text-4xl">its me nathan. ✌️</h1>
        <p>19yo aspiring nz software engineer</p>
        <p>wannabe full-stack</p>
        <div className="flex mt-6 items-center flex-wrap gap-4">
          <a href="./public/Nathan Palileo Portfolio.pdf" download="portfolio">
            <FileUser />
          </a>
          <a href="https://github.com/nathanpee2006" target="_blank">
            <Github />
          </a>
          <a href="mailto:nathan.palileo23@gmail.com">
            <Mail />
          </a>
        </div>
      </div>
      <img
        src={photo}
        alt="picture of nathan palileo"
        height={300}
        width={300}
      />
    </section>
  );
}
