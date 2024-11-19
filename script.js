import './style.css';
import  LoginId  from "ul-javascript/login-id"
console.log("[debug]", "script-sdk.js")


// [step-1] SDK instantiate
const login = new LoginId()


// [step-2] Creating Simple login-ui
const formString = /*html*/`
<form class="conatiner">
  <h1>Sign In</h1>
  <label for="username">Username</label>
  <input type="text" name="username">
  <button id="signIn">Sign In</button>
  </form>
`;

// [step-3] Adding UI to the dom
const template = document.createElement('div');
template.innerHTML = formString.trim();
document.body.appendChild(template);


// [step-4] Event handler attached to login button
document.getElementById('signIn').addEventListener('click', (event) => {
  event.preventDefault();
  const usernameFieldValue = document.querySelector('input[name="username"]').value;
  login.continueWithUsername({
    username: usernameFieldValue
  });
});











/**
 * Misc code snippets
 */

// 1. Enable connections

// import { createConnections } from './features/connections';

// const getConnections = createConnections(login.transaction.connections);
// document.body.appendChild(getConnections);

// document.getElementById('google-oauth2').addEventListener('click', (event) => {
//   event.preventDefault();
//   const usernameField = document.querySelector('input[name="username"]').value;
//   login.submitFederatedLoginData({connection: 'google-oauth2'})
// });



// 2. Enable form submission

// const form = template.querySelector('form');
// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent the default form submission
//   login.submitForm(event) 
// });