import { memo } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import SectionOne from "../components/vendor/SectionOne";
import SectionTwo from "../components/vendor/SectionTwo";

const Vendor = () => {
  return (
    <section>
      <Navbar2 />
      <Banner showBtn={false} showSub={true} showRight={true} />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </section>
  );
};

export default memo(Vendor);
