import React from "react";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col z-20">
      <nav className="flex justify-between items-center w-full mb-10 mt-3">
        <a href="/">
          <div className="flex">
            <img
              src="/assets/logo.svg"
              alt="sumz_logo"
              className="w-6 object-contain"
            />
            <h1 className="text-2xl font-bold pl-2 pt-1">Summify</h1>
          </div>
        </a>
        <a
          href="https://github.com/Abhish7k/Summify"
          target="_blank"
          className="
          inline-block py-2 text-sm text-white bg-gray-800 px-4 hover:bg-gray-700 rounded-full
          "
        >
          GitHub
        </a>
      </nav>

      <h1 className="head_text">
        <br className="max-md:hidden" />
        Supercharge Your Reading
        <br />
        with{" "}
        <span className="text-transparent gradient-text animate-gradient">
          Summify
        </span>
      </h1>
      <h2 className="desc">
        Effortlessly condense lengthy articles into crystal-clear summaries,
        powered by OpenAI's advanced GPT model
      </h2>
    </header>
  );
};

export default Hero;
