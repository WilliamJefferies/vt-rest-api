import * as dataConnector from '../../data'
import * as lib from '.'

// group param funcs together todo

// called on lot codes get request
const getValidLotCodes = () => {
    return dataConnector.validParams.codes;
}

// called on valid breakDownStrategies get request
const getValidStrategies = () => {
    return dataConnector.validParams.strategies;
}

// validates params with known breakDownStrategies and lotcodes
const validateParams = (caller_name, param, handleErrVars) => {
    let validList;
    caller_name === 'setBreakDownStrategy' ? validList = getValidStrategies()
        : caller_name === 'setLotCode' ? validList = getValidLotCodes()
        : lib.handleErr(handleErrVars);
    if (validList.includes(param)) return true;
    lib.handleErr(handleErrVars);
};


export {getValidLotCodes, getValidStrategies, validateParams};
