import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import globe from "../assets/icons/global.png";
import logo from "../assets/images/final-logo-3.png";
import Footer from "./Footer";
import AppDownloadModal from "./AppDownloadModal";
import phone from "../assets/images/device.png";

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [appModalOpen, setAppModalOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // Show navbar only after user scrolls a bit
  useEffect(() => {
    const onScroll = () => setShowNav(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when either menu or modal is open
  useEffect(() => {
    const shouldLock = menuOpen || appModalOpen;
    document.body.style.overflow = shouldLock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, appModalOpen]);

  const openAppModal = () => {
    setMenuOpen(false);
    setAppModalOpen(true);
  };

  const closeAppModal = () => setAppModalOpen(false);

  return (
    <>
      {/* Scroll-only navbar */}
      <header
        className={[
          "fixed left-0 right-0 top-0 z-90 drop-shadow-2xl",
          "transition-all duration-300",
          showNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
        ].join(" ")}
      >
        <nav className="bg-gray-200 backdrop-blur ">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3">
            <div className="flex items-center justify-between gap-6">
              {/* Logo */}
              <Link to="/" className="shrink-0">
                <img src={logo} alt="BringMe Food" className="h-10 sm:h-12" />
              </Link>

              {/* Desktop links */}
              <div className="hidden lg:flex items-center gap-x-6 font-semibold text-deep-black">
                <Link to="/vendor">Become a Vendor</Link>
                <Link to="/rider">Become a Rider</Link>

                <button
                  type="button"
                  onClick={openAppModal}
                  className="bg-gray-300 hover:bg-gray-300 px-4 py-2 rounded-full text-deep-black font-bold"
                >
                  Get the app
                </button>

                <button
                  type="button"
                  className="flex items-center gap-x-1"
                  aria-label="Change language"
                >
                  <img src={globe} alt="Globe" className="h-4" />
                  <span className="font-normal text-sm">English</span>
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="lg:hidden h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                aria-label="Open menu"
              >
                <div className="space-y-1">
                  <span className="block h-0.5 w-5 bg-deep-black" />
                  <span className="block h-0.5 w-5 bg-deep-black" />
                  <span className="block h-0.5 w-5 bg-deep-black" />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* FULL SCREEN MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-0 z-100 bg-white transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <img src={logo} alt="BringMe Food" className="h-10" />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
            aria-label="Close menu"
          >
            <span className="text-2xl leading-none">&times;</span>
          </button>
        </div>

        {/* Menu items */}
        <div className="px-4 py-6 flex flex-col gap-4">
          <Link
            to="/vendor"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-semibold text-deep-black"
          >
            Become a Vendor
          </Link>

          <Link
            to="/rider"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-semibold text-deep-black"
          >
            Become a Rider
          </Link>

          {/* Get the app -> modal */}
          <button
            type="button"
            onClick={openAppModal}
            className="bg-gray-200 px-5 py-3 rounded-full font-bold text-center text-deep-black hidden"
          >
            Get the app
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-x-2 bg-gray-200 px-5 py-3 rounded-full"
            aria-label="Change language"
          >
            <img src={globe} alt="Globe" className="h-4" />
            <span className="text-sm">English</span>
          </button>
        </div>

        <Footer />
      </div>

      {/* Overlay click-to-close (behind panel) */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[95] bg-black/40"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* APP MODAL */}
      {appModalOpen && (
        <AppDownloadModal
          onClose={closeAppModal}
          open={appModalOpen}
          phoneSrc={phone}
        />
      )}
    </>
  );
};

export default Navbar2;
