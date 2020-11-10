import * as lib from '.'

/*
constructs return object with either analysis strategies or lot codes
should be in db wrapper in prod env
 */
export default (caller_name, handleErrParams) => {
    let valid;
    try {
        caller_name === 'getAnalysisStrategiesHandler' ? valid = lib.getValidStrategies()
            : caller_name === 'getLotCodesHandler' ? valid = lib.getValidLotCodes()
            : lib.handleErr(handleErrParams);
        return {
            validInput: valid
        }
    } catch (err) {
        lib.handleErr(handleErrParams, err);
    }
};