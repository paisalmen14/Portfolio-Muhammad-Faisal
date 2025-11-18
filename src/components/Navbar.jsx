import { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setActive(current > 50); // shrink effect tetap bisa
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle =
    "relative text-white/80 font-medium transition duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff76e9] hover:via-[#7f6bff] hover:to-[#007bff]";

  const handleLinkClick = () => setOpenMenu(false);

  return (
    <nav
      className={`
        fixed left-0 right-0 z-50 transition-all duration-500
        ${active ? "py-3" : "py-6"}
        top-0
      `}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-2xl
            transition-all duration-500 border
            ${active
              ? "bg-white/5 backdrop-blur-xl border-white/10 shadow-lg"
              : "bg-white/5 backdrop-blur-md border-white/5"
            }`}
        >
          {/* LOGO */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#ff76e9] via-[#7f6bff] to-[#007bff] bg-clip-text text-transparent drop-shadow-md">
            Muhammad Faisal
          </h1>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 text-lg">
            <li><a href="#home" className={linkStyle}>Home</a></li>
            <li><a href="#about" className={linkStyle}>About</a></li>
            <li><a href="#projects" className={linkStyle}>Projects</a></li>
            <li><a href="#experience" className={linkStyle}>Experience</a></li>
            <li><a href="#contact" className={linkStyle}>Contact</a></li>
          </ul>

          {/* HAMBURGER */}
          <button
            className="text-white text-3xl md:hidden z-[60]"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <ul
        className={`
          md:hidden fixed top-0 right-0 h-full w-2/3
          backdrop-blur-xl bg-white/5 border-l border-white/10 shadow-xl
          p-10 pt-28 flex flex-col gap-8 text-xl
          transition-transform duration-300 z-[55]
          ${openMenu ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <li><a onClick={handleLinkClick} href="#home" className={linkStyle}>Home</a></li>
        <li><a onClick={handleLinkClick} href="#about" className={linkStyle}>About</a></li>
        <li><a onClick={handleLinkClick} href="#projects" className={linkStyle}>Projects</a></li>
        <li><a onClick={handleLinkClick} href="#experience" className={linkStyle}>Experience</a></li>
        <li><a onClick={handleLinkClick} href="#contact" className={linkStyle}>Contact</a></li>
      </ul>

      {openMenu && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40"
          onClick={handleLinkClick}
        />
      )}
    </nav>
  );
};

export default Navbar;
