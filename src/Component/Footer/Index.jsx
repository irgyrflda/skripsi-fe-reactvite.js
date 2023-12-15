import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center bg-gradient-to-r from-sky-500 to-indigo-600 text-white">
      <hr />
      <p className="text-center py-5">Crafted with by <span className="font-black"><Link href="#">@irgyrflda</Link></span></p>
    </footer>
  );
};

export default Footer;
