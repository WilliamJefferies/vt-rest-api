import * as lib from '../lib'

/*
Middleware to get the analysis strategy in the request url and set to req obj
 */
export default (req, res, next) => {
    const handleErrParams = {
        code: 400,
        message: '400 Bad Request: Invalid Breakdown Strategy',
        res: res
    };
    const strategy = lib.parseParams(req, 'setStrategy', handleErrParams);
    lib.validateParams('setStrategy', strategy, handleErrParams);
    req.analysisStrategy = strategy.toLowerCase(); //standardise
    next();
};