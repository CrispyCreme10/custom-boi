// globals
const sourceElements = ['script'];

// run start
start();

/**
 * Starting point for application
 */
function start() {
    const body = document.querySelector('body');
    recursiveComponentGlue(body);
}

/** 
 * Recursively load html components into index.html
 */
async function recursiveComponentGlue(parentElement) {
    const children = Array.from(parentElement.children).filter(child => !sourceElements.includes(child.localName));
    for(const child of children) {
        if (child.localName.includes('main-')) {
            await loadComponent(parentElement, child.localName);
        }

        if (child.children.length > 0) {
            recursiveComponentGlue(child);
        }
    }
}

/**
 * Injects node's html from related html file into the parentNode
 * @param {Node} parentNode parent Node of node
 * @param {string} componentName the name of the html file to extract contents from
 */
async function loadComponent(parentNode, componentName) {
    const elementInParent = parentNode.querySelector(componentName);
    const response = await fetch(`components/${componentName}.html`)
    elementInParent.innerHTML = await response.text();
}