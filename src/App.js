import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div style={{ backgroundColor: "lightBlue" }}>
      <div>
        <Navbar />
        <main
          className="max-w-4xl pt-16 bg-gray-100 px-8 mx-auto flex flex-col items-center justify-center"
          style={{ height: "35rem" }}
        >
          <div className="mx-auto text-center space-y-4">
            <p className="text-5xl text-gray-900 font-bold">
              Conversational AI for better
            </p>
            <p className="text-5xl text-blue-600 font-bold">
              customer experience
            </p>
            <p className="text-gray-700 text-xl">
              Automate millions of customer interaction and supercharge your
              customer experience with Kata Conventional AI Solutions.
            </p>
          </div>
          <div className="button flex items-center justify-center space-x-4 my-8">
            <button className="demo px-8 py-3 rounded bg-blue-600 text-white hover:bg-blue-700">
              Get a demo
            </button>
            <button className="demo px-8 py-3 rounded bg-white border border-gray-200 text-gray-700 hover:bg-gray-200">
              See a pricing
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
