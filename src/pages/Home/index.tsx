import Footer from "../../components/footer/footer";
import Header from "../../components/Header/Header";
import AboutMe from "./sections/about-me";
import Clients from "./sections/clients";
import LetsWork from "./sections/lets-work";
import MyHero from "./sections/my-hero";
import MySkills from "./sections/my-skills";
import Portfolio from "./sections/portfolio";
import Services from "./sections/services";
import Testimonial from "./sections/testimonial";

const HomePage = () => {
  return (
    <div>
      <Header />
      <MyHero />
      <main id="ts-content">
        <Services />
        <AboutMe />
        <LetsWork />
        <MySkills />
        <Portfolio />
        <Clients />
        <Testimonial />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
