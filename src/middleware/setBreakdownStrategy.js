import * as lib from '../lib'

/*
Middleware to get the analysis strategy in the request url and set to req obj
 */
export default (req, res, next) => {
    const handleErrVars = {
        code: 400,
        message: '400 Bad Request: Invalid Breakdown Strategy',
        res: res
    };
    const strategy = lib.parseParams(req, 'setBreakDownStrategy', handleErrVars);
    lib.validateParams('setBreakDownStrategy', strategy, handleErrVars);
    req.breakDownStrategy = strategy.toLowerCase(); //standardise
    next();
};