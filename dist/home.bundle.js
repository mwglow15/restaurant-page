"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["home"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lUGFnZSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICBcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9ICdUaGUgQmVzdCBSZXN0YXVyYW50J1xuXG4gIHRpdGxlLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKVxuXG4gIGNvbnN0IGJvZHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcblxuICBib2R5VGV4dC5jbGFzc0xpc3QuYWRkKCdib2R5LXRleHQnKVxuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdUaGlzIGlzIGEgbG9uZyBkZXNjcmlwdGlvbiBvZiB0aGUgcmVzdGF1cmFudC4gIEl0IGlzIGdyZWF0IGFuZCBpdCBzZXJ2ZXMgZ29vZCBmb29kLiAgTG90cyBvZiBwZW9wbGUgZWF0IGhlcmUuICBFYXQgZWF0IGVhdC4gIEZvb2QgZm9vZCBmb29kLiAgWXVtIHl1bSB5dW0uJ1xuXG4gIGJvZHlUZXh0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuXG4gIGJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpXG4gIGJvZHkuYXBwZW5kQ2hpbGQoYm9keVRleHQpXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9