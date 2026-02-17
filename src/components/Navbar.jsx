import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import globe from "../assets/icons/global.png";
import logo from "../assets/images/final-logo-3.png";
import Footer from "./Footer";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Optional: lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="w-full">
      {/* Top bar */}
      <nav className="bg-gray-200 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden lg:block" />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-x-6 font-semibold text-deep-black">
            <Link to="/vendor" target="_blank" rel="noreferrer">
              Become a Vendor
            </Link>
            <Link to="/rider">Become a Rider</Link>
            <Link
              to=""
              className="bg-gray-300 px-4 py-2 rounded-full text-black font-bold"
            >
              Get the app
            </Link>
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
            onClick={() => setOpen(true)}
            className="hidden items-center justify-center h-10 w-10 rounded-full bg-gray-300 hover:bg-gray-400"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-deep-black" />
              <span className="block h-0.5 w-5 bg-deep-black" />
              <span className="block h-0.5 w-5 bg-deep-black" />
            </div>
          </button>
        </div>
      </nav>

      {/* Main bar */}
      <div className="py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

  {/* Logo */}
  <img src={logo} alt="BringMe Food" className="h-12 sm:h-16" />

  {/* Desktop CTA */}
  <Link
    to=""
    className="hidden lg:inline-flex font-bold bg-deep-black hover:bg-deep-black/90 text-white px-8 py-3.5 rounded-full"
  >
    Log in or sign up
  </Link>

  {/* Mobile menu button */}
  <button
    type="button"
    onClick={() => setOpen(true)}
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

      {/* FULL SCREEN MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
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
            onClick={() => setOpen(false)}
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
            // target="_blank"
            // rel="noreferrer"
            onClick={() => setOpen(false)}
            className="text-lg font-semibold text-deep-black"
          >
            Become a Vendor
          </Link>

          <Link
            to="/rider"
            onClick={() => setOpen(false)}
            className="text-lg font-semibold text-deep-black"
          >
            Become a Rider
          </Link>

          {/* <Link
            to=""
            onClick={() => setOpen(false)}
            className="bg-gray-200 px-5 py-3 rounded-full font-bold text-center text-deep-black"
          >
            Get the app
          </Link> */}

          <button
            type="button"
            className="flex items-center justify-center gap-x-2 bg-gray-200 px-5 py-3 rounded-full"
            aria-label="Change language"
          >
            <img src={globe} alt="Globe" className="h-4" />
            <span className="text-sm">English</span>
          </button>

          {/* Login / Signup inside menu */}
          <Link
            to=""
            onClick={() => setOpen(false)}
            className="mt-4 bg-deep-black hover:bg-deep-black/90 text-white px-5 py-3 rounded-full font-bold text-center"
          >
            Log in or sign up
          </Link>
        </div>
        <Footer/>
      </div>

      {/* Optional overlay click-to-close (behind panel) */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Navbar;
