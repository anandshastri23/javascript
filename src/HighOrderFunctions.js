var contacts = [
    {name: 'Amar', number: 12345},
    {name: 'Akbar', number: 23456},
    {name: 'Anthony', number: 34567},
    {name: 'Anand', number: 45678},
    {name: 'Jon', number: 567889},
];

//Filter function - expects the callback function to return a boolean
var anand = contacts.filter(function (contact) {
    return contact.name === "Anand"
});
console.log(anand);

//map - expects the callback function to return a transformed object
var custom = contacts.map(function (contact) {
    console.log(contact.name);
});

//map - using arrow function
var custom = contacts.map((contact) => {
    console.log(contact.name);
});

//map - using arrow function, if its one line
var custom = contacts.map((contact) => console.log(contact.name));

//reduce -
var totalNumber = contacts.reduce((sum, contact) => {
        return contact.number + sum
    },
    0);
console.log(totalNumber);