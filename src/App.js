import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundWrapper from './components/BackgroundWrapper';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <BackgroundWrapper background="highlight-light">
        <Footer />
      </BackgroundWrapper>
    </BrowserRouter>
  );
}

export default App;
