import './App.css';

import { Outlet } from 'react-router-dom';

import { Footer } from './components';
import { Header } from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
