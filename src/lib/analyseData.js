import * as strategies from '../analysisStrategies';
import * as lib from '.';

/*
Calls strategy for analysis and sorts data
 */
export default (data, strategy, handleErrParams) => {
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
            lib.handleErr(handleErrParams);
    }
};