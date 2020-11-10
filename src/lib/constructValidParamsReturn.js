import * as lib from '.'

/*
Constructs res send object with either analysis strategies or lot codes
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
    } catch (err) {
        lib.handleErr(handleErrVars, err);
    }
};