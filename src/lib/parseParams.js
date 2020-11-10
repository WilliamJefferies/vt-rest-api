import url from 'url';
import * as lib from '.'

/*
Extracts Params from API call
 */

export default (req, caller_name, handleErrParams) => {
    const expectedParamsSize = 3;
    let param;

    const req_url = url.parse(req.url).path;
    const params = req_url.split('/', expectedParamsSize);


    if (!params.length >= expectedParamsSize) {
        lib.handleErr(handleErrParams);
    }

    caller_name === 'setStrategy' ? param = params[1] // expected strategy param
        : caller_name === 'setLotCode' ? param = params[2] // expected lot code param
        : lib.handleErr(handleErrParams)

    return param;
};