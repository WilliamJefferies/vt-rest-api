import * as lib from './index'

// Constructs breakdown res send object
export default (strategy, lotCode, sortedData, handleErrVars) => {
    try {
        return {
            breakDownType: strategy,
            lotCode: lotCode,
            breakdown: sortedData
        };
    } catch (err) {
        lib.handleErr(handleErrVars, err);
    }
}