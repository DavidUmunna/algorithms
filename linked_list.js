class node{
    constructor (data){
        this.value=data
        this.next=null
    }
}


class linkedlist{
    constructor(){
        this.head=null
        this.size=0      
    }
    add(data){
        let new_node= new node(data)
        if(this.head==null){
            this.head=new_node
        }
        else{
            let current=this.head
            while(current.next){
                current=current.next

            }
            current.next=new_node
        }
        this.size++;
        
    }
    remove(data){
        let current=this.head
        let previous=null
        while(current){
            if (current.value==data){
                if (previous){
                    previous.next=current.next
                }
                else{
                    this.head=current.next
                }
                this.size--;
                break
            }
            previous=current
            current=current.next
        }
    }
    print(){
        let current=this.head
        while(current){
            console.log(current.value)
            current=current.next
        }
    }

    lowestvalue(){
        if (this.head==null){
            return null
        }
        let minval=this.head.value
        let current=this.head.next
        while (current){
            if(current.value<minval){
                minval=current.value
                
            }current=current.next
        }
        return `smallest value: ${minval}`
    }

    
}

let Linkedlist=new linkedlist()

Linkedlist.add(10)
Linkedlist.add(2)
Linkedlist.add(3)
Linkedlist.add(4)
Linkedlist.add(5)
Linkedlist.print()
console.log(Linkedlist.lowestvalue())


function walk(steps){
    
    if (steps==0){
        return 
    }walk(steps-1)
    console.log(`you have walked ${steps} steps`)
}


function pow(x,n){
    let result;
    if (n==1) {return x+1}
    result=pow(x,n-1)
    return x*result

}

///console.log(pow(2,3))

function factorial(n){
    if (n<=1){
        return 1
    }
    return n*factorial(n-1)
}

console.log(factorial(5))