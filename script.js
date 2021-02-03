
const container = document.getElementById('container');
const clear = document.getElementById('gridClear');
let row = document.getElementById('row');


function defaultGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', cols);
    for (x = 0; x < (rows * cols); x++) {
        row = document.createElement('div');
        row.className = 'row';
        row.id = 'row';
        row.addEventListener('mouseover', function (e) {
            e.target.style.background = 'blue';
        }); container.appendChild(row);
    };
}

const bigContainer = document.getElementById('bigContainer');

let head = document.createElement('h1');
head.className = 'head';
head.innerText = 'Etch-A-Sketch';

//Small grid button
let smallGrid = document.createElement('button');
smallGrid.className = 'btn';
smallGrid.id = 'smaller'
smallGrid.innerText = 'Smaller'
smallGrid.addEventListener('click', () => {
    defaultGrid(50, 50)
    document.querySelector('.container').style.gridTemplateColumns = `repeat(52, 1fr)`;
    document.querySelector('.container').style.gridTemplateRows = `repeat(52, 1fr)`;
    row = Array.from(document.querySelectorAll('.row'), e =>
        e.style.height = '12.65px');
    Array.from(document.querySelectorAll('.row'), e =>
        e.style.width = '12.65px');
});
// Even smaller grid button
let evenSmallerGrid = document.createElement('button');
evenSmallerGrid.className = 'btn';
evenSmallerGrid.id = 'esg';
evenSmallerGrid.innerText = 'EVEN SMALLER!';
evenSmallerGrid.style.borderRadius = '10px';
evenSmallerGrid.addEventListener('click', () => {
    defaultGrid(100, 100)
    document.querySelector('.container').style.gridTemplateColumns = `repeat(98, 1fr)`;
    document.querySelector('.container').style.gridTemplateRows = `repeat(98, 1fr)`;
    row = Array.from(document.querySelectorAll('.row'), e =>
        e.style.height = '5.75px');
    Array.from(document.querySelectorAll('.row'), e =>
        e.style.width = '5.75px');
});

//clear grid
let clearGrid = document.createElement('button');
clearGrid.className = 'clear';
clearGrid.id = 'clear';
clearGrid.innerText = 'Clear-it!';
clearGrid.style.width = '50%';
clearGrid.style.textAlign = 'center';
clearGrid.addEventListener('click', () => {
    Array.from(document.querySelectorAll('.row'), e =>
        e.style.background = 'white');
});

bigContainer.appendChild(head);
bigContainer.appendChild(smallGrid);
bigContainer.appendChild(evenSmallerGrid);
bigContainer.appendChild(clearGrid);

defaultGrid(16, 16);










