function customRender(element, location){
    // const newElement = document.createElement(element.type);
    // newElement.setAttribute('href', element.props.href);
    // newElement.setAttribute('target', element.props.target);
    // newElement.innerHTML = element.children;
    // location.appendChild(newElement)

    const newElement = document.createElement(element.type);
    for(prop in element.props){
        if(prop === "children") continue;
        newElement.setAttribute(prop, element.props[prop])
    }
    newElement.innerHTML = element.children;
    location.appendChild(newElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "www.google.com",
        target: "_blank"
    },
    children: "Visit me to enter google website"
}

const root = document.querySelector('#root');
customRender(reactElement, root)