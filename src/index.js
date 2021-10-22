import React from "react";
import ReactDOM from "react-dom";

import { print } from "api/print";

const HelloWorld = () => {
  return <h1>Hi World</h1>;
};
print(" pewpew");

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
