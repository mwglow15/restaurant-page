export default function contactPage() {
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