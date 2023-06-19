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

    console.log(data);

    // Destructuring
    const person = data.results[0];
    console.log(person);

};

const showUser = () => {

    // get user from api
    getUser();

    // display user

};

window.addEventListener(`DOMContentLoaded`, showUser);
btn.addEventListener(`click`, showUser);