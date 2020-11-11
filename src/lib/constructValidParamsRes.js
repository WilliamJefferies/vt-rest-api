import * as lib from '.'

// make builders into one file todo
/*
Constructs res send object with either break down strategies or lot codes
should be in db wrapper in prod env
 */
export default (caller_name, handleErrVars) => {
    let valid;
    try {
        caller_name === 'getBreakdownStrategiesHandler' ? valid = lib.getValidStrategies()
            : caller_name === 'getLotCodesHandler' ? valid = lib.getValidLotCodes()
            : lib.handleErr(handleErrVars);
        return {
            validInput: valid
        }
    } catch (e) {
        lib.handleErr(handleErrVars, e);
    }
};