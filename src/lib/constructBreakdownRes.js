import * as lib from './index'

/*
Builder should not be split in seperate files
 */


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