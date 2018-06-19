/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascripts/main.js":
/*!*****************************!*\
  !*** ./javascripts/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// console.log("webpack working");

document.addEventListener("DOMContentLoaded", (e) => {

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;

var ball = {
    x: 100,
    y: 100,
    vx: 5,
    vy: 1,
    radius: 30,
    color: 'rgba(0,0,0,1)',
    draw: function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

function clear(e) {
    let mx = e.clientX;
    let my = e.clientY;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for(i = 0 ; i < 120; i+= 1) {
        for(j = 0 ; j < 60; j+=1){
            ctx.beginPath();
            // After setting the fill style, draw an arc on the canvas
            // debugger
            let i1 = 50 + i * 7;
            let j1 = 25 + j * 7; 
            if ((i1 - 40 < mx && i1 + 40 > mx) && (j1 - 40 < my && j1 + 40 > my)){
                if( i1 < mx && j1 < my){

                    ctx.arc(50 + i * 7 - 30, 25 + j * 7 - 30, 1, 0, Math.PI * 2, true);
                } else if (i1 < mx && j1 > my) {
                    ctx.arc(50 + i * 7 - 30, 25 + j * 7 + 30, 1, 0, Math.PI * 2, true);
                } else if (i1 > mx && j1 < my) {
                    ctx.arc(50 + i * 7 + 30, 25 + j * 7 - 30, 1, 0, Math.PI * 2, true);
                } else if (i1 > mx && j1 > my) {
                    ctx.arc(50 + i * 7 + 30, 25 + j * 7 + 30, 1, 0, Math.PI * 2, true);
                }
                ctx.closePath();
                ctx.fillStyle = "green";
            } else {
                ctx.arc(50 + i * 7, 25 + j * 7, 1, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fillStyle = "white";
            }
            ctx.fill();

        }
    }
}

canvas.addEventListener('mousemove', function (e) {

        clear(e);
        ball.x = e.clientX;
        ball.y = e.clientY;
        ball.draw();

});


ball.draw();

});



    // setInterval(function () {
    //     ctx.fillStyle = "black";
    //     ctx.fillRect(0, 0, canvas.width, canvas.height);
    //     posX += 1;
    //     posY += 0.25;

    //     // Draw a circle particle on the canvas
    //     ctx.beginPath();
    //     ctx.fillStyle = "white";
    //     // After setting the fill style, draw an arc on the canvas
    //     ctx.arc(posX, posY, 10, 0, Math.PI * 2, true);
    //     ctx.closePath();
    //     ctx.fill();
    // }, 30);


    // function draw() {
    //     clear();
    //     ball.draw();
    //     ball.x += ball.vx;
    //     ball.y += ball.vy;

    //     if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    //         ball.vy = -ball.vy;
    //     }
    //     if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    //         ball.vx = -ball.vx;
    //     }

    //     raf = window.requestAnimationFrame(draw);
    // }

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map