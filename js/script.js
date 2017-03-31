function grid() {
    document.getElementById('divTable').innerHTML = "";
    var inputValue = document.getElementById('gridInput').value;
    var value = parseInt(inputValue);
    var gridTable = document.createElement('table');
    for (var i = 0; i < inputValue; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < inputValue; j++) {
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        gridTable.appendChild(tr);
    }
    document.getElementById('divTable').appendChild(gridTable);
    if (isNaN(value)) {
        alert('please type number, instead of string');
    }
    event.preventDefault(grid);
}