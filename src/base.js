import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAxkdGIB0Cdoq1lQxhbk9TEnSbIxdvfI-c",
  authDomain: "fmuriel-ichigo-no-resutoran.firebaseapp.com",
  databaseURL: "https://fmuriel-ichigo-no-resutoran.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

//This is a default export
export default base;