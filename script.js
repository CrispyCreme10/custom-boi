recursiveComponentGlue();

// recursively load html components into index.html
function recursiveComponentGlue() {
    const body = document.querySelector('body');
    glueComponent(body);
}

function glueComponent(htmlElement) {
    if (htmlElement.children.length === 0) {
        return;
    }

    const sourceElements = ['script'];

    const childrenArr = Array.from(htmlElement.children);
    console.log(childrenArr);
    const childrenArrClean = childrenArr.filter(child => !sourceElements.includes(child.localName));
    console.log(childrenArrClean);

    // load custom html components into dom
    for(const child of childrenArrClean) {
        // load html file into dom
        console.log(child);


        
    }
}