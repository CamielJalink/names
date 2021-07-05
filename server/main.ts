import express from "express";
import path from "path";

const app = express();
let port = Number(process.env.PORT) || 9000;

const indexPath: string = path.join('./build')
app.use(express.static(indexPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(indexPath + '/index.html');
});

app.post('/addName', function (req, res) {
  const postData = req.body;
  console.log(postData);
  let response: boolean = true;
  res.json({ success: response });
})

app.get('*', function (req, res) {
  res.redirect('/');
});

app.listen(port, process.env.IP || '', () => {
  console.log("Server is running on " + port);
});