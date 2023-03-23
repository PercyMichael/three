import React from "react";
import WebGLFluid from "webgl-fluid";

const index = () => {
  WebGLFluid(document.querySelector("canvas"), {
    // options
  });
  return <canvas></canvas>;
};

export default index;
