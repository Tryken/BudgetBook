import express from 'express';
import cors from 'cors';
import morganMiddleware from './middlewares/morgan.middleware';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morganMiddleware);
app.use(express.static('./dist/public'));

export default app;
