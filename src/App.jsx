import { Stars } from "./components/Canvas/Stars";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Projects } from "./components/";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>

      <About />
      <Experience />
      <Tech />
      <Projects />
      <Feedbacks />

      <div className="relative z-0">
        <Contact />
        <Stars />
      </div>
    </div>
  );
};

export default App;
