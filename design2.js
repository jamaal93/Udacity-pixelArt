const table = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()

document.getElementById('sizePicker').addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid ();
})

function makeGrid() {
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }
// to remove child elements instead of table.innerHTML = '';

// creates grid based on user submitted height and width values

    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    for (let i = 1; i <= height; i++) {
        const row = document.createElement('tr');
        table.appendChild(row);
        for (let j = 1; j <= width; j++) {
            const cell = document.createElement('td');
            row.appendChild(cell);

// single click to add color to cell

            cell.addEventListener('click', function onClick(event) {
                const color = document.getElementById('colorPicker').value;
                cell.style.backgroundColor = color;
            });

// double click to remove color from cell
    
            cell.addEventListener('dblclick', function dblClick(event) {
                if (cell.hasAttribute('style')) {
                    cell.removeAttribute('style');
                }
            });
        }
    }
}
