import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import OurServices from "./components/OurServices";
import WePro from "./components/WePro";

import FirstNav from "./components/nav/FirstNav";
import Home from "./components/Home";

function App() {
  return (
    <>
      <FirstNav />
      <Home />
      <AboutUs />
      <WePro />
      <OurServices />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
