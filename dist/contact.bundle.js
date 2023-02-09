"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["contact"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG4gIGhlYWRlci50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJ1xuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY29udGFpbmVyJylcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIG5hbWUudGV4dENvbnRlbnQgPSAnQ2hlZiBXaGF0c2hpc25hbWUnXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQobmFtZSlcblxuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBwaG9uZS50ZXh0Q29udGVudCA9ICc5OTktOTk5LTk5OTknXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQocGhvbmUpXG5cbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgZW1haWwudGV4dENvbnRlbnQgPSAnZW1haWxAd2Vic2l0ZS5jb20nXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoZW1haWwpXG5cbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpXG4gIGhvdXJzLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2hpdGUtc3BhY2U6IHByZTsnKVxuICBob3Vycy50ZXh0Q29udGVudCA9ICdNb24gQ2xvc2VkXFxyXFxuJ1xuICBob3Vycy50ZXh0Q29udGVudCArPSAnVHVlcyA3LTJcXHJcXG4nXG4gIGhvdXJzLnRleHRDb250ZW50ICs9ICdXZWQgNy0yXFxyXFxuJ1xuICBob3Vycy50ZXh0Q29udGVudCArPSAnVGh1cnMgNy0yXFxyXFxuJ1xuICBob3Vycy50ZXh0Q29udGVudCArPSAnRnJpIDctMlxcclxcbidcbiAgaG91cnMudGV4dENvbnRlbnQgKz0gJ1NhdCA4LTNcXHJcXG4nXG4gIGhvdXJzLnRleHRDb250ZW50ICs9ICdTdW4gOC0zXFxyXFxuJ1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhY3QpXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaG91cnMpXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9