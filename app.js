import getElement from "./utils/getElement.js";

const url = 'https://randomuser.me/api/';

// Element Selections
const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btn = getElement('.btn');
const btns = [...document.querySelectorAll('.icon')];

const showUser = () => {

    console.log(`Hello World`);

};

window.addEventListener(`DOMContentLoaded`, showUser);