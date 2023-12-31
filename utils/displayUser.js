import getElement from "./getElement.js";
import removeActive from "./removeActive.js";

// Element Selections
const img = getElement('.user-img');
const value = getElement('.user-value');
const title = getElement('.user-title');
const btns = [...document.querySelectorAll('.icon')];

const displayUser = (person) => {

    // Assigning the image, value, title
    img.src = person.image;
    value.textContent = person.name;
    title.textContent = `My name is`;

    // Removing the class of '.active' from all the buttons
    removeActive(btns);

    // Adding class '.active' to the first button
    btns[0].classList.add('active');

    // Iterating over the buttons
    btns.forEach((btn) => {

        // Getting the data label value
        const label = btn.dataset.label;

        // Adding event listener
        btn.addEventListener('click', () => {

            // Setting the title
            title.textContent = `My ${label} is`;

            // Setting the value
            value.textContent = person[label];

            // Removing the class of '.active' from all the buttons
            removeActive(btns);

            // Adding the class of '.active' to the current button
            btn.classList.add('active');

        });

    });

};

export default displayUser;