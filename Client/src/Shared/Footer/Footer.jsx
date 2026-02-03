import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import {
  IoRestaurantOutline,
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoArrowUpOutline,
} from "react-icons/io5";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#5D4037] text-white pt-20 pb-10 px-6 rounded-t-[3.5rem] relative overflow-hidden">
      {/* Decorative Branding Watermark */}
      <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
        <IoRestaurantOutline size={300} className="text-white" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand Identity */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-[#E67E22] rounded-2xl shadow-lg rotate-3">
                <IoRestaurantOutline size={28} className="text-white" />
              </div>
              <h2 className="text-3xl font-black tracking-tighter uppercase">
                Meal<span className="text-[#E67E22]">Desk</span>
              </h2>
            </div>
            <p className="text-orange-100/60 text-base leading-relaxed max-w-sm mb-8 font-medium">
              Transforming restaurant management into a seamless digital
              experience. Join us in redefining the culinary world, one order at
              a time.
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: <FaFacebookF />,
                  link: "https://www.facebook.com/rakibul13631/",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/_rakibul_hasan_shuvo_/",
                },
                { icon: <FaGithub />, link: "https://github.com/rakibul263" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E67E22] hover:scale-110 transition-all duration-500"
                >
                  <span className="text-white text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[#E67E22] font-black text-xs uppercase tracking-[0.3em] mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Home", "Menu", "Dashboard", "Login", "Signup"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-orange-100/70 hover:text-[#E67E22] font-bold text-sm transition-all flex items-center gap-2 group"
                  >
                    <div className="w-0 h-[2px] bg-[#E67E22] group-hover:w-4 transition-all duration-300"></div>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Support */}
          <div className="md:col-span-4">
            <h4 className="text-[#E67E22] font-black text-xs uppercase tracking-[0.3em] mb-8">
              Contact Desk
            </h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#E67E22] transition-colors">
                  <IoMailOutline
                    className="text-orange-100 group-hover:text-white"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-[10px] text-orange-100/40 font-black uppercase tracking-widest">
                    Email Us
                  </p>
                  <p className="text-sm font-bold">
                    rakibulhasanshuvo206@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#E67E22] transition-colors">
                  <IoCallOutline
                    className="text-orange-100 group-hover:text-white"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-[10px] text-orange-100/40 font-black uppercase tracking-widest">
                    Call Center
                  </p>
                  <p className="text-sm font-bold">+880 1521-711716</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#E67E22] transition-colors">
                  <IoLocationOutline
                    className="text-orange-100 group-hover:text-white"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-[10px] text-orange-100/40 font-black uppercase tracking-widest">
                    HQ Location
                  </p>
                  <p className="text-sm font-bold">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-[10px] font-black text-orange-100/20 uppercase tracking-[0.4em] mb-1">
              © {new Date().getFullYear()} MealDesk Culinary Systems
            </p>
            <p className="text-xs font-bold text-orange-100/40 italic">
              Empowering Kitchens Worldwide
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group bg-white/5 hover:bg-[#E67E22] p-4 rounded-2xl border border-white/10 transition-all active:scale-90"
          >
            <IoArrowUpOutline
              size={20}
              className="group-hover:-translate-y-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
