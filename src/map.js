const tail = require('./tail');

const mapList = (list, functionToBeApplied, resultList) => {
    if (list.length > 0) {
        let resultElement = functionToBeApplied(list[0]);
        resultList.push(resultElement);
        return mapList(tail(list), functionToBeApplied, resultList);
    }
    return resultList;
}

const map = (list, functionToBeApplied) => {
    let resultList = [];
    let mappedList = mapList(list, functionToBeApplied, resultList);
    return mappedList
}

module.exports = map;