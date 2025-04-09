import Hero from "./components/Hero";
import Demo from "./components/Demo";
import { Analytics } from "@vercel/analytics/react";

import "./App.css";

const App = () => {
  return (
    <main>
      <div class="relative w-full h-[100vh] bg-white">
        <div className="app">
          <div className="gradient" />
          <Hero />
          <Demo />
        </div>
      </div>
    </main>
  );
};

export default App;
