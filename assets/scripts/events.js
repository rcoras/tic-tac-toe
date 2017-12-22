'use strict'
const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

let playerToken = 'X'

const onBoxClick = function (event) {
  // create boxId token to use in jquery to update correct box
  const boxId = '#' + this.id
  // rotate between X and O
  if (playerToken === 'X') {
    playerToken = 'O'
    $(boxId).text('X')
  } else {
    playerToken = 'X'
    $(boxId).text('O')
  }
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const addHandlers = function () {
  $('.gameSquare').on('click', onBoxClick)
  $('#sign-up').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}
