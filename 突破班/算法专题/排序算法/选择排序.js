function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                k=arr[j];
                arr[j]=arr[i];
                arr[i]=k;
            }
        }
    }
}

let arr=[3,4,6,8,4,2,5,1,10];

console.log(arr);

selectionSort(arr);

console.log(arr);