import ReactDom from "react-dom";

const element=<h1 title="foo">Hello</h1>;
const container=document.querySelector("#root");

ReactDom.render(element, container);