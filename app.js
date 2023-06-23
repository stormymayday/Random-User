import getElement from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";

// Element Selections
const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btn = getElement('.btn');
const btns = [...document.querySelectorAll('.icon')];

const showUser = async () => {

    // get user from api
    // getUser().then(data => {
    //     console.log(data);
    // });
    const person = await getUser();
    console.log(person);

    // display user

};

window.addEventListener(`DOMContentLoaded`, showUser);
btn.addEventListener(`click`, showUser);