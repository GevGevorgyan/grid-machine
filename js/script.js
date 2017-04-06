'use strict';
(function IIFE() {
    var board = {
        grid: null,
        form: null,
        draw: null
    };

    function init() {
        board.grid = document.getElementById('inputGrid');
        board.form = document.getElementById('drawForm');
        board.draw = document.getElementById('gridDraw');

        bindEvents();
    }

    function bindEvents() {
        if (board.form.addEventListener) {
            board.form.addEventListener('submit', draw);
        } else if (board.form.attachEvent) {
            board.form.attachEvent('submit', draw);
        }
    }

    function clean() {
        board.draw.innerHTML = '';
        board.grid.value = '';
    }

    function draw(e) {
        e.preventDefault();
        var num = parseInt(board.grid.value);
        if (isNaN(num)) {
            alert('Please type number ,instead of string');
            return;
        }
        clean();
        for (var i = 0; i < num; i++) {
            var grid = document.createElement('div');
            board.draw.appendChild(grid);
            grid.className = 'container';
            for (var j = 0; j < num; j++) {
                grid.innerHTML += "<div class='inLine'></div>"
            }
        }

    }

    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', function (e) {
        })
    } else {
        alert('Dom content is not loaded');
    }

    init();
}());