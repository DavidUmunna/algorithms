class treenode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }

}

class binarytree{
    constructor(){
        this.root=null
        this.height=0
    }

    inset(value){
        let newnode=new treenode(value)
        if (this.root==null){
            this.root=newnode
        }else{
            this.insert_node(this.root,newnode)
            
        }
    }
    insert_node(node,newnode){
            let currentnode=node
            if (currentnode.value>newnode.value){
                if (currentnode.left==null){
                    currentnode.left=newnode
                }else{
                    this.insert_node(currentnode.left,newnode)
                }
            }else{
                if (currentnode.right==null){
                    currentnode.right=newnode
                }else{
                    this.insert_node(currentnode.right,newnode)
                    
                }
            }
            
    }
    search(value){
        return this.search_node(this.root,value)
    }

    search_node(current,value){
        if(current===null) return false
        if(value===current.value) return true
        if (value<current.value){
            return this.search_node(current.left,value)
        }else{
            return this.search_node(current.right,value)
        }
    }
    print(){
        
        this.inordertraversal(this.root);
    }
    inordertraversal(currentnode){
        if (currentnode!==null){
            this.inordertraversal(currentnode.left)
            console.log(currentnode.value)
            this.inordertraversal(currentnode.right)
        }
       
    }
}


tree_=new binarytree()

tree_.inset(5)
tree_.inset(2)
tree_.inset(3)
tree_.inset(7)
tree_.inset(9)

tree_.print()