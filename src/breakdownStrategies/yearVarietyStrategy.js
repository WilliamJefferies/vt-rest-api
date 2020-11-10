// should be one function/file for now. strategies do not differ enough todo

export default (data) => {
    let processedData = {};
    for (let item in data) {
        let variety = data[item].variety;
        let year = data[item].year;
        let propertyName = `${year} - ${variety}`;
        let percentage = data[item].percentage;
        if (processedData.hasOwnProperty(propertyName)) {
            processedData[propertyName].percentage += percentage;
        } else {
            processedData[propertyName] = {
                year: year,
                variety: variety,
                percentage: percentage
            }

        }
    }

    return processedData;
};