var rowCount = 0;
var colCount = 0;

function generateTable() {
    var numRows = parseInt(document.getElementById("rows").value);
    var numCols = parseInt(document.getElementById("cols").value);

    var table = document.createElement("table");

    for (var i = 0; i < numRows; i++) {
        var row = table.insertRow();
        for (var j = 0; j < numCols; j++) {
            var cell = row.insertCell();
            cell.textContent = "(" + i + "," + j + ")";
        }
    }

    document.body.appendChild(table);

    rowCount = numRows;
    colCount = numCols;

    document.getElementById("rows").style.display = "none";
    document.getElementById("cols").style.display = "none";
    document.getElementById("b1").style.display = "none";
}

function addColumn() {
    var table = document.querySelector("table");
    if (table) {
        for (var i = 0; i < rowCount; i++) {
            var cell = table.rows[i].insertCell(colCount);
            cell.textContent = "(" + i + "," + colCount + ")";
        }
        colCount++;
    }
}

function addRow() {
    var table = document.querySelector("table");
    if (table) {
        var newRow = table.insertRow(rowCount);
        for (var i = 0; i < colCount; i++) {
            var cell = newRow.insertCell();
            cell.textContent = "(" + rowCount + "," + i + ")";
        }
        rowCount++;
    }
}

// Add event listeners to buttons
document.getElementById("b1").addEventListener("click", generateTable);
document.getElementById("b2").addEventListener("click", addColumn);
document.getElementById("b3").addEventListener("click", addRow);
