import Hero from "./Hero";
import Highlights from "./Highlights";
import BackgroundWrapper from "./BackgroundWrapper";

const WrappedHero = BackgroundWrapper(Hero);

function Main() {
  return (
    <main>
      <WrappedHero />
      <Highlights />
    </main>
  );
}

export default Main;
