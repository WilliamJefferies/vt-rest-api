import url from 'url';
import * as lib from '.'

/*
should group param functions together
 */

/*
Extracts Params from API call
 */
export default (req, caller_name, handleErrVars) => {
    const expectedParamsSize = 3;
    let param;

    const req_url = url.parse(req.url).path;
    const params = req_url.split('/', expectedParamsSize);


    if (!params.length >= expectedParamsSize) {
        lib.handleErr(handleErrVars);
    }

    caller_name === 'setStrategy' ? param = params[1] // expected strategy param
        : caller_name === 'setLotCode' ? param = params[2] // expected lot code param
        : lib.handleErr(handleErrVars)

    return param;
};