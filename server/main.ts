import express from "express";
import path from "path";

const app = express();
let port = Number(process.env.PORT) || 9000;
app.use(express.static(path.join('../clientside/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join('../clientside/build', 'index.html'));
});

app.listen(port, process.env.IP || '', () => {
  console.log("Server is running");
});