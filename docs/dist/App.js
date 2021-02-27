import React from "../_snowpack/pkg/react.js";
import dp from "./assets/dp.jpg.proxy.js";
function App(props) {
  return /* @__PURE__ */ React.createElement("main", {
    className: "bg-gray-100 min-h-screen p-12"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col flex-wrap items-center justify-evenly"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-10"
  }, /* @__PURE__ */ React.createElement("p", null, "Hi! I am"), /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl"
  }, "Atul Ramachandran"), /* @__PURE__ */ React.createElement("p", null, "Fullstack developer")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: dp,
    className: "object-scale-down lg:w-96 w-80 rounded-full ring ring-yellow-700"
  }))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "p-10 text-blue-800",
    href: "https://blog.atulr.com"
  }, "Blog"), /* @__PURE__ */ React.createElement("a", {
    className: "p-10 text-blue-800",
    href: "https://github.com/a7ul"
  }, "Github"), /* @__PURE__ */ React.createElement("a", {
    className: "p-10 text-blue-800",
    href: "https://twitter.com/a7ulr"
  }, "Twitter"), /* @__PURE__ */ React.createElement("a", {
    className: "p-10 text-blue-800",
    href: "https://linkedin.com/in/atulanand94"
  }, "LinkedIn"))));
}
export default App;
