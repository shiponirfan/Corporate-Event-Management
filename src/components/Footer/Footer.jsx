import { FaFacebook, FaInstagram, FaLinkedin, FaRegCopyright, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-footer-bg bg-cover bg-no-repeat bg-center">
      <div className="hero-overlay bg-opacity-60 py-24 text-white">
        <footer className=" container mx-auto p-10 ">
            <div className="flex justify-between items-center py-8 mb-12 border-b">
            <Link to="/">
              <h4 className="flex flex-col text-lg">
                <span className="uppercase font-bold text-[26px]">
                  Corporate
                </span>
                Event Management
              </h4>
            </Link>
            <div className="flex justify-between items-center gap-6">
                <h3>Have Any Questions?</h3>
                <Link to="/contact"><button className="bg-corporate-color py-3 font-medium px-8 hover:bg-black duration-300 rounded-lg text-white">
                Contact Us
              </button></Link>
            </div>
            </div>
          <div className="footer">
          <nav>
            <header className="footer-title opacity-100">Services</header>
            <a className="link link-hover">Conferences and Seminars</a>
            <a className="link link-hover">Trade Shows and Expos</a>
            <a className="link link-hover">Team Building Workshops</a>
            <a className="link link-hover">Product Launches</a>
          </nav>
          <nav>
            <header className="footer-title opacity-100">Company</header>
            <Link to="/about" className="link link-hover">About us</Link>
            <Link to="/contact" className="link link-hover">Contact</Link>
            <Link to="/blog" className="link link-hover">Blog</Link>
            <Link to="/services" className="link link-hover">Services</Link>
          </nav>
          <nav>
            <header className="footer-title opacity-100">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <header className="footer-title opacity-100">Newsletter</header>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text text-white">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16 text-black"
                />
                <button className="btn bg-corporate-color text-white  hover:bg-blue-600 border-none absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
          </div>
          <div className="flex container mx-auto justify-between items-center py-8 mt-12 border-t">
          <h4 className="flex justify-between items-center gap-2"><FaRegCopyright/> 2023 Corporate Event Management. All rights reserved.</h4>
          {/* Social Icons */}
          <div className="flex gap-3 text-lg">
            <a href="https://www.facebook.com/ShiponIrfan/">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/ShiponIrfan">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/shiponirfan/">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/shiponirfan/">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@shiponirfan">
              <FaYoutube />
            </a>
          </div>
        </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
