import Adres from "./adres/adres";
import "./App.css";
import Box from "./box/box";
import Box2 from "./box2/box2";
import Box3 from "./box3/box3";
import Card2 from "./cards2/cards2.jsx";
import Card3 from "./cards3/cards3";
import Cars1 from "./deckription/deckription";
import Footer from "./footer/footer";
import Navbar from "./nav/navbar";
import Showcase from "./showcase/showcase";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Cars1 />
      <Card2 />
      <Card3 />
      <wrapper className="row">
        <Box />
        <Box2 />
        <Box3 />
      </wrapper>
      <a href="#" className="row__link">
        RO'yhatdan o'tish
      </a>
      <Adres />
      <Footer />
    </div>
  );
}

export default App;
