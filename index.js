import express from 'express';
import helmet from 'helmet';
import * as middleware from './src/middleware';
import * as handlers from "./src/handlers";

const app = express();
const PORT = 3000;

// first layer security
app.use(helmet())

// middleware for identifying the break down strategy
app.use('/api/breakdown/', middleware.setBreakDownStrategy);

// middleware for identifying the lot code
app.use('/api/breakdown/', middleware.setLotCode);

app.get('/api/breakdown/*', (req, res) => handlers.getBreakDownHandler(req, res));


app.get('/api/lotcodes', (req, res) => handlers.getLotCodesHandler(req, res));
app.get('/api/breakdown-strategies', (req, res) => handlers.getBreakDownStrategiesHandler(req, res));


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});