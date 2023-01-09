import { createClient } from 'redis';
import cors from 'cors';
import express, { Request, Response } from 'express';

const LAST_CLICKED = 'lastClicked';

const app = express();
const redis = createClient({ url: 'redis://db:6379' });

app.use(cors({ origin: '*', methods: ['GET', 'POST'] }));

app.use((req: Request, _res: Response, next: () => void) => {
    console.log(req.method, req.originalUrl);
    next();
});

app.get('/get', async (req: Request, res: Response) => {
    const date = await redis.get(LAST_CLICKED);
    res.json({ date });
});

app.post('/set', async (_req: Request, res: Response) => {
    const date = new Date();
    await redis.set(LAST_CLICKED, date.toISOString());
    res.end();
});

const port = 3001;

app.listen(port, async () => {
    console.log(`Server running at http://localhost:${port}`);

    // Setup redis
    redis.on('error', (error: any) => console.log('Redis Client Error', error));
    await redis.connect();
});
