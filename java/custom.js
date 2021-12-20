const header = document.getElementById('header')
const title = document.getElementById('title')
const para = document.getElementById('para')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="img/sport.jpg" alt="" />'
  title.innerHTML = 'I am a Front-end Developer'
  para.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
  profile_img.innerHTML =
    '<img src="img/rehmat.jpg" alt="" />'
  name.innerHTML = 'Rehmat Ali'
  date.innerHTML = 'june 21, 2021'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
