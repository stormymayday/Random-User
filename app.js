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

    // Destructuring
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { first: firstName, last: lastName } = person.name;
    const { age } = person.dob;
    const { number: streetNumber, name: streetName } = person.location.street;

    return {
        phone,
        email,
        image,
        password,
        name: `${firstName} ${lastName}`,
        age,
        street: `${streetNumber} ${streetName}`,
    };

};

const showUser = () => {

    // get user from api
    getUser().then(data => {
        console.log(data);
    });

    // display user

};

window.addEventListener(`DOMContentLoaded`, showUser);
btn.addEventListener(`click`, showUser);