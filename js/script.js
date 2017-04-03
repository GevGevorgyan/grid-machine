'use strict';
(function IIFE() {
    var board = {
        grid: null,
        value: null,
        button: null
    };

    function init() {
        board.button = document.getElementById('boardButton');
        board.grid = document.getElementById('inputGrid');
        bindEvents();
    }

    function bindEvents() {
        board.button.addEventListener("click", function (event) {
            event.preventDefault();
            draw();
        });
    }
function clean() {
    document.getElementById("gridDraw").innerHTML = "";
    board.grid.value = "";
}
    function draw(event) {
        board.value="";
        board.value = document.getElementById('inputGrid').value;
        var num = parseInt(board.value);
        if (isNaN(num)) {
            alert("Please type number ,instead of string")
        }
        var cont = document.getElementById("gridDraw");
       clean();
        for (var i = 0; i < board.value; i++) {
            var grid = document.createElement("div");
            cont.appendChild(grid);
            grid.className = "container";
            for (var j = 0; j < board.value; j++) {
                grid.innerHTML += "<div class='inLine'></div>"
            }
        }

    }
    init();
}());