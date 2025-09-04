import { ModeToggle } from "./mode-toggle";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="sticky top-0">
      <div className="mx-auto max-w-3xl px-10 py-8">
        <nav className="flex items-center content-center justify-center">
          <ul className="flex gap-4">
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
            <div>
              <ModeToggle />
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
