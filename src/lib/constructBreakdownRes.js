import * as lib from './index'

// make builders into one file todo


// Constructs breakdown res send object
export default (strategy, lotCode, sortedData, handleErrVars) => {
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