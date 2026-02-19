import React, { useEffect } from "react";

const AppDownloadModal = ({ open, onClose, phoneSrc }) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-80 flex items-center justify-center px-4">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* modal */}
      <div
        className="relative w-full max-w-6xl overflow-hidden rounded-2xl bg-deep-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30"
        >
          ×
        </button>

        <div className="relative grid lg:grid-cols-2 items-center min-h-105 px-8 py-12 sm:px-14">
             <img
              src={phoneSrc}
              alt="App preview"
              className="drop-shadow-2xl h-96 absolute right-30 bottom-0"
            />

          {/* LEFT TEXT */}
          <div className="text-white max-w-xl z-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Your favourite food,
              <br />
              delivered fast.
            </h2>

            <p className="mt-6 text-lg text-white/90 font-semibold">
              Scan the QR code with your phone camera to download the
              BringMe Food app. Available for iOS and Android devices.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden lg:block">
           
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppDownloadModal;
