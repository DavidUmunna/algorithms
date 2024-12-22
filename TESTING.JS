var gambli={
    name: 'gambli',
    race: 'nigro',
    age: 17,
    number: '123',
    groups:  ['art','tech','music'],
    greet: function() {return `happy to meet you today im ${this.name}`}
    

};
//console.log(gambli['name'])


//console.log(gambli.greet())


const people=[{name:'john',location:'kaduna', age:16},{name:'jane',location:'kano' ,age:17},
    {name:'james',location:'abia', age:20},{name:'david',location:'imo', age:18}]



//let find_people=people.forEach(Object=>{console.log(`hello i am ${Object.name} and i am from ${Object.location}`)})

//console.log(find_people)


//const ages = [32, 33, 16, 40];

// Create a Test Function
function checkAge(age) {
  return age > 18;
}

// Are all ages over 18?
//console.log(ages.every(checkAge))

const ages = [32, 33, 16, 40];
//const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}


//const fruits = ["Banana", "Orange", "Apple","Mango"];

// Create an Iterable
//const list = fruits.keys();

//console.log(list)

let text = "";
/*for (let x of list) {
  console.log(text += x +' ' )
}*/


'abc'+"d"
console.log(`ab${"c"}`)

//const m_function= =>console.log('hello')

const f = _=>_
//const people = [{ name: 'Max' }, { name: 'Jack' }, { name: 'Marry' }]



//const find_people=(name)=>{return people.find(person => person.name === name)}
const showeach= name =>people.forEach(person => console.log(person.name))

//console.log(find_people('john'))
//m_function(2,3)


const changeages=()=> people.map(person=>({...person, age:person.age+1}))

//console.log(changeages())
//const newArray = [1,2,3].map(_=>true)
//console.log(newArray)
let student1 = {name:"John"}
let student2 = {name:"Mary"}
let newObject = {
 ...student1,
 ...student2,
 name: 'Daniel',
}

//console.log(newObject)

function getCount(str) {
  vowels=['a','e','i','o','u']
  let result=[...str]
  result=result.filter((a)=> vowels.includes(a))
  
  console.log(result)
  return result.length;
}

console.log(getCount('abracadabra'))