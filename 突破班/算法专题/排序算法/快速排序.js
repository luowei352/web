function quickSort(arr,left,right){
    if(left>=right){
        return;
    }
    let pivot = arr[right];
    let i = left;
    let j = right;
    while (i<j){
        while(i<j&&arr[i]<pivot){
            i++;
        }
        arr[j]=arr[i];
        while(i<j&&arr[j]>=pivot){
            j--;
        }
        //此处pivot前的两个符号之和必须为全集，不可以为<和>，否则在遇到arr[i]=pivot时，会进入死循环
        //可以为<，>=；<=，>；<=，>=三组之一
        arr[i]=arr[j];
    }
    arr[j]=pivot;
    quickSort(arr,left,j-1);
    quickSort(arr,j+1,right);
}
arr=[1,3,34,5,63,1,4,5674,6,3,3,32,34785,0,25,48,7,5,9098,3];
quickSort(arr,0,arr.length-1);
console.log(arr);