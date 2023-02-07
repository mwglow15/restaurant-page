"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcbiAgbWVudSA9IGJ1aWxkTWVudSgpXG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRlcicpXG4gIGhlYWRlci50ZXh0Q29udGVudCA9ICdNZW51J1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4gIG1lbnUubWFwKChlKSA9PiB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdpdGVtLW5hbWUnKVxuICAgIG5hbWUudGV4dENvbnRlbnQgPSBlLm5hbWVcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChuYW1lKVxuXG4gICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcHJpY2UnKVxuICAgIHByaWNlLnRleHRDb250ZW50ID0gZS5wcmljZVN0cmluZygpXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQocHJpY2UpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKVxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZS5pbmdyZWRpZW50c1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZW51SXRlbSlcbiAgfSlcblxuICBcbn1cblxuZnVuY3Rpb24gYnVpbGRNZW51KCkge1xuICBsZXQgbWVudSA9IG5ldyBBcnJheSgpXG5cbiAgbWVudS5wdXNoKG5ldyBNZW51SXRlbSgnQmFnZWwnLCA0LCAnQmFnZWwsIENyZWFtIENoZWVzZScpKVxuICBtZW51LnB1c2gobmV3IE1lbnVJdGVtKCdTY3JhbWJsZWQgRWdncycsIDUsICdFZ2dzLCBTYWx0LCBQZXBwZXInKSlcbiAgbWVudS5wdXNoKG5ldyBNZW51SXRlbSgnQnJlYWtmYXN0IEJ1cnJpdG8nLCA3LCAnVG9ydGlsbGEsIEVnZ3MsIENoZWVzZSwgQ2hvcml6bywgU2Fsc2EnKSkgIFxuXG4gIHJldHVybiBtZW51XG59XG5cbmNsYXNzIE1lbnVJdGVtIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UsIGluZ3JlZGllbnRzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMucHJpY2UgPSBwcmljZVxuICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50c1xuICB9XG5cbiAgcHJpY2VTdHJpbmcoKSB7XG4gICAgcmV0dXJuICgnJCcgKyBgJHt0aGlzLnByaWNlfWApXG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=