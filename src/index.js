import homePage from './home.js'
import menuPage from './menu.js'
import contactPage from './contact.js'

const init = (() => {
  placeTabs()
  homePage()

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
    homePage()

    init.state = 'home'
  }
}

function renderMenuPage() {
  if (init.state != 'menu') {
    clearBody()
    menuPage()

    init.state = 'menu'
  }
}

function renderContactPage() {
  if (init.state != 'contact') {
    clearBody()
    contactPage()

    init.state = 'contact'
  }
}

function clearBody() {
  const bodyDivs = Array.from(document.querySelectorAll('body div'))

  bodyDivs.forEach((e) => e.remove())
}