import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10">
        <img
          src={"/src/assets/logo-2.png"}
          alt="sumz_logo"
          className="w-40 object-contain -my-10"
        />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/Abhish7k/Summize", "_blank")
          }
          className="
          inline-block py-2 text-sm text-white bg-gray-800 px-7 hover:bg-gray-700 rounded-xl
          "
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        <br className="max-md:hidden" />
        Supercharge Your Reading
        <br />
        with <span className="orange_gradient ">Summify</span>
      </h1>
      <h2 className="desc">
        Effortlessly condense lengthy articles into crystal-clear summaries,
        powered by OpenAI's advanced GPT model
      </h2>
    </header>
  );
};

export default Hero;
