"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPage)
/* harmony export */ });
function menuPage() {
  const menu = buildMenu()

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG4gIGNvbnN0IG1lbnUgPSBidWlsZE1lbnUoKVxuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXInKVxuICBoZWFkZXIudGV4dENvbnRlbnQgPSAnTWVudSdcblxuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcilcblxuICBtZW51Lm1hcCgoZSkgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJylcbiAgICBuYW1lLnRleHRDb250ZW50ID0gZS5uYW1lXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobmFtZSlcblxuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcmljZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXByaWNlJylcbiAgICBwcmljZS50ZXh0Q29udGVudCA9IGUucHJpY2VTdHJpbmcoKVxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHByaWNlKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJylcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGUuaW5ncmVkaWVudHNcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVudUl0ZW0pXG4gIH0pXG5cbiAgXG59XG5cbmZ1bmN0aW9uIGJ1aWxkTWVudSgpIHtcbiAgbGV0IG1lbnUgPSBuZXcgQXJyYXkoKVxuXG4gIG1lbnUucHVzaChuZXcgTWVudUl0ZW0oJ0JhZ2VsJywgNCwgJ0JhZ2VsLCBDcmVhbSBDaGVlc2UnKSlcbiAgbWVudS5wdXNoKG5ldyBNZW51SXRlbSgnU2NyYW1ibGVkIEVnZ3MnLCA1LCAnRWdncywgU2FsdCwgUGVwcGVyJykpXG4gIG1lbnUucHVzaChuZXcgTWVudUl0ZW0oJ0JyZWFrZmFzdCBCdXJyaXRvJywgNywgJ1RvcnRpbGxhLCBFZ2dzLCBDaGVlc2UsIENob3Jpem8sIFNhbHNhJykpICBcblxuICByZXR1cm4gbWVudVxufVxuXG5jbGFzcyBNZW51SXRlbSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBpbmdyZWRpZW50cykge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLnByaWNlID0gcHJpY2VcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gaW5ncmVkaWVudHNcbiAgfVxuXG4gIHByaWNlU3RyaW5nKCkge1xuICAgIHJldHVybiAoJyQnICsgYCR7dGhpcy5wcmljZX1gKVxuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9