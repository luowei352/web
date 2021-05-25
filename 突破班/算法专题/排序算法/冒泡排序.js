function bubbleSort(arr){
    
    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<(arr.length-i);j++){
            if(arr[j]>arr[j+1]){
                let k = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=k;
            }
        }
    }
}

let arr=[3,4,6,8,4,2,5,1,10];

console.log(arr);

bubbleSort(arr);

console.log(arr);