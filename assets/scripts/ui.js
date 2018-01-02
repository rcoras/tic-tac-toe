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
}

const changePasswordSuccess = function (data) {
  console.log('Successfully changed password')
  $('#signInMessaging').text('Your password has been updated')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#signInMessaging').text('Uh Oh That didn\'t work, try again')
}

const signOutSuccess = function (data) {
  console.log('Successfully signed out')
  store.user = null
  $('#signInMessaging').text('You\'re signed out!')
}

const signOutFailure = function (error) {
  console.error(error)
  $('#signInMessaging').text('Uh Oh That didn\'t work, try again')
}

const startGameSuccess = function (data) {
  console.log('Successfully Started Game')
  store.data = data
  console.log(store.data)
}

const startGameFailure = function (error) {
  console.error(error)
}

const updateGameSuccess = function (data) {
  console.log('Successfully Updated Game')
  console.log(data)
}

const updateGameFailure = function (error) {
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
  updateGameFailure
}
