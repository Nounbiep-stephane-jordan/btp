import "./App.css";
import Nav from "./component/nav/nav";
import Home from "./containers/home/home";
import Footer from "./component/footer/footer";
import Services from "./containers/services/services";
import About from "./containers/about/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./component/contact/contact";
import CallCenter from "./containers/services/call center/call_center";
import Digitalisation from "./containers/services/digitalization/digitalisation";
import It from "./containers/services/it/it";
import Marketing from "./containers/services/marketing/marketing";
import Realisation from "./containers/realisation/realisation";
import Proposal from "./component/contact/proposal";
import RealisationGallery from "./containers/realisation/realisationGallery";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/digital" element={<Digitalisation />} />
          <Route path="/callcenter" element={<CallCenter />} />
          <Route path="/it" element={<It />} />
          <Route path="/recruitment" element={<CallCenter />} />
          <Route path="/marketig" element={<Marketing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/realisation" element={<Realisation />} />
          {/* <Route path="/immeuble" element={<RealisationGallery images={Immeuble}  />} />
          <Route path="/appartement" element={<RealisationGallery images={Appartement}  />} />
          <Route path="/maison" element={<RealisationGallery images={Maison}  />} /> */}
          <Route path="/proposal" element={<Proposal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
