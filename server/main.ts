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

app.post('/addName', function (req, res) {
  const postData = req.body;
  return namesController.addName(postData.name, postData.gender).then((response) => {
    res.json({ "success": response });
  })
})

app.get('/', (req, res) => {
  res.sendFile(indexPath + '/index.html');
});

app.get('*', function (req, res) {
  res.redirect('/');
});

app.listen(port, process.env.IP || '', () => {
  console.log("Server is running on " + port);
});