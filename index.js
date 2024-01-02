import express from 'express';
const app = express();
const port = 5000;
app.listen (port,() => console.log(`it's alive on http://localhost:${port}` ))
app.get('/',(req,res) => res.json('running'));