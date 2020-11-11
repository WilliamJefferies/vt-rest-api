# VT Rest API
Simple rest API for demonstration of express.js skills using a strategy design pattern without async db.

Uses vanilla code middleware for param extraction and validation.

## Getting Started
##### Install & Start
```npm install && npm start```
##### Debug
```npm run debug```

## Calling the API

### Calls

##### Get lotcodes
```/api/lotcodes```
##### Get breakdown strategies
```/api/breakdown-strategies```
##### Get breakdown
```/api/breakdown/${breakdown-strategy}/${lotcode}```

### Returns
``` GET /api/breakdown/region/15MPPN002-VK ```
```
{
    "breakDownType": "region",
    "lotCode": "15mppn002-vk",
    "breakdown": [
        {
            "region": "Mornington",
            "percentage": 81
        },
        {
            "region": "Yarra Valley",
            "percentage": 10
        },
        {
            "region": "Heathcote",
            "percentage": 5
        },
        {
            "region": "Macedon",
            "percentage": 2
        },
        {
            "region": "Port Phillip",
            "percentage": 2
        }
    ]
}
```

``` GET /api/lotcodes ```

```
{
    "validInput": [
        "11YVCHAR001",
        "11YVCHAR002",
        "15MPPN002-VK"
    ]
}
```

``` GET /api/breakdown-strategieies ```

```
{
    "validInput": [
        "year",
        "variety",
        "region",
        "year-variety"
    ]
}
```

## SRC Tree
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
