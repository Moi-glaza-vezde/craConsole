//примитивы
//string, number, boolean, null, undefined, symbol, BigInt

//
//object, array, function/class,  map, set

let num = 12  // 23

const num1 = num   // 12

const arr = [12, 13]

num = 23

const user = {
    name: "Bob",
    age: 23,
    isStudent: true
}
//делаем копию = вносим изменения в копию = используем копию с изменениями
const user2 = { 
    // name: user.name,
    // age: user.age,
    ...user, 
    age: 24,
    name: "Alex"
}

console.log(user === user2);







//делаем копию = вносим изменения в копию = используем копию с изменениями
//CRUD

const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
    },
]
// create
const newUser = {
    id: 5,
    name: 'Mikita',
    isStudent: false,
}

const newUsers = [newUser, ...users]

const copyUsers = [...users]
copyUsers.unshift(newUsers)

console.log(users === copyUsers);

// delete id = 3

let index;
const copyUsers1 = [...users]
for (let i = 0; i < copyUsers1.length; i++) {
    if (copyUsers1[i].id === 3) {
        index = i
    }
}
copyUsers1.splice(index, 1)

console.log(users.filter(u => u.id !== 3));


// update id = 2 isStudent => false




const copy = [...users]  // поверностная
console.log(users.map(u => u.id === 2 ? { ...u, isStudent: false } : u));  // условная 

const fullCopy = users.map(u => ({ ...u })) // полная копия, глубокая
const fullCopy2 = structuredClone(users)

const superUser = {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
            //.........
            lat: '-38.2386',  // -39
            lng: '57.2232',   // 56
        },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models',  // "fron-end developer"
    },
}


const copySuperUser = { ...superUser, company: { ...superUser.company, bs: "fron-end developer" } }

console.log(copySuperUser);


// "Morgan street"

const copySuperUser2 = { ...copySuperUser, address: { ...copySuperUser.address, street: "Morgan street" } }
const copySuperUser3 = {
    ...copySuperUser2,
    address: {
        ...copySuperUser2.address, geo: {
            // ...copySuperUser2.address.geo,
            lat: '-39',
            lng: '56',
        }
    }
}



const array = ["Bob", "Alex"]

const [bob, alex] = array
const {name, age} = user

// const bob = array[0]
// const alex = array[1]

console.log(bob);
console.log(alex);






















