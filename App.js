const heading = React.createElement(
  "h1",
  { id: "heading", className: "head" },
  "hello world from React!!"
);
const heading2 = React.createElement(
  "h2",
  { id: "heading2", className: "heading" },
  "this is second root"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root.render(heading);
root2.render(heading2);
