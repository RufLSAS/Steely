const buttons = document.querySelectorAll('.wrapper-card')
const modals = document.querySelectorAll('.modal-menu')

function openModal(event) {
  event.preventDefault()
  const buttonIndex = Array.from(buttons).indexOf(event.target)
  modals[buttonIndex].style.display = 'block'
  event.target.classList.add('active')
}

function closeModal(event) {
  const modal = event.target.closest('.modal')
  modal.style.display = 'none'
  const modalIndex = Array.from(modals).indexOf(modal)
  buttons[modalIndex].classList.remove('active')
}

const buttonsWindow = document.querySelectorAll('.wrapper-card');
buttonsWindow.forEach((button) => {
  button.addEventListener('click', openModal)
  if (button.classList.contains('active')) {
    button.style.backgroundColor = '#232323'
  } if (button.classList.contains('active')) {
    button.style.transform = 'translateY-10px'
  }
})

const closeButtons = document.querySelectorAll('.close-modal');
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', closeModal)
})

const btns = document.querySelectorAll('button')
btns.forEach(el => {
  el.addEventListener('click', function(e) {
    let size = Math.max(this.offsetWidth, this.offsetHeight)
    let x = e.offsetX - size / 2
    let y = e.offsetY - size / 2
    setTimeout(() => {
      let wave = this.querySelector('.wave')
      if (!wave) {
        wave = document.createElement('span')
        wave.className = 'wave'
      }
      wave.style.width = size + 'px'
      wave.style.height = size + 'px'
      wave.style.top = y + 'px'
      wave.style.left = x + 'px'
      this.appendChild(wave);
      wave.addEventListener('animationend', function() {
        wave.remove()
      })
    }, 0)
  })
})

const modal = document.querySelector(".modal-menu");

const closeButton = document.querySelector(".close-modal");

function closeModal() {
  modal.style.display = "none";
}

closeButton.addEventListener("click", closeModal);

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal()
  }
}