import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundWrapper from './components/BackgroundWrapper';

const WrappedMain = BackgroundWrapper(Main);
const WrappedHeader = BackgroundWrapper(Header);
const WrappedFooter = BackgroundWrapper(Footer);

function App() {
  return (
    <>
      <WrappedHeader />
      <WrappedMain />
      <WrappedFooter />
    </>
  );
}

export default App;
