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

//console.log(getCount('abracadabra'))


/*const person={
  name:'james',
  email:'james.simon@gmail.com',
  login (){
    console.log(this.email+ " has logged in")
  },
  logout(){
      console.log(this.email+ " has logged out")
  }
}*/



//classes
class User{
  constructor(name,email){
    this.name=name
    this.email=email
    this.score=0
  }

  login() {
    console.log(this.name+' just logged in')
    return this
  }
  return_email(){
    console.log(this.email + " is his email")
    return this
  }
  logount() {
    console.log(this.name+' just logged out')
    return this
    
  }
  updatethis(){
    this.score++;
    console.log(this.email, 'score is now', this.score)
    return this
  }

}
class admin extends User{
  /*constructor(name,email){
    super(name)
  }*/
  delete_user(user){
    users=users.filter(u=>{
      return u.email!=user.email;
    })
  }
}

let user1=new User('ryu','ryu.simeon@gmail.com');
let user2=new User('john','john.april@gmail.com');
let user3=new User('james','james.april@gmail.com');
let user4=new admin('jane','jane.caroline@gmail.com');
var Admin=new admin('shaun@ninja.com','shaun')



var users=[user1,user2,user3,user4]
user3.login().updatethis().updatethis().logount()
console.log(user1.login())
console.log(user2.logount())
console.log(user2.return_email())
Admin.delete_user(user1)
console.log(users)



//user2.updatethis().updatethis().logount()

function repeatStr (n, s) {
  
  return s.repeat(n);
}
//console.log(repeatStr(6,'I'))

//to find sum of odd numbers
const odd_num=(n)=>n%2!=0;
function generateNumbers(start, end,condition) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i).filter(condition);
}
//console.log(generateNumbers(1, 1000, odd_num))
const rowSumOddNumbers= (n)=> generateNumbers(1, 1000000, odd_num).slice(((n*(n-1))/2),(n+(((n*(n-1)))/2))).reduce((total,current)=>total+current,0) 
//console.log(rowSumOddNumbers(42))


lst=[1,2,3,4,5]
//console.log(lst[-1])



const increment=(y)=>{return y==0? 1:  y %2==1? (2*increment((y/2))): y+1 }

//console.log(increment(5))


const letters = new Set([1,2,3,4]);

const napsack=(arr,t)=>{
  total=0
  let set=[]
  for (let i=arr.length-1;i!=0;i--){
    
    if (total<=t){
      if (total+arr[i]>t){
        continue
      }
      total+=arr[i]
      set.push(arr[i])
    }
  }
  return (total,set)
}

//console.log(napsack([1,2,5,9,10],19))


//get first istem of set
/*const set = new Set();
set.add(2);
set.add(3);

// return the first item of Set 
function getFirstItemOfSet(set) {
  for(let item of set) {
    if(item) {
       return item;
    }   
  }
  return undefined;
}

const first = getFirstItemOfSet(set);
console.log('first item =', first);*/


const data=new Set(['1', '2', '3']);

const first = [...data][0];

//console.log(first)
//returns productnof yz
function multiply(y,z){
  const c=2
  if (z==0){
    return 0
  }else{
    return (multiply(c*y,(z/c))+y*(z%c))
  }
}

//console.log(multiply(5,8))
function divide(num,div){
  let count=0
  let times=0
  for (let i=0;i<num;i++){
        times+=1
        if (times==div){
          count+=1
          times=0
        } 
  }
  return count
}
//console.log(divide(6,2))


var userone