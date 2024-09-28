import { Stars } from "./components/Canvas/Stars";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Projects,
  Recommendations,
  Contact,
} from "./components/Sections";

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
      <Recommendations />

      <div className="relative z-0">
        <Contact />
        <Stars />
      </div>
    </div>
  );
};

export default App;
