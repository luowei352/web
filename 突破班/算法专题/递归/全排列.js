let all = [];
function conflict(thisLetter,num){
    for(let i = 0;i<num;i++){
        if(thisLetter == all[i]){
            return true;
        }
    }
    return false;
}

function find(pData,num){
    if (pData.length == num){
        return console.log(all);
    }
    for(let i = 0;i < pData.length;i++){
        if (!conflict(pData[i],num)){
            all[num] = pData[i];
            find(pData,num+1);
        }
    }
}

let pData = ['a','b','c','d'];
find(pData,0);

/*
function findFullArrangement(pendingData,deep){
    for(let allDataNum = 0; allDataNum < pendingData.length; allDataNum++){
        for(let pendingDataNum = 0; pendingDataNum < pendingData.length; pendingDataNum++){
            if (!conflict(pendingData[pendingDataNum],all)){
                all[allDataNum] = pendingData[pendingDataNum];
            }
        }
    }
}
*/