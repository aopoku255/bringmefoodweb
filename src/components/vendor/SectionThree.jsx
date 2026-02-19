import mac from "../../assets/images/mac.png";
import aws from "../../assets/images/aws.jpg";
import google from "../../assets/images/google.jpg";
import googleapis from "../../assets/images/googleapis.jpg";
import flutterwave from "../../assets/images/flutterwave.jpg";
import order from "../../assets/images/order.png";
import schedule from "../../assets/icons/clock.svg";
import deliveryguy from "../../assets/images/deliveryguy.png";
import rider from "../../assets/images/rider.png";

const SectionThree = () => {
  const achieves = [
    {
      title: "Earn more when it’s busy",
      body: "Maximise your earnings with our dynamic pricing model, so you get paid more during busy times.",
    },
    {
      title: "Earn more tips",
      body: "Customers who value your service can now tip you directly through the app!",
    },
    {
      title: "Get paid more with bonuses",
      body: "Earn more money for completing deliveries on weekends, during late hours or on bad weather days.",
    },
  ];

  const orders = [
    {
      title: "Complete the sign-up form",
      body: "Submit an application with your details and documents.",
    },
    {
      title: "Start earning",
      body: "Once onboarding is done, you'll receive your Bolt Food bag and you're ready to start delivering and earning.",
    },
  ];

  return (
    <section className="pb-32 md:pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="my-24">
          <h1 className="text-deep-black font-bold text-3xl">
            BringMe Food benefits
          </h1>
          <div className="grid md:grid-cols-3 my-16 gap-x-24 items-center space-y-12">
            <div className="flex flex-col space-y-4">
              <svg
                className="text-yellow-600 md:size-6 size-8"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clock-fill"
                viewBox="0 0 16 16"
                
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              </svg>
              <h3 className="text-lg font-bold text-yellow-600">
                Flexible schedule
              </h3>
              <p className="text-black/80">
                Choose when and how often to earn money delivering orders.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <svg
                className="text-yellow-600 md:size-8 size-10"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bicycle"
                viewBox="0 0 16 16"
              >
                <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5m1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139zM8 9.057 9.598 6.5H6.402zM4.937 9.5a2 2 0 0 0-.487-.877l-.548.877zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53z" />
              </svg>
              <h3 className="text-lg font-bold text-yellow-600">
                Deliver food your way
              </h3>
              <p className="text-black/80">
                Want to make money as a delivery driver, or get some exercise on
                your bike? You decide.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <svg
              className="text-yellow-600 md:size-8 size-10"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cash-stack"
                viewBox="0 0 16 16"
              >
                <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
              </svg>
              <h3 className="text-lg font-bold text-yellow-600">
                Pay on delivery
              </h3>
              <p className="text-black/80">
                Receive your earnings as soon as you make your delivery.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 items-start">
          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={deliveryguy}
              alt="Achieve illustration"
              className="max-h-140 w-auto rounded-xl"
              loading="lazy" decoding="async"
            />
          </div>

          {/* TEXT */}
          <div>
            <h1 className="font-bold text-3xl md:text-4xl text-deep-black">
              Boost your earnings
            </h1>

            <p className="mt-6 text-lg text-black/70">
              Join our fleet of on-demand delivery riders and make money working
              when you want.
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

        <div className="my-24">
          <h1 className="text-deep-black font-bold text-3xl">
            BringMe Food courier requirements
          </h1>
          <div className="grid md:grid-cols-3 my-16 gap-x-24 items-center space-y-12">
            <div className="flex flex-col space-y-4">
              <svg
                className="text-yellow-600 size-8"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-vcard"
                viewBox="0 0 16 16"
              >
                <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z" />
              </svg>
              <h3 className="text-lg font-bold text-yellow-600">
                Valid photo ID
              </h3>
              <p className="text-black/80">
                Proving that you meet the minimum age requirement
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <svg
                className="text-yellow-600 size-8"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-phone-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
              </svg>
              <h3 className="text-lg font-bold text-yellow-600">Smartphone</h3>
              <p className="text-black/80">
                Android 9.0+ or iOS 12+, with a local number
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <svg
                className="text-yellow-600 size-8"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bicycle"
                viewBox="0 0 16 16"
              >
                <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5m1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139zM8 9.057 9.598 6.5H6.402zM4.937 9.5a2 2 0 0 0-.487-.877l-.548.877zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53z" />
              </svg>

              <h3 className="text-lg font-bold text-yellow-600">
                Scooter, bike or car
              </h3>
              <p className="text-black/80">
                With a valid licence and insurance
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT TEXT */}
          <div>
            <h1 className="font-bold text-3xl md:text-4xl text-deep-black">
              How to become a delivery rider
            </h1>

            <p className="mt-6 text-lg text-black/70">
              Follow these 4 simple steps to get going:
            </p>

            <ol className="space-y-6 mt-10">
              {orders.map(({ title, body }, index) => (
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
              src={rider}
              alt="Achieve illustration"
              className="max-h-140 w-auto rounded-xl"
              loading="lazy" decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
