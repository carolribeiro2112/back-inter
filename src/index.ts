import express from 'express';

const app = express();
const PORT = 3333;

app.get('/', (req, res) => res.send('Express + Typescript server'))
  
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`); 
});
