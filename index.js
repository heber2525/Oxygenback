import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { mongoConnect } from './api/services/db.js';

import taskRoutes from './api/routes/task.routes.js';

mongoConnect();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/task', taskRoutes);

export const server = app.listen(3200);
