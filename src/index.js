// import ReactDom from "react-dom";

// const element=<h1 title="foo">Hello</h1>;
// const container=document.querySelector("#root");

// ReactDom.render(element, container);

//whithout JSX 
/*
import ReactDom from "react-dom";
import React from "react";

const element=React.createElement("h1",{title:"foo"},"Hello World");
const container=document.querySelector("#root");

ReactDom.render(element, container);
*/


// JSX siz React siz qilamiz

// import reactDom from "react-dom";
// const element={
//     type:"h1",
//     props:{title:"foo", children:"Hello"}
// }
// const container=document.getElementById('root');

// const node=document.createElement(element.type);
// console.log(node);

// const text=document.createTextNode("");
// console.log(text);
// text["nodeValue"]=element.props.children;
// console.log(text);
// node.append(text);
// container.append(node);


// ------------------------
/* JSX bn

import ReactDOM from "react-dom";
import React from "react";
const element=(
    <div id="foo">
        <a>bar</a>
    </div>
)
const container=document.getElementById("root");
ReactDOM.render(element, container);

*/
// JSX siz React.createElement bn yozish

import React from "react";
import ReactDOM from "react-dom";

const element=React.createElement("div",{id:'foo'}, 
            React.createElement("a", null, "bar"),
            React.createElement("br")
)

const container=document.getElementById("root");
ReactDOM.render(element,container);