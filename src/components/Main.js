import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import BackgroundWrapper from "./BackgroundWrapper";

const WrappedHero = BackgroundWrapper(Hero);
const WrappedTestimonials = BackgroundWrapper(Testimonials);

function Main() {
  return (
    <main>
      <WrappedHero />
      <Highlights />
      <WrappedTestimonials />
    </main>
  );
}

export default Main;
