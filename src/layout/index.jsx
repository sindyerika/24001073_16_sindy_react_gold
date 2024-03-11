import { Header } from "./layout.header";
import Services from "./layout.services";
import WhyUs from "./layout.whyus";
import Carousel from "./layout.carousel";
import Sewamobil from "./layout.sewamobil";
import Faq from "./layout.faq";
import Footer from "./layout.footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Services />
      <WhyUs />
      <Carousel />
      <Sewamobil />
      <Faq />
      <Footer />
    </>
  );
};

export default Layout;
