import { useEffect } from "react";
import {
  Header,
  Navbar,
  About,
  Experience,
  Footer,
  Portfolio,
  Contacts,
} from "./components/Index";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({ duration: 3000, once: true });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />

      <div data-aos="fade-up">
        <About />
      </div>
      <div data-aos="fade-down">
        <Experience />
      </div>
      <div data-aos="fade-up">
        <Portfolio />
      </div>
      <div data-aos="fade-down">
        <Contacts />
      </div>
      <div data-aos="fade-down">
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
