import url from 'url';
import * as lib from '.'


/*
Validate params agaisnt keys
 */
const validate = (caller_name, param, handleErrVars) => {
    let validList;
    caller_name === 'setBreakDownStrategy' ? validList = lib.dataConnector.getValidStrategies()
        : caller_name === 'setLotCode' ? validList = lib.dataConnector.getValidLotCodes()
        : lib.handleErr(handleErrVars);
    if (validList.includes(param)) return true;
    lib.handleErr(handleErrVars);
};

/*
Extract params from req url
 */
const parse = (req, caller_name, handleErrVars) => {
    const expectedParamsSize = 3;
    let param;

    const req_url = url.parse(req.url).path;
    const params = req_url.split('/', expectedParamsSize);


    if (!params.length >= expectedParamsSize) {
        lib.handleErr(handleErrVars);
    }

    caller_name === 'setBreakDownStrategy' ? param = params[1] // expected strategy param
        : caller_name === 'setLotCode' ? param = params[2] // expected lot code param
        : lib.handleErr(handleErrVars)

    return param;
};

export {parse, validate}