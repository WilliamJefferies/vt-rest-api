import * as lib from '../lib'

/*
Handles get /api/breakdown-strategies
 */
export default (req, res) => {
    const handleErrVars = {
        code: 500,
        message: '500 Internal Err. Could not retrieve breakdown strategies',
        res: res
    };
    res.json(lib.resBuilder.validBreakdownStrategies());
};