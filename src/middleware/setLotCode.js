import * as lib from '../lib'

/*
Middleware to get the lotcode in the request url and set to req obj
 */
export default (req, res, next) => {
    const handleErrParams = {
        code: 500,
        message: '400 Bad Request: Invalid Lot Code',
        res: res
    };
    const lc = lib.parseParams(req, 'setLotCode', handleErrParams);
    lib.validateParams('setLotCode', lc, handleErrParams);
    req.lotCode = lc.toLowerCase(); //standardise
    next();
};