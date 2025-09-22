import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
        <Navigation />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
