'use strict'
const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

let playerToken = 'X'
const emptySquare = ''
let isGameOver = false
let startGame = false

const gameArray = ['', '', '', '', '', '', '', '', '']

const checkForWinner = function () {
  // check for horizontal wins
  if ((gameArray[0] === gameArray[1]) && (gameArray[0] === gameArray[2]) && (gameArray[0] !== '')) {
    return true
  } else if ((gameArray[3] === gameArray[4]) && (gameArray[3] === gameArray[5]) && (gameArray[3] !== '')) {
    return true
  } else if ((gameArray[6] === gameArray[7]) && (gameArray[6] === gameArray[8]) && (gameArray[6] !== '')) {
    return true
    // check for vertical wins
  } else if ((gameArray[0] === gameArray[3]) && (gameArray[0] === gameArray[6]) && (gameArray[0] !== '')) {
    return true
  } else if ((gameArray[1] === gameArray[4]) && (gameArray[1] === gameArray[7]) && (gameArray[1] !== '')) {
    return true
  } else if ((gameArray[2] === gameArray[5]) && (gameArray[2] === gameArray[8]) && (gameArray[2] !== '')) {
    return true
    // check for diaganol wins
  } else if ((gameArray[0] === gameArray[4]) && (gameArray[0] === gameArray[8]) && (gameArray[0] !== '')) {
    return true
  } else if ((gameArray[2] === gameArray[4]) && (gameArray[2] === gameArray[6]) && (gameArray[2] !== '')) {
    return true
  } else {
    return false
  }
}

const onBoxClick = function (event) {
  // create boxId token to use in jquery to update correct box
  const boxId = '#' + this.id
  // check if square is empty
  if (isGameOver === true) {
    return
  }
  if (startGame === false) {
    return
  }
  if ($(boxId).text() === emptySquare) {
    // rotate between X and O
    if (playerToken === 'X') {
      playerToken = 'O'
      $(boxId).text('X')
      gameArray[this.id] = 'x'
      $('#message').text('O you\'re up')
      // console.log(gameArray)
    } else {
      playerToken = 'X'
      $(boxId).text('O')
      gameArray[this.id] = 'o'
      $('#message').text('X you\'re up')
    }
  }
  if (checkForWinner() === true) {
    $('#message').text('WINNER!')
    console.log('winner board', gameArray)
    isGameOver = true
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

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onStartGame = function (event) {
  event.preventDefault()
  startGame = true
  $('#message').text('X make your first move')
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = store.data
  console.log('what data do I have', data)
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const addHandlers = function () {
  $('.gameSquare').on('click', onBoxClick)
  $('.gameSquare').on('click', onUpdateGame)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-pw').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#start-game-button').on('click', onStartGame)
}

module.exports = {
  addHandlers
}
