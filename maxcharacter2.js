function maxch(str) {
    const mape = {};

    for (let word of str){
        if(!mape[word]){
            mape[word] = 1;
        } else { 
            mape[word]++;
        }

    }

}

maxch("hello");