function find(arr,start,end,target){
    var a = 0;
    function subfind(arr,start,end,target){
        if (a == 1){
            return;
        }
        let mid = Math.floor((end-start)/2)+start-1;
        if (target == arr[mid]){
            console.log("找到");
            a = 1;
            return;
        }
        else if (start == arr.length&&a == 0){
            console.log("未找到");
            return;
        }
        else if (start > end){
            return;
        }
        else{
            subfind(arr,start,mid,target);
            subfind(arr,mid+2,end,target);
        }
    }
    subfind(arr,start,end,target);
}

let arr1 = ['a','b','c','d','e','f','g'];
let arr2 = ['a','b','c','d','e','f','h'];
let arr3 = ['a','b','c','d','h','f','g'];
let arr4 = ['h','b','c','d','e','f','g'];

find(arr1,1,7,'h');
find(arr2,1,7,'h');
find(arr3,1,7,'h');
find(arr4,1,7,'h');