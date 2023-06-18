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

    console.log(response);

    // const data = await response.json();

};

const showUser = () => {

    // get user from api
    getUser();

    // display user

};

window.addEventListener(`DOMContentLoaded`, showUser);
btn.addEventListener(`click`, showUser);