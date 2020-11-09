import express from 'express';
import setStrategy from "./src/middleware/setStrategy";
import setLotCode from "./src/middleware/setLotCode";
import breakdownHandler from "./src/breakdownHandler";
const app = express();
const PORT = 3000;
// helmet ?

// set strategy
app.use(setStrategy)

// set lot code
app.use(setLotCode)

app.get('/api/breakdown/*', (req, res) => breakdownHandler)


app.listen(PORT, () => {
    `Server running on ${PORT}`
})