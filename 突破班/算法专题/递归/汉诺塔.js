function move(start,end){
    console.log(start+"-->"+end);
}

function hano(one,two,three,level){
    if(level==1){
        return move (one,three);
    }
    hano(one,three,two,level-1);
    move(one,three);
    hano(two,one,three,level-1);
}

hano('a','b','c',3);