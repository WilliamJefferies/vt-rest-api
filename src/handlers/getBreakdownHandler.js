import * as lib from "../lib";

export default (req, res) => {
    const strategy = req.analysisStrategy;
    const lotCode = req.lotCode;

    const handleErrVars = {
        code: 500,
        message: `500 Internal Server Error:
    Could not handle breakdown request
    Strategy: ${strategy}
    Lot Code: ${lotCode}`,
        res: res
    };

    const data = lib.getData(lotCode, handleErrParams);
    const brokendownData = lib.breakdownData(data, strategy, handleErrParams);
    const sortedData = lib.sortData(brokendownData, handleErrParams);
    const returnObj = lib.constructBreakdownRes(strategy, lotCode, sortedData, handleErrVars);

    res.json(returnObj);
};