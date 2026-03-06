const original = {
    name: "Eve",
    age: 20,
    courses: ['CSCI 182', 'CSCI 344']
};

const copy = {...original, name: "modifiedEve", courses: [...original.courses, 'CSCI 355']};

// Use spread operator to create a shallow copy
// Modify the copy's name property
// Modify the copy's courses array (add a new course)
// Print both original and copy to see the difference
console.log(original);
console.log(copy);