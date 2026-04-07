const fruitList = [
    {
        name: "apple",
        color: "red"
    },
    {
        name: "banana",
        color: "yellow"
    },
    {
        name: "orange",
        color: "orange"
    }
];

console.log(fruitList);

function doThingAll(item) {
    console.log(`${item.name}-${item.color}`)
}


//function mapFunc(item) {
//    return `<section style="background:${item.color}>
//    ${item.color}
//    <section>`
//}

//const result = fruitList.map(mapFunc);
//console.log(result);

//ON EXAM!!!
//const result = fruitList.forEach(doThingAll);
//console.log(result);

//filters original array to only return fruit objects that are "red"
//function redOnly(item){
//    return if(item.color.toLowerCase() === "red")
//}

//rewrite as arrow function
const redOnly = item => item.color.toLowerCase() === "red";
//if on same line, implicit return
//if line broken, need "return"

const redFruit = fruitList.filter(redOnly)
console.log(redFruit);