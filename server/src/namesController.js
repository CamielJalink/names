"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var util_1 = require("util");
var NamesController = /** @class */ (function () {
    function NamesController() {
        var _this = this;
        this.allNames = [];
        this.getAllNames().then(function (names) {
            _this.allNames = names;
            console.log(_this.allNames);
        });
    }
    NamesController.prototype.getAllNames = function () {
        var promisifyReadFile = util_1.promisify(fs_1.readFile);
        var names = [];
        return promisifyReadFile("./src/dummyDB.json", "utf8")
            .then(function (input) {
            if (input && input.length > 0) {
                console.log(input);
            }
            return names;
        })
            .catch(function (error) {
            throw (error);
        });
    };
    NamesController.prototype.writeName = function () {
        // import { writeFile } from "fs";
        // import { promisify } from "util";
        // import Transaction from "./transaction";
        // export default function saveTransactions(transactions: Transaction[]) {
        //   const promisiedWriteFile = promisify(writeFile);
        //   console.log("hello there");
        //   let JsonTransactions = JSON.stringify(transactions);
        //   return promisiedWriteFile('./data/transactions.json', JsonTransactions, 'utf8').then(() => {
        //     return;
        //   })
        // }
    };
    NamesController.prototype.addName = function (name, gender) {
        // uppercase the name
        // try to put the name in the database, or check if there's a duplicate
        var isValidName = false;
        return isValidName;
    };
    return NamesController;
}());
exports.default = NamesController;
