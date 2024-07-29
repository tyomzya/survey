const answer = document.getElementById('answer') as HTMLInputElement
const sendButton = document.getElementById('sendButton') as HTMLButtonElement
const result = document.getElementById('result') as HTMLDivElement


sendButton.addEventListener('click', function () {
  const currentYear = "2024"
  if(answer.value == ''){
    return
  }
  if(answer.value == currentYear) {
    result.innerHTML = `<div class="result-right">
        <p class="right-font">Ответ верный! :)</p>
      </div>`
  } else {
    result.innerHTML = `<div class="result-wrong">
        <p class="wrong-font">Ответ неверный :(</p>
      </div>`
  }
})