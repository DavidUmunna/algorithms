const vowelcount=(str) => {
  vowels=['a','e','i','o','u']
  let result=[...str]
  result=result.filter((a)=> vowels.includes(a))
  
  console.log(result)
  return result.length;
}

