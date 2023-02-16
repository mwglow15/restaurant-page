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




const init = (() => {
  placeTabs()
  ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()

  let state = 'home'

  return {state}
})()

function placeTabs() {
  const body = document.querySelector('body')

  const tabContainer = document.createElement('header')
  tabContainer.classList.add('tab-container')

  const homeTab = document.createElement('button')
  homeTab.classList.add('home-tab')
  homeTab.textContent = 'Home'
  homeTab.addEventListener('click', () => renderHomePage())

  const menuTab = document.createElement('button')
  menuTab.classList.add('menu-tab')
  menuTab.textContent = 'Menu'
  menuTab.addEventListener('click', () => renderMenuPage())

  const contactTab = document.createElement('button')
  contactTab.classList.add('contact-tab')
  contactTab.textContent = 'Contact'
  contactTab.addEventListener('click', () => renderContactPage())

  tabContainer.appendChild(homeTab)
  tabContainer.appendChild(menuTab)
  tabContainer.appendChild(contactTab)

  body.appendChild(tabContainer)
}

function renderHomePage() {
  if (init.state != 'home') {
    clearBody()
    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()

    init.state = 'home'
  }
}

function renderMenuPage() {
  if (init.state != 'menu') {
    clearBody()
    ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])()

    init.state = 'menu'
  }
}

function renderContactPage() {
  if (init.state != 'contact') {
    clearBody()
    ;(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])()

    init.state = 'contact'
  }
}

function clearBody() {
  const bodyDivs = Array.from(document.querySelectorAll('body div'))

  bodyDivs.forEach((e) => e.remove())
}

/***/ }),

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEJnQztBQUNBO0FBQ007O0FBRXRDO0FBQ0E7QUFDQSxFQUFFLHFEQUFROztBQUVWOztBQUVBLFVBQVU7QUFDVixDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFROztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFROztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFXOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEVlO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG4gIGhlYWRlci50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJ1xuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY29udGFpbmVyJylcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIG5hbWUudGV4dENvbnRlbnQgPSAnQ2hlZiBXaGF0c2hpc25hbWUnXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQobmFtZSlcblxuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBwaG9uZS50ZXh0Q29udGVudCA9ICc5OTktOTk5LTk5OTknXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQocGhvbmUpXG5cbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgZW1haWwudGV4dENvbnRlbnQgPSAnZW1haWxAd2Vic2l0ZS5jb20nXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoZW1haWwpXG5cbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpXG4gIGhvdXJzLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2hpdGUtc3BhY2U6IHByZTsnKVxuICBob3Vycy50ZXh0Q29udGVudCA9ICdNb24gQ2xvc2VkXFxyXFxuJ1xuICBob3Vycy50ZXh0Q29udGVudCArPSAnVHVlcyA3LTJcXHJcXG4nXG4gIGhvdXJzLnRleHRDb250ZW50ICs9ICdXZWQgNy0yXFxyXFxuJ1xuICBob3Vycy50ZXh0Q29udGVudCArPSAnVGh1cnMgNy0yXFxyXFxuJ1xuICBob3Vycy50ZXh0Q29udGVudCArPSAnRnJpIDctMlxcclxcbidcbiAgaG91cnMudGV4dENvbnRlbnQgKz0gJ1NhdCA4LTNcXHJcXG4nXG4gIGhvdXJzLnRleHRDb250ZW50ICs9ICdTdW4gOC0zXFxyXFxuJ1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhY3QpXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaG91cnMpXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgXG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbiAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSAnVGhlIEJlc3QgUmVzdGF1cmFudCdcblxuICB0aXRsZS5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSlcblxuICBjb25zdCBib2R5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cbiAgYm9keVRleHQuY2xhc3NMaXN0LmFkZCgnYm9keS10ZXh0JylcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnVGhpcyBpcyBhIGxvbmcgZGVzY3JpcHRpb24gb2YgdGhlIHJlc3RhdXJhbnQuICBJdCBpcyBncmVhdCBhbmQgaXQgc2VydmVzIGdvb2QgZm9vZC4gIExvdHMgb2YgcGVvcGxlIGVhdCBoZXJlLiAgRWF0IGVhdCBlYXQuICBGb29kIGZvb2QgZm9vZC4gIFl1bSB5dW0geXVtLidcblxuICBib2R5VGV4dC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICBib2R5LmFwcGVuZENoaWxkKHRpdGxlKVxuICBib2R5LmFwcGVuZENoaWxkKGJvZHlUZXh0KVxufSIsImltcG9ydCBob21lUGFnZSBmcm9tICcuL2hvbWUuanMnXG5pbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gJy4vY29udGFjdC5qcydcblxuY29uc3QgaW5pdCA9ICgoKSA9PiB7XG4gIHBsYWNlVGFicygpXG4gIGhvbWVQYWdlKClcblxuICBsZXQgc3RhdGUgPSAnaG9tZSdcblxuICByZXR1cm4ge3N0YXRlfVxufSkoKVxuXG5mdW5jdGlvbiBwbGFjZVRhYnMoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxuICBjb25zdCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICB0YWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRhaW5lcicpXG5cbiAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgnaG9tZS10YWInKVxuICBob21lVGFiLnRleHRDb250ZW50ID0gJ0hvbWUnXG4gIGhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJIb21lUGFnZSgpKVxuXG4gIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGFiJylcbiAgbWVudVRhYi50ZXh0Q29udGVudCA9ICdNZW51J1xuICBtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyTWVudVBhZ2UoKSlcblxuICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRhYicpXG4gIGNvbnRhY3RUYWIudGV4dENvbnRlbnQgPSAnQ29udGFjdCdcbiAgY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlckNvbnRhY3RQYWdlKCkpXG5cbiAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVUYWIpXG4gIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51VGFiKVxuICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRhYilcblxuICBib2R5LmFwcGVuZENoaWxkKHRhYkNvbnRhaW5lcilcbn1cblxuZnVuY3Rpb24gcmVuZGVySG9tZVBhZ2UoKSB7XG4gIGlmIChpbml0LnN0YXRlICE9ICdob21lJykge1xuICAgIGNsZWFyQm9keSgpXG4gICAgaG9tZVBhZ2UoKVxuXG4gICAgaW5pdC5zdGF0ZSA9ICdob21lJ1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlck1lbnVQYWdlKCkge1xuICBpZiAoaW5pdC5zdGF0ZSAhPSAnbWVudScpIHtcbiAgICBjbGVhckJvZHkoKVxuICAgIG1lbnVQYWdlKClcblxuICAgIGluaXQuc3RhdGUgPSAnbWVudSdcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJDb250YWN0UGFnZSgpIHtcbiAgaWYgKGluaXQuc3RhdGUgIT0gJ2NvbnRhY3QnKSB7XG4gICAgY2xlYXJCb2R5KClcbiAgICBjb250YWN0UGFnZSgpXG5cbiAgICBpbml0LnN0YXRlID0gJ2NvbnRhY3QnXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJCb2R5KCkge1xuICBjb25zdCBib2R5RGl2cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYm9keSBkaXYnKSlcblxuICBib2R5RGl2cy5mb3JFYWNoKChlKSA9PiBlLnJlbW92ZSgpKVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVQYWdlKCkge1xuICBjb25zdCBtZW51ID0gYnVpbGRNZW51KClcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJylcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ01lbnUnXG5cbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpXG5cbiAgbWVudS5tYXAoKGUpID0+IHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IGUubmFtZVxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG5hbWUpXG5cbiAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpY2UuY2xhc3NMaXN0LmFkZCgnaXRlbS1wcmljZScpXG4gICAgcHJpY2UudGV4dENvbnRlbnQgPSBlLnByaWNlU3RyaW5nKClcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChwcmljZSlcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBlLmluZ3JlZGllbnRzXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKG1lbnVJdGVtKVxuICB9KVxuXG4gIFxufVxuXG5mdW5jdGlvbiBidWlsZE1lbnUoKSB7XG4gIGxldCBtZW51ID0gbmV3IEFycmF5KClcblxuICBtZW51LnB1c2gobmV3IE1lbnVJdGVtKCdCYWdlbCcsIDQsICdCYWdlbCwgQ3JlYW0gQ2hlZXNlJykpXG4gIG1lbnUucHVzaChuZXcgTWVudUl0ZW0oJ1NjcmFtYmxlZCBFZ2dzJywgNSwgJ0VnZ3MsIFNhbHQsIFBlcHBlcicpKVxuICBtZW51LnB1c2gobmV3IE1lbnVJdGVtKCdCcmVha2Zhc3QgQnVycml0bycsIDcsICdUb3J0aWxsYSwgRWdncywgQ2hlZXNlLCBDaG9yaXpvLCBTYWxzYScpKSAgXG5cbiAgcmV0dXJuIG1lbnVcbn1cblxuY2xhc3MgTWVudUl0ZW0ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgaW5ncmVkaWVudHMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5wcmljZSA9IHByaWNlXG4gICAgdGhpcy5pbmdyZWRpZW50cyA9IGluZ3JlZGllbnRzXG4gIH1cblxuICBwcmljZVN0cmluZygpIHtcbiAgICByZXR1cm4gKCckJyArIGAke3RoaXMucHJpY2V9YClcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==