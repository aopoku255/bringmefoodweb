import hero from "../assets/images/edited.png";

const HeroSection = () => {
  return (
    <section className="relative bg-deep-black overflow-hidden bg-[url(./assets/images/graphic.png)] bg-center bg-no-repeat bg-cover">
      {/* content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-130 lg:min-h-96 xl:min-h-96 2xl:min-h-140 md:min-h-96 py-16 md:py-0">
          {/* LEFT TEXT */}
          <div className="flex flex-col justify-center text-center md:text-left max-w-xl mx-auto md:mx-0">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              BringMe-Food is the platform for all Food Lovers.
            </h1>

            <p className="text-white/80 mt-5 sm:mt-6 text-base sm:text-lg">
              Bringing you all your favourite foods at your fingertips.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end mt-10 md:mt-0">
            <img
              src={hero}
              alt="BringMe Food"
              className="w-full max-w-sm sm:max-w-md md:max-w-none md:w-auto md:h-96 2xl:h-140  object-contain pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
