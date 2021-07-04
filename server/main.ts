import express from "express";
import path from "path";

const app = express();
let port = Number(process.env.PORT) || 9000;

const indexPath: string = path.join('./build')
app.use(express.static(indexPath));

app.get('/', (req, res) => {
  res.sendFile(indexPath + '/index.html');
});

app.get('*', function (req, res) {
  res.redirect('/');
});

app.listen(port, process.env.IP || '', () => {
  console.log("Server is running on " + port);
});