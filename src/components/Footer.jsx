const Footer = () => {
  return (
    <footer className="mt-32 py-5 w-full border-t border-white/10">
      <div className="flex items-center justify-between text-base opacity-80 gap-3">

        <span className="text-2xl font-bold bg-gradient-to-r from-[#ff76e9] to-[#007bff] bg-clip-text text-transparent">
          Muhammad Faisal
        </span>

        <span className="text-lg">
          © {new Date().getFullYear()} — All Rights Reserved.
        </span>

      </div>
    </footer>
  );
};

export default Footer;
