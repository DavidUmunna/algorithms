function merge_sort(arr){
   start=0
   end=(arr.length)-1
   mid=Math.round(arr.length/2)
   left_half=arr.slice(start,mid)
   right_half=arr.slice(mid)
   
   return merge(left_half,right_half)
    

    
}
function merge(left,right){
    result=[]
    i=j=0

    while (i<left.length && j<right.length){
        if (left[i]<right[j]){
            result.push(left[i])
            i+=1
        }
        else{
            result.push(right[j])
            j+=1
        }
        
    }
    result.concat(...left.slice(i))
    result.concat(...right.slice(j))
    return result
}
arr=[6,5,4,8,9,2,43,56,12,76,23,34,6,70]

console.log(merge_sort(arr))