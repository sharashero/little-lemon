import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import BackgroundWrapper from "./BackgroundWrapper";

const WrappedHero = BackgroundWrapper(Hero);
const WrappedTestimonials = BackgroundWrapper(Testimonials);

function HomePage() {
  return (
    <>
      <WrappedHero />
      <Highlights />
      <WrappedTestimonials />
      <About />
    </>
  );
}

export default HomePage;
