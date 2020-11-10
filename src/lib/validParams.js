import * as dataConnector from '../../data'
import * as lib from '.'

// called on lot codes get request
const getValidLotCodes = () => {
    return dataConnector.validParams.codes;
}

// called on valid analysisStrategies get request
const getValidStrategies = () => {
    return dataConnector.validParams.strategies;
}

// validates params with known analysis analysisStrategies and lotcodes
const validateParams = (caller_name, param, handleErrVars) => {
    let validList;
    caller_name === 'setStrategy' ? validList = getValidStrategies()
        : caller_name === 'setLotCode' ? validList = getValidLotCodes()
        : lib.handleErr(handleErrVars);
    if (validList.includes(param)) return true;
    lib.handleErr(handleErrVars);
};


export {getValidLotCodes, getValidStrategies, validateParams};
