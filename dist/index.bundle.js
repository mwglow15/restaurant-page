"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactPage)
/* harmony export */ });
function contactPage() {
  const body = document.querySelector('body')

  const header = document.createElement('div')
  header.classList.add('header')
  header.textContent = 'Contact Us'

  const contact = document.createElement('div')
  contact.classList.add('contact-container')

  const name = document.createElement('p')
  name.textContent = 'Chef Whatshisname'
  contact.appendChild(name)

  const phone = document.createElement('p')
  phone.textContent = '999-999-9999'
  contact.appendChild(phone)

  const email = document.createElement('p')
  email.textContent = 'email@website.com'
  contact.appendChild(email)

  const hours = document.createElement('div')
  hours.classList.add('hours')
  hours.setAttribute('style', 'white-space: pre;')
  hours.textContent = 'Mon Closed\r\n'
  hours.textContent += 'Tues 7-2\r\n'
  hours.textContent += 'Wed 7-2\r\n'
  hours.textContent += 'Thurs 7-2\r\n'
  hours.textContent += 'Fri 7-2\r\n'
  hours.textContent += 'Sat 8-3\r\n'
  hours.textContent += 'Sun 8-3\r\n'

  body.appendChild(header)
  body.appendChild(contact)
  body.appendChild(hours)
}

/***/ }),

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
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
;(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])()

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEJnQztBQUNBO0FBQ007O0FBRXRDLG9EQUFRO0FBQ1IscURBQVE7QUFDUix3REFBVzs7Ozs7Ozs7Ozs7Ozs7QUNOSTtBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0UGFnZSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuICBoZWFkZXIudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcydcblxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnRhaW5lcicpXG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBuYW1lLnRleHRDb250ZW50ID0gJ0NoZWYgV2hhdHNoaXNuYW1lJ1xuICBjb250YWN0LmFwcGVuZENoaWxkKG5hbWUpXG5cbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgcGhvbmUudGV4dENvbnRlbnQgPSAnOTk5LTk5OS05OTk5J1xuICBjb250YWN0LmFwcGVuZENoaWxkKHBob25lKVxuXG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGVtYWlsLnRleHRDb250ZW50ID0gJ2VtYWlsQHdlYnNpdGUuY29tJ1xuICBjb250YWN0LmFwcGVuZENoaWxkKGVtYWlsKVxuXG4gIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaG91cnMuY2xhc3NMaXN0LmFkZCgnaG91cnMnKVxuICBob3Vycy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3doaXRlLXNwYWNlOiBwcmU7JylcbiAgaG91cnMudGV4dENvbnRlbnQgPSAnTW9uIENsb3NlZFxcclxcbidcbiAgaG91cnMudGV4dENvbnRlbnQgKz0gJ1R1ZXMgNy0yXFxyXFxuJ1xuICBob3Vycy50ZXh0Q29udGVudCArPSAnV2VkIDctMlxcclxcbidcbiAgaG91cnMudGV4dENvbnRlbnQgKz0gJ1RodXJzIDctMlxcclxcbidcbiAgaG91cnMudGV4dENvbnRlbnQgKz0gJ0ZyaSA3LTJcXHJcXG4nXG4gIGhvdXJzLnRleHRDb250ZW50ICs9ICdTYXQgOC0zXFxyXFxuJ1xuICBob3Vycy50ZXh0Q29udGVudCArPSAnU3VuIDgtM1xcclxcbidcblxuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcilcbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWN0KVxuICBib2R5LmFwcGVuZENoaWxkKGhvdXJzKVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVQYWdlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gIFxuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG4gIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gJ1RoZSBCZXN0IFJlc3RhdXJhbnQnXG5cbiAgdGl0bGUuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpXG5cbiAgY29uc3QgYm9keVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuXG4gIGJvZHlUZXh0LmNsYXNzTGlzdC5hZGQoJ2JvZHktdGV4dCcpXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1RoaXMgaXMgYSBsb25nIGRlc2NyaXB0aW9uIG9mIHRoZSByZXN0YXVyYW50LiAgSXQgaXMgZ3JlYXQgYW5kIGl0IHNlcnZlcyBnb29kIGZvb2QuICBMb3RzIG9mIHBlb3BsZSBlYXQgaGVyZS4gIEVhdCBlYXQgZWF0LiAgRm9vZCBmb29kIGZvb2QuICBZdW0geXVtIHl1bS4nXG5cbiAgYm9keVRleHQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgYm9keS5hcHBlbmRDaGlsZChib2R5VGV4dClcbn0iLCJpbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gJy4vbWVudS5qcydcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tICcuL2NvbnRhY3QuanMnXG5cbmhvbWVQYWdlKClcbm1lbnVQYWdlKClcbmNvbnRhY3RQYWdlKCkiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuICBtZW51ID0gYnVpbGRNZW51KClcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJylcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ01lbnUnXG5cbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpXG5cbiAgbWVudS5tYXAoKGUpID0+IHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IGUubmFtZVxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG5hbWUpXG5cbiAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpY2UuY2xhc3NMaXN0LmFkZCgnaXRlbS1wcmljZScpXG4gICAgcHJpY2UudGV4dENvbnRlbnQgPSBlLnByaWNlU3RyaW5nKClcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChwcmljZSlcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBlLmluZ3JlZGllbnRzXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKG1lbnVJdGVtKVxuICB9KVxuXG4gIFxufVxuXG5mdW5jdGlvbiBidWlsZE1lbnUoKSB7XG4gIGxldCBtZW51ID0gbmV3IEFycmF5KClcblxuICBtZW51LnB1c2gobmV3IE1lbnVJdGVtKCdCYWdlbCcsIDQsICdCYWdlbCwgQ3JlYW0gQ2hlZXNlJykpXG4gIG1lbnUucHVzaChuZXcgTWVudUl0ZW0oJ1NjcmFtYmxlZCBFZ2dzJywgNSwgJ0VnZ3MsIFNhbHQsIFBlcHBlcicpKVxuICBtZW51LnB1c2gobmV3IE1lbnVJdGVtKCdCcmVha2Zhc3QgQnVycml0bycsIDcsICdUb3J0aWxsYSwgRWdncywgQ2hlZXNlLCBDaG9yaXpvLCBTYWxzYScpKSAgXG5cbiAgcmV0dXJuIG1lbnVcbn1cblxuY2xhc3MgTWVudUl0ZW0ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgaW5ncmVkaWVudHMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5wcmljZSA9IHByaWNlXG4gICAgdGhpcy5pbmdyZWRpZW50cyA9IGluZ3JlZGllbnRzXG4gIH1cblxuICBwcmljZVN0cmluZygpIHtcbiAgICByZXR1cm4gKCckJyArIGAke3RoaXMucHJpY2V9YClcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==