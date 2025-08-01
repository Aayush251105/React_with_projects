// creating our custom react

const container = document.getElementById("root");

const reactElement = {
    type : "a",
    attributes : {
        href: "https://google.com",
        target: "_blank"
    },
    text: "click here!"

}

function customRender(container , reactElement){
    // adding element to dom
    const newEle = document.createElement(reactElement.type);
    for (const attribute in reactElement.attributes) {
        newEle.setAttribute(attribute , reactElement.attributes[attribute]);
    }

    newEle.innerHTML = reactElement.text;

    container.appendChild(newEle);
}

customRender(container , reactElement);