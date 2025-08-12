import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import AboutSection from "./components/About";
import Works from "./components/Works";
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";
import Servies from "./components/Servies";

function App() {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <MainPage />
        <AboutSection />
        <Works />
        <Servies/>
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
