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

function preVisit(root){
    if(!root){
        return;
    }

    console.log(root.val);
    preVisit(root.left);
    preVisit(root.right);
}

console.log('pre');
preVisit(root);

function midVisit(root){
    if(!root){
        return;
    }

    midVisit(root.left);
    console.log(root.val);
    midVisit(root.right);
}

console.log('mid');
midVisit(root);

function afterVisit(root){
    if(!root){
        return;
    }

    afterVisit(root.left);
    afterVisit(root.right);
    console.log(root.val);
}

console.log('after');
afterVisit(root);

function levelVisit(root){
    let list = [];
    list.push(root);
    while(list.length!=0){
        let a = list.shift();
        if(a){
            console.log(a.val);
            list.push(a.left);
            list.push(a.right);
        }

    }
}

console.log('level');
levelVisit(root);