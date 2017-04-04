'use strict';
(function IIFE() {
    var board = {
        grid: null,
        button: null,
        form: null
    };

    function init() {
        board.button = document.getElementById('boardButton');
        board.grid = document.getElementById('inputGrid');
        board.form = document.getElementById("drawForm");
        bindEvents();
    }

    function bindEvents() {
        var ele = board.form;
        if (ele != null) {
            if (ele.addEventListener) {
                ele.addEventListener('submit', draw);
            } else if (ele.attachEvent) {
                ele.attachEvent('onsubmit', draw);

            }
            ele.addEventListener('submit', function (e) {
                if (ele) {
                    e.preventDefault();
                }
            });
        }
    }

    function clean() {
        document.getElementById('gridDraw').innerHTML = "";
        board.grid.value = "";
    }

    function draw() {
        var num = parseInt(board.grid.value);
        clean();
        if (isNaN(num)) {
            alert("Please type number ,instead of string");
            return;
        }
        var cont = document.getElementById("gridDraw");
        for (var i = 0; i < num; i++) {
            var grid = document.createElement("div");
            cont.appendChild(grid);
            grid.className = "container";
            for (var j = 0; j < num; j++) {
                grid.innerHTML += "<div class='inLine'></div>"
            }
        }

    }

    init();
}());