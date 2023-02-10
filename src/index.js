import homePage from './home.js'
import menuPage from './menu.js'
import contactPage from './contact.js'

const init = (() => {
  placeTabs()
  homePage()

})()

function placeTabs() {
  const body = document.querySelector('body')

  const tabContainer = document.createElement('header')
  tabContainer.classList.add('tab-container')

  const homeTab = document.createElement('button')
  homeTab.classList.add('home-tab')
  homeTab.textContent = 'Home'

  const menuTab = document.createElement('button')
  menuTab.classList.add('menu-tab')
  menuTab.textContent = 'Menu'

  const contactTab = document.createElement('button')
  contactTab.classList.add('contact-tab')
  contactTab.textContent = 'Contact'

  tabContainer.appendChild(homeTab)
  tabContainer.appendChild(menuTab)
  tabContainer.appendChild(contactTab)

  body.appendChild(tabContainer)
}