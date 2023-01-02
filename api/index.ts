import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "*", methods: ["GET", "POST"] }));

app.use((req: Request, _res: Response, next: () => void) => {
    console.log(req.method, req.originalUrl);
    next();
});

var date: Date;

app.get("/get", (_req: Request, res: Response) => {
    if (date) {
        res.json({ date });
    } else {
        res.json({ date: null });
    }
});

app.post("/set", (req: Request, res: Response) => {
    date = new Date();
    res.json({ date });
});

const port = 3001;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
