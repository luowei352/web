function shellSort(arr) {
	for (let gap = arr.length >> 1; gap > 0; gap >>= 1) {
		for (let i = gap; i < arr.length; i++) {
			let temp = arr[i];
            let j;
			for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
				arr[j + gap] = arr[j];
			}
			arr[j + gap] = temp;
		}
	}
	return arr;
};

let arr=[3,4,6,8,4,2,5,1,10];

console.log(arr);

shellSort(arr);

console.log(arr);