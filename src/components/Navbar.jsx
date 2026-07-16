import Container from "./Container";
import Button from "./Button";
import navLinks from "../data/navLinks";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/70 backdrop-blur-lg border-b border-slate-800/50 z-50">
      <Container>
        <nav className="h-16 flex items-center justify-center">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.path}
                  className="text-gray-300 font-medium hover:text-cyan-400 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;