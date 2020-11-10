import * as lib from '../lib'

/*
Middleware to get the lotcode in the request url and set to req obj
 */
export default (req, res, next) => {
    const handleErrVars = {
        code: 500,
        message: '400 Bad Request: Invalid Lot Code',
        res: res
    };
    const lc = lib.parseParams(req, 'setLotCode', handleErrVars);
    lib.validateParams('setLotCode', lc, handleErrVars);
    req.lotCode = lc.toLowerCase(); //standardise
    next();
};