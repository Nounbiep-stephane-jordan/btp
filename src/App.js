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
import { im1,im2,im3,ap1,ap2,ap3,ma1,ma2,ma3 } from "./assets";


function App() {
  const Immeuble = [
  {src:im1,subheading:"Immeuble 2 etage",
  text:"Many companies operating in developing countries such as Cameroon still use paper archiving of important information."},
  {src:im2,subheading:"Immeuble 3 etage",
  text:"Many companies operating in developing countries such as Cameroon still use paper archiving of important information."},
  {src:im3,subheading:"Immeuble 4 etage",
  text:"Many companies operating in developing countries such as Cameroon still use paper archiving of important information."},
];

  const Maison = [
  {src:ma1,subheading:"Une belle Maison",
  text:"Many companies operating in developing countries such as Cameroon still use paper archiving of important information."},
  {src:ma2,
  subheading:"Maison 2 etage",
  text:"Many companies operating in developing countries such as Cameroon still use paper archiving of important information."},
  {src:ma3,subheading:"Maison 3 etage",
  text:"Many companies operating in developing countries such as Cameroon still use paper archiving of important information."}];
  
  const Appartement = [
  {src:ap1,subheading:"Appartment meubler",
  text:"Many companies operating in developing countries such as Cameroon still use paper archiving of important information."},
  {src:ap2,subheading:"Appartement 2 etage",
  text:"Many companies operating in developing countries such as Cameroon still use paper archiving of important information."},
  {src:ap3,subheading:"Belle appartement",
  text:"Many companies operating in developing countries such as Cameroon still use paper archiving of important information."}];
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
          {/* <Route path="/realisation" element={<Realisation />} /> */}
          <Route path="/immeuble" element={<RealisationGallery heading={"Immeuble"} images={Immeuble}  />} />
          <Route path="/appartement" element={<RealisationGallery heading={"Appartement"}  images={Appartement}  />} />
          <Route path="/maison" element={<RealisationGallery heading={"Maison"}  images={Maison}  />} />
          <Route path="/proposal" element={<Proposal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
