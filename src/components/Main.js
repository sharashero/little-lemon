import { Route, Routes } from 'react-router-dom';
import HomePage from "./HomePage";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default Main;
