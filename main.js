let form = document.querySelector('form');
let graphName = document.querySelector('#graphName');
let newGraph = document.querySelector('#newGraph');
let itemName = document.querySelector('#itemName');
let itemValue = document.querySelector('#itemValue');
let graphData = document.querySelector('.graphData');


// FUNCTIONS
const addItem = (e) => {
    e.preventDefault();
    let gName = graphName.value;
    let name = itemName.value;
    let value = itemValue.value;



    console.log('item added');
    console.log(name, value, gName);
}

const addGraph = () => {
    // If graph exists, then add unto it
    // else create new Graph
}


// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => form.style.display = 'none');
newGraph.addEventListener('click', () => form.style.display = 'flex');
newGraph.addEventListener('click', addGraph);
form.addEventListener('submit', addItem);

