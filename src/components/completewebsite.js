import React from "react";
import Navbar from "./navbar";
import Header from "./header";
// import Particles, { StartValueType } from "react-particles-js";
import Particles from "react-particles-js";
// import Aboutus from "./components/Aboutus";

const completewebsite = () => {
  return (
    <div>
      <Navbar />
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "star",
              stroke: {
                width: 10,
                color: "rgb(0, 155, 0)",
              },
            },
          },
        }}
      />
      <Header />
    </div>
  );
};

export default completewebsite;
