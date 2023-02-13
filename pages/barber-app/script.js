function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const image = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    image.setAttribute('src', '../../assets/Avatar-Light.png')
    image.setAttribute('alt', 'Light profile image')
  } else {
    image.setAttribute('src', '../../assets/Avatar-Dark.png')
    image.setAttribute('alt', 'Dark profile image')
  }
}
