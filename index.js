import express from 'express';
import helmet from 'helmet';
import * as middleware from './src/middleware';
import * as handlers from "./src/handlers";
import cors from 'cors'

const app = express();
const PORT = 8080;

// first layer security
app.use(helmet())

// cross origin resource sharing
app.use(cors())

// middleware to get the break down strategy param in the request url and set to req obj
app.use('/api/breakdown/', middleware.setBreakDownStrategy);

// middleware to get the lot code param in the request url and set to req obj
app.use('/api/breakdown/', middleware.setLotCode);

app.get('/api/breakdown/*', (req, res) => handlers.breakDown(req, res));
app.get('/api/lotcodes', (req, res) => handlers.lotCodes(req, res));
app.get('/api/breakdown-strategies', (req, res) => handlers.breakDownStrategies(req, res));

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});