'use strict'
const store = require('./store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('successful sign up')
  $('#closeSignUpButton').hide()
  $('#signInMessaging').text('You\'ve successfully signed up! Log in to start playing!')
}

const signUpFailure = function (error) {
  console.error(error)
  console.log('this didn\'t work')
  $('#signInMessaging').text('Uh Oh That didn\'t work, try again')
  document.getElementById('sign-up').reset()
}

const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed in!')
  // we use the code below to save the user data to use the token and id
  store.user = data.user
  $('#signInMessaging').text('You\'ve successfully signed in! Press start playing to start!')
  $('#closeSignInButton').hide()
  $('#closeSignUpButton').hide()
  $('#showChangePwButton').removeClass('hidden')
  $('#showSignOut').removeClass('hidden')
}

const signInFailure = function (error) {
  console.error(error)
  console.log('Error on sign in')
  $('#signInMessaging').text('Uh Oh That didn\'t work, try again')
  document.getElementById('sign-in').reset()
}

const changePasswordSuccess = function (data) {
  console.log('Successfully changed password')
  $('#signInMessaging').text('Your password has been updated')
  document.getElementById('change-pw').reset()
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#signInMessaging').text('Uh Oh That didn\'t work, try again')
  document.getElementById('change-pw').reset()
}

const signOutSuccess = function (data) {
  console.log('Successfully signed out')
  store.user = null
  $('#signInMessaging').text('You\'re signed out!')
  $('#closeSignInButton').show()
  $('#closeSignUpButton').show()
  $('#showChangePwButton').addClass('hidden')
  $('#showSignOut').addClass('hidden')
}

const signOutFailure = function (error) {
  console.error(error)
  $('#signInMessaging').text('Uh Oh That didn\'t work, try again')
}

const startGameSuccess = function (data) {
  console.log('Successfully Started Game')
  store.gameInfo = data
  console.log(store)
}

const startGameFailure = function (error) {
  console.error(error)
}

const updateGameSuccess = function (data) {
  store.updatedGame = data
  console.log('Successfully Updated Game')
  console.log(store.updatedGame)
}

const updateGameFailure = function (error) {
  console.error(error)
}

const getStatsSuccess = function (data) {
  store.stats = data
  console.log(store)
  $('#signInMessaging').text('You\'ve completed ' + store.stats.games.length + ' games')
}

const getStatsFailure = function (error) {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  startGameSuccess,
  startGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getStatsSuccess,
  getStatsFailure
}
