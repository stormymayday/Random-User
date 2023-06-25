import getElement from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";

// Element Selections
const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btn = getElement('.btn');
const btns = [...document.querySelectorAll('.icon')];

const displayUser = (person) => {

    img.src = person.image;
    value.textContent = person.name;
    title.textContent = `My name is`;

};

const showUser = async () => {

    // get user from api
    // getUser().then(data => {
    //     console.log(data);
    // });
    const person = await getUser();
    console.log(person);

    // Display User
    displayUser(person);

};

window.addEventListener(`DOMContentLoaded`, showUser);
btn.addEventListener(`click`, showUser);