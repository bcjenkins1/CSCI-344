const basicInfo = { name: "Diana", age: 22 };
const contactInfo = { email: "diana@example.com", phone: "555-1234" };

const merged = {...basicInfo, ...contactInfo};

// Use spread operator to merge both objects into a new object
console.log(merged);