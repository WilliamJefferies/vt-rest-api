import * as strategies from '../breakDownStrategies';
import * as lib from './index';

/*
Calls strategy for breakdown and sorts data, could be two strategies in the future
 */
export default (data, strategy, handleErrVars) => {
    switch (strategy) {
        case 'year':
            return strategies.yearlyStrategy(data);
        case 'variety':
            return strategies.varietyStrategy(data);
        case  'region':
            return strategies.regionalStrategy(data);
        case 'year-variety':
            return strategies.yearVarietyStrategy(data);
        default:
            lib.handleErr(handleErrVars);
    }
};