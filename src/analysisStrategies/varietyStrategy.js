export default (data) => {
    let processedData = {};
    for (let item in data) {
        let varietyName = data[item].variety;
        let percentage = data[item].percentage;
        if (processedData.hasOwnProperty(varietyName)) {
            processedData[varietyName].percentage += percentage;
        } else {
            processedData[varietyName] = {
                variety: varietyName,
                percentage: percentage
            }

        }
    }

    return processedData;
};