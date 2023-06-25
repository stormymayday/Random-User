import getElement from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";

// Element Selections
const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btn = getElement('.btn');
const btns = [...document.querySelectorAll('.icon')];

const displayUser = (person) => {

    // Assigning the image, name, title
    img.src = person.image;
    value.textContent = person.name;
    title.textContent = `My name is`;

    // Adding class '.active' to the first button
    btns[0].classList.add('active');

    // Iterating over the buttons
    btns.forEach((btn) => {

        // Getting the data label value
        const label = btn.dataset.label;
        console.log(label);

        // Adding event listener
        btn.addEventListener('click', () => {

            // Accessing person object properties that correspond to the data labels
            console.log(person[label]);

            title.textContent = `My ${label} is`;

        });

    });

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