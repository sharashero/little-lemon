import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundWrapper from './components/BackgroundWrapper';

const WrappedFooter = BackgroundWrapper(Footer);

function App() {
  return (
    <>
      <Header />
      <Main />
      <WrappedFooter />
    </>
  );
}

export default App;
