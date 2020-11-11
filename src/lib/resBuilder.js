import * as lib from "."

/*
Build breakdown response
 */
const breakdown = (strategy, lotCode, sortedData, handleErrVars) => {
    try {
        return {
            breakDownType: strategy,
            lotCode: lotCode,
            breakdown: sortedData
        };
    } catch (e) {
        lib.handleErr(handleErrVars, e);
    }
}

/*
Build valid lot codes result
 */
const validLotCodes = () => {
    return {lotCodes: lib.dataConnector.getValidLotCodes()}
};

/*
Build valid lot codes result
 */
const validBreakdownStrategies = () => {
    return {strategies: lib.dataConnector.getValidStrategies()}
};

export {breakdown, validLotCodes, validBreakdownStrategies};