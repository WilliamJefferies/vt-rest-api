import * as lib from '.'

/*
Sorts an object into an array of nested percentage values
could be done better with more time to avoid duplication of memory
 */
export default (data) => {
    let sortable = [];
    let returnData = [];
    for (let item in data) {
        sortable.push([data[item], data[item].percentage]);
    }
    const sorted = sortable.sort(function (a, b) {
        return b[1] - a[1];
    });

    for (let item in sorted) {
        returnData.push(sorted[item][0]);
    }
    return returnData;
};