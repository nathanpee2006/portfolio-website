import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="sticky top-0">
      <div className="mx-auto max-w-3xl px-10 py-8">
        <nav className="flex items-center content-center justify-center">
          <ul className="flex gap-4">
            <li>home</li>
            <li>projects</li>
            <li>contact</li>
            <div>
              <ModeToggle />
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
