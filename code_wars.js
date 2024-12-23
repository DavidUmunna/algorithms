
//Vowel Count
const vowelcount=(str) => {
  vowels=['a','e','i','o','u']
  let result=[...str]
  result=result.filter((a)=> vowels.includes(a))
  
  console.log(result)
  return result.length;
}

//Even or Odd
const eveorodd=(number)=>{return number%2==0? 'Even':'Odd'}
let ls=[1,2,3,4]

function getMiddle(s) {
    const result=[...s]
    const isFloat = (num) => typeof num === 'number' && !Number.isInteger(num);
    return isFloat((result.length-1)/2)==true? result.slice(Math.floor((result.length-1)/2),(Math.round((result.length-1)/2)+1)).join(''):result[(result.length-1)/2]
    
}

//console.log(getMiddle('test'))

