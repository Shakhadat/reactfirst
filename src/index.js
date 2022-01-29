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
// JSX siz React.createElement bn yozish ichma-ich;
/*
import React from "react";
import ReactDOM from "react-dom";

const element=React.createElement("div",{id:'foo'}, 
            React.createElement("a", null, "bar"),
            React.createElement("br")
)

const container=document.getElementById("root");
ReactDOM.render(element,container);
*/
// yangittan logikani yaratish


/** @jsxRuntime classic */
function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            // title: "title",
            // id: "id",
            // className: "name",
            children: children.map(child =>
                typeof child === "object" ? child : createTextElement(child)
            )
        }
    };
}


// <h1 title="title" id="id" className="name">children</h1>

function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text, // hello
            children: []
        }
    };
}

function render(element, container) {
    const dom =
        element.type == "TEXT_ELEMENT"
            ? document.createTextNode("")
            : document.createElement(element.type); // h1

    const isProperty = key => key !== "children";

    Object.keys(element.props)
        .filter(isProperty)
        .forEach(name => {
            dom[name] = element.props[name];
        });

    element.props.children.forEach(child => render(child, dom));
    container.appendChild(dom);
}

const Act = {
    createElement,
    render
};

/** @jsx Act.createElement */
const element = (
    <div style="background: salmon">
        <h1>Hello World</h1>
        <h2 style="text-align:right">from Act</h2>
        <h3>hello world</h3>
        <ul>
            <li><a><span style="color: red">code</span></a></li>
        </ul>
    </div>
);
const container = document.getElementById("root");
Act.render(element, container);


