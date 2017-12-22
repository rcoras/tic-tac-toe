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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
