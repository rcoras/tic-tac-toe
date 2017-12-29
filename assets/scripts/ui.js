'use strict'
const store = require('./store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('successful sign up')
}

const signUpFailure = function (error) {
  console.error(error)
  console.log('this didn\'t work')
}

const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed in!')
  // we use the code below to save the user data to use the token and id
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  console.log('Error on sign in')
}

const changePasswordSuccess = function (data) {
  console.log('Successfully changed password')
}

const changePasswordFailure = function (error) {
  console.error(error)
}

const signOutSuccess = function (data) {
  console.log('Successfully signed out')
  store.user = null
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Error signing out')
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
