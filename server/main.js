"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var port = Number(process.env.PORT) || 9000;
var indexPath = path_1.default.join('./build');
app.use(express_1.default.static(indexPath));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.sendFile(indexPath + '/index.html');
});
app.post('/addName', function (req, res) {
    var postData = req.body;
    console.log(postData);
    var response = true;
    res.json({ success: response });
});
app.get('*', function (req, res) {
    res.redirect('/');
});
app.listen(port, process.env.IP || '', function () {
    console.log("Server is running on " + port);
});
