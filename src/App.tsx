import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import AboutSection from "./components/About";
import Works from "./components/Works";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <MainPage />
      <AboutSection />
      <Works />
      <Footer />
    </>
  );
}

export default App;
