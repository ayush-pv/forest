import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Assam from './Assam';
import Meghalaya from './Meghalaya';
import Punjab from './Punjab';
import Odisha from './Odisha';
import AndhraPradesh from './AndhraPradesh';
import Chandigarh from './Chandigarh';
import WestBengal from './WestBengal';
import Uttrakhand from './Uttrakhand';
import TamilNadu from './TamilNadu';
import Sikkim from './Sikkim';
import Login from './Login';
import Subscribe from './Subscribe';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/loginPage" element={<Login />} />
          <Route exact path="/sikkim" element={<Sikkim />} />
          <Route exact path="/tamil nadu" element={<TamilNadu />} />
          <Route exact path="/uttrakhand" element={<Uttrakhand />} />
          <Route exact path="/west bengal" element={<WestBengal />} />
          <Route exact path="/chandigarh" element={<Chandigarh />} />
          <Route exact path="/andhra pradesh" element={<AndhraPradesh />} />
          <Route exact path="/odisha" element={<Odisha />} />
          <Route exact path="/punjab" element={<Punjab />} />
          <Route exact path="/meghalaya" element={<Meghalaya />} />
          <Route exact path="/assam" element={<Assam />} />
          <Route exact path="/subscribe" element={<Subscribe />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
