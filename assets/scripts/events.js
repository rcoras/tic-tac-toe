'use strict'
const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

let playerToken = 'X'
const emptySquare = ''

const gameArray = ['', '', '', '', '', '', '', '', '']

const checkForWinner = function () {
  // check for horizontal wins
  console.log(gameArray)
  if ((gameArray[0] === gameArray[1]) && (gameArray[0] === gameArray[2]) && (gameArray[0] !== '')) { return true }
  if ((gameArray[3] === gameArray[4]) && (gameArray[3] === gameArray[5]) && (gameArray[0] !== '')) { return true }
  if ((gameArray[6] === gameArray[7]) && (gameArray[6] === gameArray[8]) && (gameArray[0] !== '')) { return true }
  // check for vertical wins
  if ((gameArray[0] === gameArray[3]) && (gameArray[0] === gameArray[6]) && (gameArray[0] !== '')) { return true }
  if ((gameArray[1] === gameArray[4]) && (gameArray[1] === gameArray[7]) && (gameArray[0] !== '')) { return true }
  if ((gameArray[2] === gameArray[5]) && (gameArray[2] === gameArray[8]) && (gameArray[0] !== '')) { return true }
  // check for diaganol wins
  if ((gameArray[0] === gameArray[4]) && (gameArray[0] === gameArray[8]) && (gameArray[0] !== '')) { return true }
  if ((gameArray[2] === gameArray[4]) && (gameArray[2] === gameArray[6]) && (gameArray[0] !== '')) {
    return true

  // check if board is full/ check to make sure don't declare winner before someone wins
  } else {
    return false
  }
}

const onBoxClick = function (event) {
  // create boxId token to use in jquery to update correct box
  const boxId = '#' + this.id
  // check if square is empty
  if ($(boxId).text() === emptySquare) {
    // rotate between X and O
    if (playerToken === 'X') {
      playerToken = 'O'
      $(boxId).text('X')
      gameArray[this.id] = 'x'
      // console.log(gameArray)
    } else {
      playerToken = 'X'
      $(boxId).text('O')
      gameArray[this.id] = 'o'
    }
  }
  if (checkForWinner() === true) {
    console.log('winner board', gameArray)
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

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandlers = function () {
  $('.gameSquare').on('click', onBoxClick)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-pw').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
