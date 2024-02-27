/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `label {
    display: inline-block; 
    text-align: right;
    width: 200px;
    padding: 5px
}


#boardDiv, #formDiv {
    display: flex;
    height: 80vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }  

button {
    align-self: center;
    width: 100px
}

#submit-players {
    margin: 5px
}

body {
    font-family: 'Franklin Gothic Medium', Arial, sans-serif;
  }
  
td, #space {
    border: 1px solid black;
    padding: 8px;
    width: 40px;
    height: 40px;
    align-content: center;
}

table {
border-spacing: 4px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,YAAY;IACZ;AACJ;;;AAGA;IACI,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;EACrB;;AAEF;IACI,kBAAkB;IAClB;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,wDAAwD;EAC1D;;AAEF;IACI,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,qBAAqB;AACzB;;AAEA;AACA,mBAAmB;AACnB","sourcesContent":["label {\n    display: inline-block; \n    text-align: right;\n    width: 200px;\n    padding: 5px\n}\n\n\n#boardDiv, #formDiv {\n    display: flex;\n    height: 80vh;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }  \n\nbutton {\n    align-self: center;\n    width: 100px\n}\n\n#submit-players {\n    margin: 5px\n}\n\nbody {\n    font-family: 'Franklin Gothic Medium', Arial, sans-serif;\n  }\n  \ntd, #space {\n    border: 1px solid black;\n    padding: 8px;\n    width: 40px;\n    height: 40px;\n    align-content: center;\n}\n\ntable {\nborder-spacing: 4px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameMechanics.js":
/*!******************************!*\
  !*** ./src/gameMechanics.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard),
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
function Player(name, gamePiece) {
    return {name, gamePiece};
};

function GameBoard(DIM = 3) {

    function makeArrayBoard() {
        const board = Array(DIM)
            .fill()
            .map(() => {return Array(DIM).fill('')});
            
        return board
    }

    function isValidPosition(position) {
        const [x, y] = position;
        if (x < 0 || x > 2 || y < 0 || y > 2) return false;
        return true;
    }

    function tic(position, gamePiece) {
        if (!isValidPosition(position)) return false;
        
        const [x,y] = position;
        if (board[x][y]) return false;

        board[x][y] = gamePiece;
        return true;
    }

    function computerTic(gamePiece) {
        if (!isValidPosition(position)) return false;
        
        let x,y;
        let move;
        let isMoveGood = false;

        do {
            [x,y] = Array
                .from({length: 2}, () => Math.round(Math.random() * (DIM - 1)));
            
            if (board[x][y]) continue;
            isMoveGood = true;
        }
        while (!isMoveGood)
        
        return move;
    }

    function checkForWin(gamePiece) {
        const horizontalWin = board.some(
            (row) => {return row.every((value) => value === gamePiece)}
        );

        if (horizontalWin) return true;

        const vertCombos = [];
        for (let i = 0; i < DIM; i++) {
            vertCombos.push([]);
            for (let j = 0; j < DIM; j++) {
                vertCombos[i].push(board[j][i])
            }
            const vertWin = vertCombos[i]
                .every((value) => value === gamePiece);
            if (vertWin) return true;
        }

        const diagCombos = [[board[0][0], board[1][1], board[2][2]],
                             [board[0][2], board[1][1], board[2][0]]]
        
        const diagWin = diagCombos.some(
        (row) => {return row.every((value) => value === gamePiece)});
        if (diagWin) return true;

        return false;
    }

    const board = makeArrayBoard();

    return {
            board, 
            isValidPosition, 
            tic, 
            computerTic,
            checkForWin
            }
}

/***/ }),

/***/ "./src/gameUI.js":
/*!***********************!*\
  !*** ./src/gameUI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewPlayersForm: () => (/* binding */ createNewPlayersForm)
/* harmony export */ });
/* harmony import */ var _gameMechanics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameMechanics */ "./src/gameMechanics.js");


const game = (0,_gameMechanics__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();

function createElement(tag, id = '', innerHTML = '') {
    const element = document.createElement(tag);
    element.id = id;
    element.innerHTML = innerHTML;
    return element
}

function displayGame() {
    const gameDiv = createElement('div', 'boardDiv')
    const table = createElement('table', 'table');
    gameDiv.appendChild(table);
    document.body.appendChild(gameDiv);

    for (let i = 0; i < game.board.length; i++) {
        const row = createElement('tr');
        for (let j = 0; j < game.board.length; j++) {
            const cell = createElement('td',`(${i},${j})`);
            cell.classList.add('space');
            const button = createElement('button', `(${i},${j})`);
            cell.appendChild(button);
            row.appendChild(cell);
        }
        table.appendChild(row)
    }
    
    const turnTracker = createElement('div', 'turn-tracker');
    const resultDisplay = createElement('div', 'result-display');

    document.body.appendChild(turnTracker);
    document.body.appendChild(resultDisplay);
}

function enableGame(playerOne, playerTwo) {
    const playerOneTurn = `It's ${playerOne.name}'s Turn`
    const playerTwoTurn = `It's ${playerTwo.name}'s Turn`

    let playerOneWon = false;
    let playerTwoWon = false;

    const turnTracker = document.getElementById('turn-tracker');
    const resultDisplay = document.getElementById('result-display');

    let thisPlayersTurn = 1;
    turnTracker.innerText = playerOneTurn;
    resultDisplay.innerText = '';

    const gameSpaces = document.getElementsByClassName('space');
    let turns = 0;

    for (let space of gameSpaces) {   
        space.addEventListener('click', () => {
            const row = space.id.substring(1,2);
            const col = space.id.substring(4,5);
            const move  = [row,col];

            if (thisPlayersTurn == 1) {
                game.tic(move, playerOne.gamePiece);
                space.innerHTML = playerOne.gamePiece;
                thisPlayersTurn = 2;
                turnTracker.innerHTML = playerTwoTurn;
                playerOneWon = game.checkForWin(playerOne.gamePiece);
            } 
            else {
                game.tic(move, playerTwo.gamePiece);
                space.innerHTML = playerTwo.gamePiece;
                thisPlayersTurn = 1;
                turnTracker.innerHTML = playerOneTurn;
                playerTwoWon = game.checkForWin(playerTwo.gamePiece);
            }

            turns++

            if (playerOneWon) {
                turnTracker.innerHTML = '';
                resultDisplay.innerHTML = `${playerOne.Name} Wins!`;
                } 
            
            
            if (playerTwoWon) {
                turnTracker.innerHTML = '';
                resultDisplay.innerHTML = `${playerTwo.Name} Wins!`;
            }

            if (turns === 9) {
                turnTracker.innerHTML = '';
                resultDisplay.innerHTML = `It's a tie`; 
            }   
    }, { once: true });
    }  
}

const clearPageBoard = () => {
    const gameSpaces = document.getElementsByClassName('space');
    for (let space of gameSpaces) {
        space.innerHTML = '';
    }
}

function clearNewPlayersForm() {
    const currentForm = document.querySelector('form');
    if (currentForm) {
        currentForm.replaceChildren();
        currentForm.remove();
    };
};


function createNewPlayersForm() {
    const formDiv = createElement('div', 'formDiv');
    const newPlayerForm = createElement('form', 'form');
    formDiv.appendChild(newPlayerForm);

    const p1NameDiv = createElement('div','p1name');
    newPlayerForm.appendChild(p1NameDiv)
    const newNameOneLabel = createElement('label','label1','Player 1 Name');
    p1NameDiv.appendChild(newNameOneLabel);
    
    const newNameOneField = createElement('input','name_one');
    p1NameDiv.appendChild(newNameOneField);

    const p1PieceDiv = createElement('div','p1Piece');
    newPlayerForm.appendChild(p1PieceDiv);
    const newPieceOneLabel = createElement('label','label1a','Player 1 Game Piece');
    p1PieceDiv.appendChild(newPieceOneLabel);
    
    const newPieceOneField = createElement('input','piece_one');
    newPieceOneField.setAttribute('maxlength','1');
    p1PieceDiv.appendChild(newPieceOneField);

    const p2NameDiv = createElement('div','p2name');
    newPlayerForm.appendChild(p2NameDiv)
    const newNameTwoLabel = createElement('label','label2','Player 2 Name');
    p2NameDiv.appendChild(newNameTwoLabel);
    
    const newNameTwoField = createElement('input','name_two');
    p2NameDiv.appendChild(newNameTwoField);

    const p2PieceDiv = createElement('div', 'p2Piece');
    newPlayerForm.appendChild(p2PieceDiv);
    const newPieceTwoLabel = createElement('label','label2a','Player 2 Game Piece');
    p2PieceDiv.appendChild(newPieceTwoLabel);
    
    const newPieceTwoField = createElement('input','piece_two');
    newPieceTwoField.setAttribute('maxlength','1');
    p2PieceDiv.appendChild(newPieceTwoField);
        
    const submitButton = createElement('button','submit_players','Start!');
    formDiv.appendChild(submitButton);
    submitButton.addEventListener('click', startGame);

    document.body.appendChild(formDiv);
}


function createNewPlayers() {
    const newPlayerForm = document.getElementById('form');
    const playerOne = (0,_gameMechanics__WEBPACK_IMPORTED_MODULE_0__.Player)(newPlayerForm.name_one.value,
        newPlayerForm.piece_one.value);
    const playerTwo = (0,_gameMechanics__WEBPACK_IMPORTED_MODULE_0__.Player)(newPlayerForm.name_two.value,
        newPlayerForm.piece_two.value);

    return [playerOne, playerTwo];
}

function startGame() {
    const players = createNewPlayers();
    document.body.replaceChildren();
    displayGame();
    enableGame(players[0],players[1])    
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameUI */ "./src/gameUI.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_gameUI__WEBPACK_IMPORTED_MODULE_0__.createNewPlayersForm)();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map