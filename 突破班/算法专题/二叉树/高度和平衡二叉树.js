class TreeNode{
    constructor(val,left,right){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

let left = new TreeNode("B",new TreeNode("D",null,null),null);
let right = new TreeNode("C",new TreeNode("E",null,null),null);
let root = new TreeNode("A",left,right);

function getHeight (root){
    if(!root){
        return 0;
    }
    else{
        l = getHeight(root.left);
        r = getHeight(root.right);
        return(Math.max(l,r)+1);
    }
}

console.log(getHeight(root));

function isAVL(root){
    if(!root){
        return true;
    }
    else if (Math.abs(getHeight(root.left)-getHeight(root.right)) > 1){
        return false
    }
    else if(isAVL(root.left)&&isAVL(root.left)){
        return true;
    }
}

console.log(isAVL(root));