import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter-x.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";
import tiktok from "../assets/icons/tiktok.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Socials */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <a
              href=""
              className="h-8 w-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
              aria-label="Facebook"
            >
              <img src={facebook} alt="" />
            </a>
            <a
              href=""
              className="h-8 w-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
              aria-label="X (Twitter)"
            >
              <img src={twitter} alt="" />
            </a>
            <a
              href=""
              className="h-8 w-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
              aria-label="Instagram"
            >
              <img src={instagram} alt="" />
            </a>
            <a
              href=""
              className="h-8 w-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <img src={linkedin} alt="" />
            </a>
            <a
              href=""
              className="h-8 w-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
              aria-label="TikTok"
            >
              <img src={tiktok} alt="" />
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-end gap-3">
            <a
              href="https://onelink.to/s72pq8"
              target="_blank"
              className="bg-gray-200 py-3 px-8 rounded-full font-bold text-deep-black/90 text-center"
            >
              Get the app
            </a>
            <a
              href="https://onelink.to/hze6zp"
              target="_blank"
              className="bg-gray-200 py-3 px-8 rounded-full font-bold text-deep-black/90 text-center"
            >
              Get the Rider app
            </a>
          </div>
        </div>

        <hr className="border-gray-200 my-6" />

        {/* Bottom row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-black/70">
          <p className="text-black/80 text-center sm:text-left">
            © {new Date().getFullYear()} Bring Me-Group.
          </p>

          <div className="flex items-center justify-center sm:justify-end gap-x-6">
            <Link className="hover:text-black" to="/terms-and-conditions">
              Terms & Conditions
            </Link>
            <Link className="hover:text-black" to="/privacy-policy">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
