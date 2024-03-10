import './App.css';

import { Outlet } from 'react-router-dom';

import { DarkModeToggle, Footer, ScrollToTopButton } from './components';
import { Header } from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <ScrollToTopButton />
        <DarkModeToggle />
      </main>
      <Footer />
    </>
  );
};

export default App;
