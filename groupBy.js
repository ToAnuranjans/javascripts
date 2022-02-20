const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }


function groupBy(objectArray, property) {
    return objectArray.reduce((acc, item) => {
        const key = item[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    },{});
}

console.log(groupBy(people, 'age'));



