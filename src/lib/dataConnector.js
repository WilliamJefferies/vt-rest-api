import * as dataConnector from '../../data'
import * as lib from '.'

/*
Returns valid lot codes
 */
const getValidLotCodes = () => {
    return dataConnector.dbKeys.codes;
};

/*
Returns valid strategies
 */
const getValidStrategies = () => {
    return dataConnector.dbKeys.strategies;
};

/*
Returns data relevant to lot code
 */
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