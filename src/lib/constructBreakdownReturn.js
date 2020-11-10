import * as lib from '.'

// Constructs breakdown res send object
export default (strategy, lotCode, sortedData, handleErrParams) => {
    try {
        return {
            breakDownType: strategy,
            lotCode: lotCode,
            breakdown: sortedData
        };
    } catch (err) {
        lib.handleErr(handleErrParams, err);
    }
}