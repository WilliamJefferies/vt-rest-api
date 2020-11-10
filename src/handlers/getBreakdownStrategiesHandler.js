import * as lib from '../lib'

export default (req, res) => {
    const handleErrVars = {
        code: 500,
        message: '500 Internal Err. Could not retrieve analysis strategies',
        res: res
    };
    res.json(lib.constructValidParamsReturn('getBreakdownStrategiesHandler', handleErrVars));
}