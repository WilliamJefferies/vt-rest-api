# VT Rest API
Simple rest API for demonstration of node skills using a strategy design pattern and no db wrapper.

Uses vanilla code middleware for param extraction and validation.

### Getting Started
##### Install & Start
```npm install && npm start```
##### Debug
```npm run debug```

### Calling the API
##### Get lotcodes
```/api/lotcodes```
##### Get breakdown strategies
```/api/breakdown-strategies```
##### Get breakdown
```/api/breakdown/${breakdown-strategy}/${lotcode}```

### SRC Structure
```
├───breakDownStrategies/
│   ├───index.js
│   ├───regionalStrategy.js
│   ├───varietyStrategy.js
│   ├───yearVarietyStrategy.js
│   └───yearlyStrategy.js
├───handlers/
│   ├───getBreakDownHandler.js
│   ├───getBreakDownStrategiesHandler.js
│   ├───getLotCodesHandler.js
│   └───index.js
├───lib/
│   ├───breakDownData.js
│   ├───constructBreakDownRes.js
│   ├───constructValidParamsRes.js
│   ├───getData.js
│   ├───handleErr.js
│   ├───index.js
│   ├───parseParams.js
│   ├───sortData.js
│   └───validParams.js
└───middleware/
    ├───index.js
    ├───setBreakDownStrategy.js
    └───setLotCode.js
```
