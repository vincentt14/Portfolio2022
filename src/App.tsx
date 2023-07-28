import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <HomePage />
        <AboutMePage />
        <ProjectsPage />
        <ContactPage />
        <Footer />
      </main>
    </>
  );
}

export default App;
