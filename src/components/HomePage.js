import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import BackgroundWrapper from "./BackgroundWrapper";

function HomePage() {
  return (
    <>
      <BackgroundWrapper background="primary-green">
        <Hero />
      </BackgroundWrapper>

      <Highlights />

      <BackgroundWrapper background="primary-green">
        <Testimonials />
      </BackgroundWrapper>

      <About />
    </>
  );
}

export default HomePage;
