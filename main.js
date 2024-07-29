const answer = document.querySelector('.answer')
const sendButton = document.querySelector('.send-button')
const result = document.querySelector('.result')

const currentYear = '2024'


sendButton.addEventListener('click', function () {
  if(answer.value === ''){
    return
  }
  if(answer.value === currentYear) {
    result.innerHTML = `<div class="result-right">
        <p class="right-font">Ответ верный! :)</p>
      </div>`
  } else {
    result.innerHTML = `<div class="result-wrong">
        <p class="wrong-font">Ответ неверный :(</p>
      </div>`
  }
})