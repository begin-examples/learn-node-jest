import express from 'express';
import routes from './routes/index.js';

export const app = express();
app.use(express.json());
app.use("/api", routes);

export const server = app.listen(5000, () => {
    console.log("Server has started!");
});
