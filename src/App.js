import {
  Header,
  Navbar,
  About,
  Experience,
  Footer,
  Portfolio,
  Contacts,
} from "./components/Index";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <Contacts />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
