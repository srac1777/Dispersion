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

let canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');
let mouseX;
let mouseY;
let k = 0;
let cursor_radius = 100;
let particles_array = [];
let particle = {vx: 0, vy: 0, x: 0, y: 0 };
let p;
let force, distance;
let dx, dy, vx, vy;
let theta;
let changed_particles_array = [];
let gi=0.95;
let cl = 0;




let gravity_input = document.getElementById('gravity');
// gravity_input.onchange((e) => {
//     gi = gravity_input.value
//     console.log(gi);

// })

gravity_input.addEventListener("input", updateGi);

function updateGi(val){
    gi = gravity_input.value
    console.log(gi);
}

// let fs = document.getElementById('fs');
// // fs.addEventListener("click", toggleFullScreen);

// function toggleFullScreen() {
//     if ((document.fullScreenElement && document.fullScreenElement !== null) ||
//         (!document.mozFullScreen && !document.webkitIsFullScreen)) {
//         if (document.documentElement.requestFullScreen) {
//             document.documentElement.requestFullScreen();
//         } else if (document.documentElement.mozRequestFullScreen) {
//             document.documentElement.mozRequestFullScreen();
//         } else if (document.documentElement.webkitRequestFullScreen) {
//             document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
//         }
//     } else {
//         if (document.cancelFullScreen) {
//             document.cancelFullScreen();
//         } else if (document.mozCancelFullScreen) {
//             document.mozCancelFullScreen();
//         } else if (document.webkitCancelFullScreen) {
//             document.webkitCancelFullScreen();
//         }
//     }
// }

function setup(){
    ctx.fillStyle = "#191919";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < 50; i += 1) {
        for (j = 0; j < 50; j += 1) {
            
            let i1 = 230 + i * 11;

            let j1 = 70 + j * 11;
            
            p = Object.create(particle);
            p.x = i1;
            p.original_x = i1;
            p.y = j1;
            p.original_y = j1;
            particles_array[k] = p;
            p.motion = "static";
            k += 1; 

        }
    }

    for (i = 0; i < 50; i += 1) {
        for (j = 0; j < 50; j += 1) {

            let i1 = 231 + i * 11;

            let j1 = 70 + j * 11;

            p = Object.create(particle);
            p.x = i1;
            p.original_x = i1;
            p.y = j1;
            p.original_y = j1;
            particles_array[k] = p;
            p.motion = "static";
            k += 1;

        }
    }








    // for (let k = 0; k < particles_array.length; k++) {
    //     // debugger
    //     p = particles_array[k];
    //     ctx.beginPath();
    //     ctx.arc(p.x, p.y, 1, 0, Math.PI * 2, true);
    //     ctx.closePath();
    //     ctx.fillStyle = "white";
    //     ctx.fill();
    //     // p.changed = true;
    // }

    bounds = canvas.getBoundingClientRect();
    
    canvas.addEventListener('mousemove', function (e) {
        mouseX = e.clientX - bounds.left;
        mouseY = e.clientY - bounds.top;
    });
}


function update(){
    for (let k = 0; k < particles_array.length; k++) {
        
        p = particles_array[k];
        dx = mouseX - p.x;
        dy = mouseY - p.y;


        //physics credit goes to @soulwire https://github.com/soulwire

        distance = (dx**2) + (dy**2);
        force = -(cursor_radius**2)/ distance;

        if ( distance < cursor_radius**2) {
            theta = Math.atan2(dy, dx);
            p.vx += force * Math.cos(theta);
            p.vy += force * Math.sin(theta);
            p.motion = "dynamic";
        }
        p.vx *= gi;
        p.vy *= gi;
        // if(p.vx < 0.001 ){
        //     p.motion = "static";
        // }
        p.x += p.vx + (p.original_x - p.x) * (gi-0.7)
        p.y += p.vy + (p.original_y - p.y) * (gi - 0.7)
        // ctx.beginPath();
        // ctx.arc(p.x, p.y, 1, 0, Math.PI * 2, true);
        // ctx.closePath();
        // ctx.fillStyle = "white";
        // ctx.fill();
        
    }
    draw();
    window.requestAnimationFrame(update);
}



function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "#191919"
    ctx.fillRect(0,0,canvas.width, canvas.height);

    for (let k = 0; k < particles_array.length; k++) {
        p = particles_array[k];
        // if(p.motion === "dynamic"){
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2, true);
        ctx.closePath();
        cl = cl % 360
        if(k > 2500){
            // if(p.x < 350 && p.y < 350){
            
            ctx.fillStyle = "hsl("+cl+",100%, 50%)"
            // }
        } else {
            
             
            ctx.fillStyle = "hsl(" + (cl+180) + ",100%, 50%)"
        } 
        cl += 0.00009
        ctx.fill();
        // }
    }
    
}

setup();
window.requestAnimationFrame(update);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map