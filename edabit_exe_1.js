/*class Bitwise{
    constructor(num1,num2){
        this.bin_1=num1
        this.bin_2=num2
        
  
    }
    bitwise_and(){
        var bin_and=(this.bin_1 | this.bin_2)

        return console.log(bin_and)
    }
    bitwise_OR(){
        var bin_or=(this.bin_1 & this.bin_2)
        

        return console.log(bin_or)
    }
    
    bitwise_XOR(){
        var bin_xor=(this.bin_1 ^ this.bin_2)
        
        return console.log(bin_xor)
    }

}*/

function minMax(arr) {
    console.log(arr)
    var min=Math.min(...arr)
    var max=Math.max(...arr)
    return [Math.min(...arr),Math.max(...arr)]
}

function sumofcubes(arr){
    sum=0
    for (let i=0;i<arr.length;i++){
        cube=Math.pow(arr[i],3)
        sum+=cube
    }
    return sum
}
function filter(arr){
    result=[]
    for (let i=0;i<arr.length;i++){
        if (typeof arr[i]==typeof 1){
            result.push(arr[i])
        }
    }
    return result
}

function symmetrical(num){
    num=num.toString()
    mid=Math.round(num.length/2)
    const left_side=num.slice(0,mid)
    const right_side=num.slice(mid)
    if ((left_side.length && right_side.length)==1){
        if (left_side[0]!=right_side[0]){
            return false
        }
    }
    if (left_side.length==right_side.length && left_side[0]==right_side[right_side.length-1] ||  left_side[1]==right_side[right_side.length-2]){
        return true
    }else{
        return false
    }
}

//const obj= new Bitwise(7,12)

//obj.bitwise_and()
//obj.bitwise_OR()
//obj.bitwise_XOR()


//console.log(symmetrical(23))


function counttrue(arr){
        var count=0
        for (let i=0;i<arr.length;i++){
            if (arr[i]==true){
                count+=1
            }
        }
        return count
}

//arr_1=[true, false, false, true, false]
//console.log(counttrue(arr_1))

function object_to_array(obj){
    const entriesArray = Object.entries(obj);
    return entriesArray
}



obj={
    D:1,
    C:2,
    G:3
}
//console.log(object_to_array(obj))



function array_of_multiples(num,n){
        result=[]
        for (let i=1;i<=n;i++){
            result.push(num*i)
        }
        return result
}

console.log(array_of_multiples(17,6))


function marathondistance(arr){
    sum=0
    for (let i=0;i<arr.length;i++){
           sum+=Math.abs(arr[i])
    }
    console.log(sum)
    if (sum==25){
        return true
    }else{
        return false
    }
    

}

arr=[-6, 15, 4]

marathondistance(arr)