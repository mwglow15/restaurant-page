"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage)
/* harmony export */ });
function homePage() {
  const body = document.querySelector('body')
  const title = document.createElement('div')
  const restaurantName = document.createElement('h1')
  
  title.classList.add('title')
  restaurantName.textContent = 'The Best Restaurant'

  title.appendChild(restaurantName)

  const bodyText = document.createElement('div')
  const description = document.createElement('p')

  bodyText.classList.add('body-text')
  description.textContent = 'This is a long description of the restaurant.  It is great and it serves good food.  Lots of people eat here.  Eat eat eat.  Food food food.  Yum yum yum.'

  bodyText.appendChild(description)

  body.appendChild(title)
  body.appendChild(bodyText)
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])()

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
function menu() {
  menu = buildMenu()

  const body = document.querySelector('body')

  const header = document.createElement('div')
  header.classList.add('menu-header')
  header.textContent = 'Menu'

  body.appendChild(header)

  menu.map((e) => {
    const menuItem = document.createElement('div')

    const name = document.createElement('div')
    name.classList.add('item-name')
    name.textContent = e.name
    menuItem.appendChild(name)

    const price = document.createElement('div')
    price.classList.add('item-price')
    price.textContent = e.priceString()
    menuItem.appendChild(price)

    const description = document.createElement('div')
    description.classList.add('description')
    description.textContent = e.ingredients
    menuItem.appendChild(description)

    body.appendChild(menuItem)
  })

  
}

function buildMenu() {
  let menu = new Array()

  menu.push(new MenuItem('Bagel', 4, 'Bagel, Cream Cheese'))
  menu.push(new MenuItem('Scrambled Eggs', 5, 'Eggs, Salt, Pepper'))
  menu.push(new MenuItem('Breakfast Burrito', 7, 'Tortilla, Eggs, Cheese, Chorizo, Salsa'))  

  return menu
}

class MenuItem {
  constructor(name, price, ingredients) {
    this.name = name
    this.price = price
    this.ingredients = ingredients
  }

  priceString() {
    return ('$' + `${this.price}`)
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEJnQztBQUNBOztBQUVoQyxvREFBUTtBQUNSLHFEQUFROzs7Ozs7Ozs7Ozs7OztBQ0pPO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVQYWdlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gIFxuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG4gIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gJ1RoZSBCZXN0IFJlc3RhdXJhbnQnXG5cbiAgdGl0bGUuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpXG5cbiAgY29uc3QgYm9keVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuXG4gIGJvZHlUZXh0LmNsYXNzTGlzdC5hZGQoJ2JvZHktdGV4dCcpXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1RoaXMgaXMgYSBsb25nIGRlc2NyaXB0aW9uIG9mIHRoZSByZXN0YXVyYW50LiAgSXQgaXMgZ3JlYXQgYW5kIGl0IHNlcnZlcyBnb29kIGZvb2QuICBMb3RzIG9mIHBlb3BsZSBlYXQgaGVyZS4gIEVhdCBlYXQgZWF0LiAgRm9vZCBmb29kIGZvb2QuICBZdW0geXVtIHl1bS4nXG5cbiAgYm9keVRleHQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgYm9keS5hcHBlbmRDaGlsZChib2R5VGV4dClcbn0iLCJpbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gJy4vbWVudS5qcydcblxuaG9tZVBhZ2UoKVxubWVudVBhZ2UoKSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG4gIG1lbnUgPSBidWlsZE1lbnUoKVxuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXInKVxuICBoZWFkZXIudGV4dENvbnRlbnQgPSAnTWVudSdcblxuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcilcblxuICBtZW51Lm1hcCgoZSkgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJylcbiAgICBuYW1lLnRleHRDb250ZW50ID0gZS5uYW1lXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobmFtZSlcblxuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcmljZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXByaWNlJylcbiAgICBwcmljZS50ZXh0Q29udGVudCA9IGUucHJpY2VTdHJpbmcoKVxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHByaWNlKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGUuaW5ncmVkaWVudHNcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVudUl0ZW0pXG4gIH0pXG5cbiAgXG59XG5cbmZ1bmN0aW9uIGJ1aWxkTWVudSgpIHtcbiAgbGV0IG1lbnUgPSBuZXcgQXJyYXkoKVxuXG4gIG1lbnUucHVzaChuZXcgTWVudUl0ZW0oJ0JhZ2VsJywgNCwgJ0JhZ2VsLCBDcmVhbSBDaGVlc2UnKSlcbiAgbWVudS5wdXNoKG5ldyBNZW51SXRlbSgnU2NyYW1ibGVkIEVnZ3MnLCA1LCAnRWdncywgU2FsdCwgUGVwcGVyJykpXG4gIG1lbnUucHVzaChuZXcgTWVudUl0ZW0oJ0JyZWFrZmFzdCBCdXJyaXRvJywgNywgJ1RvcnRpbGxhLCBFZ2dzLCBDaGVlc2UsIENob3Jpem8sIFNhbHNhJykpICBcblxuICByZXR1cm4gbWVudVxufVxuXG5jbGFzcyBNZW51SXRlbSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBpbmdyZWRpZW50cykge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLnByaWNlID0gcHJpY2VcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gaW5ncmVkaWVudHNcbiAgfVxuXG4gIHByaWNlU3RyaW5nKCkge1xuICAgIHJldHVybiAoJyQnICsgYCR7dGhpcy5wcmljZX1gKVxuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9