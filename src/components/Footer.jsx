const Footer = () => {
  return (
    <div className="  bg-gray-900">
      <footer className="footer w-11/12 mx-auto text-white/70 py-10">
        <div>
          <h2 className="font-bold text-xl md:text-2xl">Tasiky</h2>
          <p className="w-[70%]">
            Taskify is a simple and efficient task management app designed to
            help users organize their daily tasks effortlessly.
          </p>
        </div>
        <nav>
          <h6 className="font-bold text-lg mb-4 text-white/80">About</h6>
          <a className=" link-hover">Home</a>
          <a className=" link-hover">Service</a>
          <a className="link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="font-bold text-lg mb-4 text-white/80">Company</h6>
          <a className="link-hover">Why Taskify</a>
          <a className="link-hover">About</a>
        </nav>
        <nav>
          <h6 className="font-bold text-lg mb-4 text-white/80">Support</h6>
          <a className="link-hover">Terms of use</a>
          <a className="link-hover">Privacy policy</a>
          <a className="link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
