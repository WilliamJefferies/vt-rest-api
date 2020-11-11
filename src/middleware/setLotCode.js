import * as lib from '../lib'

/*
Middleware to get the lot code param in the request url and set to req obj
 */
export default (req, res, next) => {
    const handleErrVars = {
        code: 500,
        message: '400 Bad Request: Invalid Lot Code',
        res: res
    };
    const lc = lib.params.parse(req, 'setLotCode', handleErrVars);
    lib.params.validate('setLotCode', lc, handleErrVars);
    req.lotCode = lc.toLowerCase(); //standardise
    next();
};