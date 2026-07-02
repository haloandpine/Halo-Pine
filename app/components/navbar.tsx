export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-end px-8 py-6">

        <div className="hidden md:flex gap-10 text-white uppercase tracking-widest text-sm">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Meet Your Planner</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}