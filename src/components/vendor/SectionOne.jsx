import achievesimage from "../../assets/images/achieve.png";

const SectionOne = () => {
 const achieves = [
  {
    title: "Diverse & Accessible Platform",
    body: "We operate the most diverse and easily accessible platform for FMCG (Fast Moving Consumer Goods) and food service businesses.",
  },
  {
    title: "Customers Are Searching for You",
    body: "Local customers are already looking for your business online.",
  },
  {
    title: "Strong Marketing Support",
    body: "We invest heavily in marketing to ensure your orders keep coming.",
  },
  {
    title: "Dedicated Support Team",
    body: "You’ll be supported by a dedicated support team and a business development team.",
  },
  {
    title: "Instant Customer Connection",
    body: "Once your business is listed on our platform, you’ll be instantly connected to local customers already ordering online.",
  },
  {
    title: "Massive Exposure",
    body: "We’ll feature your business on our platform, exposing you to millions of customers.",
  },
  {
    title: "Reliable Delivery Network",
    body: "We have a strong rider network who care about food as much as you do and always ensure deliveries are on time.",
  },
];


  return (
    <section className="pt-68 pb-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT TEXT */}
          <div>
            <h1 className="font-bold text-3xl md:text-4xl text-deep-black">
              Achieve more with BringMe Food
            </h1>

            <p className="mt-6 text-lg text-black/70">
              Experience more success with our powerful tools and support:
            </p>

            <ol className="space-y-6 mt-10">
              {achieves.map(({ title, body }, index) => (
                <li key={title} className="flex gap-5">
                  
                  {/* Number Circle */}
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-600 text-white text-xs font-semibold shrink-0">
                    {index + 1}
                  </span>

                  {/* Text */}
                  <div>
                    <p className="font-bold text-deep-black">{title}</p>
                    <p className="mt-1 text-black/60">{body}</p>
                  </div>

                </li>
              ))}
            </ol>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src={achievesimage}
              alt="Achieve illustration"
              className="max-h-140 w-auto rounded-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SectionOne;
