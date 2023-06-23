const url = 'https://randomuser.me/api/';

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

export default getUser;