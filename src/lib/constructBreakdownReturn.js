import * as lib from '.'

// constructs breakdown return object
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