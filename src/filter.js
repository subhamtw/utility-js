const tail = require('./tail');

const filterList = (list, functionToBeApplied, resultList) => {
    if(list.length>0) {
        let filterAppliedElement = functionToBeApplied(list[0]);
        if (filterAppliedElement) {
            resultList.push(list[0]);
        }
        return filterList(tail(list), functionToBeApplied, resultList);
    }
    return resultList;
}

const filter = (list, functionToBeApplied) => {
    let resultList = [];
    let filteredList = filterList(list, functionToBeApplied, resultList);
    return filteredList;
}

module.exports = filter;