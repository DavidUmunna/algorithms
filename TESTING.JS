



var lengthOfLongestSubstring=function (s){
    
    var dict={}
    for (let i=0;i<s.length;i++){
        if (dict[s[i]]==undefined){
            dict[s[i]]=1
        }else{
            dict[s[i]]+=1
        }
        
    }
    console.log(Object.keys(dict).length)
}


//lengthOfLongestSubstring('abcbbcd')

//var obj={'a':1,'b':3,'c':2}


//console.log(Object.keys(obj).length)


//var s="pwwkew"

//console.log(s.substring(2,s.length))

function isValidSubstring(sub) {
    return sub.length === new Set(sub).size;; // Valid if all characters are unique
}

const s = "pwwkew";





function substring(s){
    result=[]
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            maxes=isValidSubstring(s.substring(i, j)) 
            result.push(maxes)
        }
    }return console.log(Math.max(...result))
}

substring(s)