import "./App.css";
import { Footer, ImageHome } from "./components";
import { Header } from "./components/Header/Header";
import { Home } from "./pages";


const App = () => {
  return (
    <>
      <Header/>
      <ImageHome/>
      <Home/>
      <Footer/>
    </>
  );
};

export default App;
