import getElement from "./utils/getElement.js";

const url = 'https://randomuser.me/api/';

// Element Selections
const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btn = getElement('.btn');
const btns = [...document.querySelectorAll('.icon')];

const getUser = async () => {

    const response = await fetch(url);

    const data = await response.json();

    // Extracing person object from data.results array
    const person = data.results[0];
    console.log(person);

    const { phone, email } = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    console.log(password);

};

const showUser = () => {

    // get user from api
    getUser();

    // display user

};

window.addEventListener(`DOMContentLoaded`, showUser);
btn.addEventListener(`click`, showUser);