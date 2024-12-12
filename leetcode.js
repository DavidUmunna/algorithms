function two_sum(arr,target) {
    res=[]
    for (let i=1; i<arr.length;i++){
        let j=i-1
        while (j>=0 && i!=j ){
            sum_=arr[i]+arr[j]
            if (sum_==target){
                    res.push(i)
                    res.push(j)
            }
            j-=1;
        }        
    }
    return console.log(res.sort())
}


var  nums = [2,7,11,15]
target=9
two_sum(nums,target)