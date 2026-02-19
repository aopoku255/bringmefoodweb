import banner from "../assets/images/banner.png";

const Banner = ({showRight = true, showSub =true, showBtn}) => {
  return (
    <section className="relative bg-deep-black overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-xs scale-105"
        style={{ backgroundImage: `url(${banner})` }}
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* LEFT TEXT */}
          <div className="min-h-[80vh] lg:min-h-[640px] flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Become a BringMe Food vendor and grow your business
            </h1>

            {showSub && <p className="text-white/90 text-base sm:text-lg lg:text-xl mt-6 lg:mt-12">
              BringMe Food vendors enjoy more orders, increased sales, and unmatched
              visibility — sign up today and reap the benefits!
            </p>}
{           showBtn && <a href="" className="text-white bg-yellow-600 py-3 text-center w-50 font-bold rounded-full mt-8 mx-auto md:mx-0">Sign up as a rider</a>
}          </div>

          {/* RIGHT CARD */}
          {showRight && <div className="w-full flex justify-center lg:justify-end pb-16 lg:pb-0">
            <div className="bg-white/90 w-full max-w-md lg:max-w-lg py-10 px-6 sm:px-8 rounded-3xl shadow mt-6 lg:mt-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-yellow-600">
                Let us help your business grow!
              </h2>

              <a
                href="https://vendor.bringme-food.com/"
                target="_blank"
                rel="noreferrer"
                className="bg-deep-black hover:bg-deep-black/95 py-4 px-8 rounded-full flex justify-center mt-8 lg:mt-12 text-white font-semibold w-full md:flex sm:w-auto sm:inline-flex"
              >
                Get started
              </a>
            </div>
          </div>
}
        </div>
      </div>
    </section>
  );
};

export default Banner;
