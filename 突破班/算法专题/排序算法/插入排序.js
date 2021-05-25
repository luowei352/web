function insertSort(arr){
    for(let i = 1; i < arr.length; i++){
        let key = arr[i];
        let j = i-1;
        for(j; j >= 0;j--){
            if(arr[j]>key)
                arr[j+1]=arr[j];
            else
                break;
        }
        arr[j+1]=key;
    }
}

let arr=[3,4,6,8,4,2,5,1,10];

console.log(arr);

insertSort(arr);

console.log(arr);