import mac from "../../assets/images/mac.png";
import aws from "../../assets/images/aws.jpg";
import google from "../../assets/images/google.jpg";
import googleapis from "../../assets/images/googleapis.jpg";
import flutterwave from "../../assets/images/flutterwave.jpg";
import order from "../../assets/images/order.png"

const SectionTwo = () => {
  const achieves = [
    {
      title: "Scalable Multi-Platform System",
      body: "Our platform runs on Android, iOS, and web, allowing your business to receive and manage multiple orders at the same time with ease.",
    },
    {
      title: "Fast Delivery Optimization",
      body: "Smart algorithms optimize order processing and delivery routes, making it possible for customers to receive orders in as little as 15 minutes.",
    },
    {
      title: "Data-Driven Intelligence",
      body: "We continuously analyze consumer behavior trends to recommend the right products and deliver a convenient, efficient customer experience.",
    },
  ];


  const orders = [
    {
      title: "Signup on the vendor platform",
    },
    {
      title: "Provide us with your menus and product photos;",
    },
    {
      title: "Verify your information;",
    },
    {
      title: "Set your status to ‘live’ and receive orders!",
    },
  ];

  return (
    <section className="pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 items-start">
  {/* IMAGE */}
  <div className="flex justify-center">
    <img
      src={mac}
      alt="Achieve illustration"
      className="max-h-140 w-auto rounded-xl"
    />
  </div>

  {/* TEXT */}
  <div>
    <h1 className="font-bold text-3xl md:text-4xl text-deep-black">
      Powered by Intelligent Ordering Technology
    </h1>

    <p className="mt-6 text-lg text-black/70">
      Our advanced platform helps you manage orders, deliver faster, and
      grow your business with data-driven insights.
    </p>

    <ol className="space-y-6 mt-10">
      {achieves.map(({ title, body }, index) => (
        <li key={title} className="flex gap-5">
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-600 text-white text-xs font-semibold shrink-0">
            {index + 1}
          </span>

          <div>
            <p className="font-bold text-deep-black">{title}</p>
            <p className="mt-1 text-black/60">{body}</p>
          </div>
        </li>
      ))}
    </ol>
  </div>
</div>


        <div className="md:my-40 my-20">
          <h1 className="text-3xl font-bold text-deep-black">Our partnerships expand beyond restaurants</h1>
          <p className="text-xl text-black/70 mt-8">We partner with businesses of all types.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[aws, google, googleapis, flutterwave].map((logo, i) => (
              <div
                key={i}
                className="border border-gray-100 p-6 flex justify-center items-center"
              >
                <img src={logo} alt="" className="h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src={order}
              alt="Achieve illustration"
              className="max-h-140 w-auto rounded-xl"
            />
          </div>

          {/* LEFT TEXT */}
          <div>
            <h1 className="font-bold text-3xl md:text-4xl text-deep-black">
              Starting with BringMe Food is easy
            </h1>

            <p className="mt-6 text-lg text-black/70">
             Follow these 4 simple steps to get going:
            </p>

            <ol className="space-y-6 mt-10">
              {orders.map(({ title }, index) => (
                <li key={title} className="flex gap-5">
                  {/* Number Circle */}
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-600 text-white text-xs font-semibold shrink-0">
                    {index + 1}
                  </span>

                  {/* Text */}
                  <div>
                    <p className="font-bold text-deep-black">{title}</p>
                    {/* <p className="mt-1 text-black/60">{body}</p> */}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
