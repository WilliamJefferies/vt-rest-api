import * as lib from '../lib';

export default (req, res) => {
    const handleErrParams = {
        code: 500,
        message: '500 Internal Err. Could not retrieve lot codes',
        res: res
    };

    res.json(lib.constructValidParamsReturn('getLotCodesHandler', handleErrParams));
}