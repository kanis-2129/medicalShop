
import Nav from "./common/nav";
import About from "./components/about";
import ContactPage from "./components/ContactPage";
import Home from "./components/home";

import ServicesPage from "./components/ServicesPage";
import Footer from "./common/footer";
function App() {
  return (
  <div>
    <Nav/>
    <Home/>
    <ServicesPage/>
    <About/>
    <ContactPage/>
    <Footer/>
    
  </div>
  );
}

export default App;
