import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#080a09]/80 backdrop-blur-xl">
      <div className="container-custom flex h-20 items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          Nagaraj Shripad Bhat<span className="green-text">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="text-sm text-white/60 transition hover:text-white"
            >
              {name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#b7ffcf]/30 px-5 py-2 text-sm text-[#b7ffcf] transition hover:bg-[#b7ffcf] hover:text-black"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-xl text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-white/10 bg-[#080a09]/95 px-5 py-5 md:hidden">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-white/70 transition hover:text-white"
            >
              {name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-full border border-[#b7ffcf]/30 px-5 py-2 text-[#b7ffcf]"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}