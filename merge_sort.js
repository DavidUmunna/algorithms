
function merge_sort(arr){
  if (arr.length<=1){
    return arr
  }
  mid=Math.floor(arr.length/2)
  var lefthalf=arr.slice(0,mid)
  var righthalf=arr.slice(mid)
  var sortedleft=merge_sort(lefthalf)
  var sortedright=merge_sort(righthalf)

  return merge (sortedleft,sortedright)

}

function merge(left,right){
    var result=[]
    let i=0;
    let j=0;
    while (i<left.length && j<right.length){
        if (left[i]<right[j]){
            result.push(left[i])
            i+=1;
        }
        else {
            result.push(right[j])
            j+=1;
        }

    }
    return result.concat(left.slice(i)).concat(right.slice(j))
    
}

var arr=[6,2,4,3,56,23,98,34]


console.log(merge_sort(arr))