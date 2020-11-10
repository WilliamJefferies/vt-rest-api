/*
This is practically duplicate code and needs to be fixed up, was last step and not thought out
 */
export default (data) => {
    let processedData = {};
    for (let item in data) {
        let regionName = data[item].region;
        let percentage = data[item].percentage;
        if (processedData.hasOwnProperty(regionName)) {
            processedData[regionName].percentage += percentage;
        } else {
            processedData[regionName] = {
                region: regionName,
                percentage: percentage
            };

        }
    }

    return processedData;
};