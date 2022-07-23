import "./App.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { AboutUs } from "./AboutUs";
import { Services } from "./Services";
import { Nav } from "./Nav";

export const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <AboutUs />
      <Services />
      <Footer />
    </>
  );
};
