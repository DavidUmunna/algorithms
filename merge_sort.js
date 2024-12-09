
function merge_sort(arr){
  if (arr.length<=1){
    return arr
  }
  mid=Math.round(arr.length/2)
  lefthalf=arr.slice(0,mid)
  righthalf=arr.slice(mid)
  sortedleft=merge_sort(lefthalf)
  sortedright=merge_sort(righthalf)

  return merge (sortedleft,sortedright)

}

function merge(left,right){
    result=[]
    i=j=0
    while (i<left.length && j<right.length){
        if (left[i]<right[j]){
            result.push(left[i])
            i+=1
        }
        else {
            result.push(right[j])
            j+=1
        }

    }
    result.push(...left.slice(i))
    result.push(...right.slice(j))
    return result
}

arr=[6,2,4,3,56,23,98,34]


console.log(merge_sort(arr))