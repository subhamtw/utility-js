const max = (list) => {
    let maxElement = undefined;
    if(list.length>0)
        maxElement=list[0];
    for(let i=1; i<list.length; i++){
        if(maxElement<list[i])
            maxElement=list[i];
    }
    return maxElement;
}

module.exports = max;