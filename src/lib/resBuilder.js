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
Build valid params result
 */
const validParams = (caller_name, handleErrVars) => {
    let valid;
    try {
        caller_name === 'getBreakdownStrategiesHandler' ? valid = lib.dataConnector.getValidStrategies()
            : caller_name === 'getLotCodesHandler' ? valid = lib.dataConnector.getValidLotCodes()
            : lib.handleErr(handleErrVars);
        return {
            validInput: valid
        };
    } catch (e) {
        lib.handleErr(handleErrVars, e);
    }
};

export {breakdown, validParams};