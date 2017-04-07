'use strict';
(function IIFE() {
    var board = {
        grid: null,
        form: null,
        draw: null,
        colorButton: null,
        containerCount: 1,
        inLineCount: 0
    };

    function init() {
        board.grid = document.getElementById('inputGrid');
        board.form = document.getElementById('drawForm');
        board.draw = document.getElementById('gridDraw');
        board.inlineColor = document.getElementsByClassName('inLine');
        board.colorButton = document.createElement('input');
        bindEvents();
    }

    function bindEvents() {
        if (board.form.addEventListener) {
            board.form.addEventListener('submit', draw);
        } else if (board.form.attachEvent) {
            board.form.attachEvent('submit', draw);
        }
        board.colorButton.addEventListener('click', colorized)
    }

    function randomColor() {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
        return color;
    }

    function colorized() {
        var inlineColor = document.getElementsByClassName('inLine');
        var containerColor = document.getElementsByClassName('container');
        if (board.containerCount > containerColor.length) {
            return;
        }
        if (board.inLineCount < inlineColor.length) {
            inlineColor[board.inLineCount].style.backgroundColor = randomColor();
            board.inLineCount += containerColor.length;
            setTimeout(colorized, 500);
            if (board.inLineCount >= inlineColor.length) {
                board.inLineCount = board.containerCount;
                board.containerCount++;
            }
        }
    }

    function coloredButton() {
        board.form.appendChild(board.colorButton);
        board.colorButton.type = 'button';
        board.colorButton.value = 'colorized';
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
        coloredButton();
    }

    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', function (e) {
        })
    } else {
        alert('Dom content is not loaded');
    }

    init();
}());