import * as lib from '../lib'

export default (req, res) => {
    const handleErrVars = {
        code: 500,
        message: '500 Internal Err. Could not retrieve breakdown strategies',
        res: res
    };
    res.json(lib.constructValidParamsRes('getBreakdownStrategiesHandler', handleErrVars));
}