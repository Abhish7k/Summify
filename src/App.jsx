import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";

const App = () => {
  return (
    <main>
      {/* //   <main className="inset-0 -z-10 min-h-[100vh] w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"> */}
      <div className="main">
        <div className="gradient" />
      </div>
      <div></div>

      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
