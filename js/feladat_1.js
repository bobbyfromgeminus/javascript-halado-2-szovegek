'use strict';
// A két objektum:
const johnDoe = { 
    firstName: 'John',
    lastName: 'Doe'
};

const janeDoe = { 
    firstName: 'Jane',
    lastName: 'Doe'
}

const jackDoe = { 
    firstName: 'Jack',
    lastName: 'Doe'
}

/* A végeredmény:
{
    0: { 
        firstName: 'John',
        lastName: 'Doe'
    },
    1:  { 
        firstName: 'Jane',
        lastName: 'Doe'
    }
}
*/

function mergeObj(...obj) {
    const newObject = {};
    for (let i = 0; i < obj.length; i +=1) {
        newObject[i] = obj[i];
    }
    return newObject;
}

console.log(mergeObj(johnDoe));
console.log(mergeObj(johnDoe, janeDoe));
console.log(mergeObj(johnDoe, janeDoe, jackDoe));