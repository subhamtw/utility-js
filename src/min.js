const min = (list) => {
    let minElement = undefined;
    if(list.length>0)
        minElement=list[0];
    for(let i=1; i<list.length; i++){
        if(minElement>list[i])
            minElement=list[i];
    }
    return minElement;
}

module.exports = min;