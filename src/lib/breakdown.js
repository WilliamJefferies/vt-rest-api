import * as lib from './index';

/*
Runs a breakdown with a given strategy
 */
const run = (data, strategy, handleErrVars) => {
    let processedData = {};

    for (let item in data) {
        let {propertyType, propertyVal} = useStrategy(data[item], strategy, handleErrVars);
        let percentage = data[item].percentage;
        if (processedData.hasOwnProperty(propertyVal)) {
            processedData[propertyVal].percentage += percentage;
        } else {
            processedData[propertyVal] = {
                percentage: percentage
            };
            processedData[propertyVal][propertyType] = propertyVal;
        }
    }

    return processedData;
};

/*
Sorts unsorted break down results
 */
const sort = (unsortedBDResults) => {
    let sortable = [];
    let returnArr = [];
    for (let item in unsortedBDResults) {
        sortable.push([unsortedBDResults[item], unsortedBDResults[item].percentage]);
    }
    const sorted = sortable.sort((a, b) => b[1] - a[1]);

    for (let item in sorted) {
        returnArr.push(sorted[item][0]);
    }
    return returnArr;
};

const useStrategy = (item, strategy, handleErrVars) => {
    let propertyType;
    let propertyVal;
    switch (strategy) {
        case 'region':
            propertyType = 'region';
            propertyVal = item.region;
            break;
        case 'variety':
            propertyType = 'variety';
            propertyVal = item.variety;
            break;
        case 'year':
            propertyType = 'year';
            propertyVal = item.year;
            break;
        case ('year-variety'):
            propertyType = 'year-variety';
            propertyVal = `${item.year} - ${item.variety}`;
            break;
        default:
            lib.handleErr(handleErrVars);
    }
    return {propertyType, propertyVal};
}

export {run, sort};