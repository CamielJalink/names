import express from "express";
import path from "path";
import NamesController from "./src/namesController";

const app = express();
let port = Number(process.env.PORT) || 9000;

const indexPath: string = path.join('./build')
app.use(express.static(indexPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const namesController = new NamesController();

app.get('/', (req, res) => {
  res.sendFile(indexPath + '/index.html');
});

app.post('/addName', function (req, res) {
  const postData = req.body;
  let response: boolean = namesController.addName(postData.name, postData.gender);
  res.json({ success: response });
})

app.get('*', function (req, res) {
  res.redirect('/');
});

app.listen(port, process.env.IP || '', () => {
  console.log("Server is running on " + port);
});