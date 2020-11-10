import * as lib from "../lib";

export default (req, res) => {
    const strategy = req.breakDownStrategy;
    const lotCode = req.lotCode;

    const handleErrVars = {
        code: 500,
        message: `500 Internal Server Error:
    Could not handle breakdown request
    Strategy: ${strategy}
    Lot Code: ${lotCode}`,
        res: res
    };

    const data = lib.getData(lotCode, handleErrVars);
    const brokenDownData = lib.breakDownData(data, strategy, handleErrVars);
    const sortedData = lib.sortData(brokenDownData, handleErrVars);
    const returnObj = lib.constructBreakdownRes(strategy, lotCode, sortedData, handleErrVars);

    res.json(returnObj);
};