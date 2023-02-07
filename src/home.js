export default function homePage() {
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