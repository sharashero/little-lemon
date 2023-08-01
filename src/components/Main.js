import Hero from "./Hero";
import BackgroundWrapper from "./BackgroundWrapper";

const WrappedHero = BackgroundWrapper(Hero);

function Main() {
  return (
    <main>
      <WrappedHero />
    </main>
  );
}

export default Main;
