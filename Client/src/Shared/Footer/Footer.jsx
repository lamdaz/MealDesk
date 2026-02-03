import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#E8E8E8] to-[#F5F5F5] text-base-content border-t border-[#B0B0B0]/40 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src="/logo.png" alt="MealDesk" className="w-24 drop-shadow-md" />
          <p className="mt-4 text-sm leading-relaxed text-gray-700">
            Smart restaurant management solution to manage orders, menus, and
            staff efficiently.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/rakibul13631/"
              target="_blank"
              className="btn btn-circle btn-outline hover:bg-[#3b5998] hover:text-white transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/_rakibul_hasan_shuvo_/"
              target="_blank"
              className="btn btn-circle btn-outline hover:bg-[#E1306C] hover:text-white transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/rakibul263"
              target="_blank"
              className="btn btn-circle btn-outline hover:bg-[#333] hover:text-white transition-all duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div>
          <span className="footer-title text-lg font-semibold mb-3 block text-gray-800">
            Quick Links
          </span>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="link link-hover text-gray-700 hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="link link-hover text-gray-700 hover:text-gray-900"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="link link-hover text-gray-700 hover:text-gray-900"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="link link-hover text-gray-700 hover:text-gray-900"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <span className="footer-title text-lg font-semibold mb-3 block text-gray-800">
            Contact
          </span>
          <p className="text-sm text-gray-700">
            Email: rakibulhasanshuvo206@gmail.com
          </p>
          <p className="text-sm text-gray-700 mt-1">Phone: +880 1521-711716</p>
          <p className="text-sm text-gray-700 mt-1">Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="border-t border-gray-300/60 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} MealDesk. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
