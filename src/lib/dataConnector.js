import * as dataConnector from '../../data'
import * as lib from '.'

/*
DB Wrapper
 */

// called on lot codes get request
const getValidLotCodes = () => {
    return dataConnector.validParams.codes;
};

// called on valid strategies get request
const getValidStrategies = () => {
    return dataConnector.validParams.strategies;
};

const getData = (lotCode, handleErrVars) => {
    switch (lotCode.toLowerCase()) {
        case '11yvchar001':
            return dataConnector.lot1.components;
        case '11yvchar002':
            return dataConnector.lot2.components;
        case '15mppn002-vk':
            return dataConnector.lot3.components;
        default:
            lib.handleErr(handleErrVars);
    }
};

export {getValidLotCodes, getValidStrategies, getData};