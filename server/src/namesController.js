"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var util_1 = require("util");
var NamesController = /** @class */ (function () {
    function NamesController() {
        this.allNames = [];
        this.promisifiedReadFile = util_1.promisify(fs_1.readFile);
        this.promisifiedWriteFile = util_1.promisify(fs_1.writeFile);
        this.getAllNames();
    }
    // Reads json "database"
    NamesController.prototype.getAllNames = function () {
        var _this = this;
        return this.promisifiedReadFile("./src/dummyDB.json", "utf8")
            .then(function (input) {
            if (input && input.length > 0) {
                _this.allNames = JSON.parse(input);
            }
        })
            .catch(function (error) {
            throw (error);
        });
    };
    // writes names array to the json "database"
    NamesController.prototype.writeNamesToDB = function () {
        return this.promisifiedWriteFile("./src/dummyDB.json", JSON.stringify(this.allNames), 'utf8');
    };
    // Check if a name isn't on the list yet, and then add it. 
    NamesController.prototype.addName = function (name, gender) {
        var isNewName = true;
        name = name.toLowerCase();
        this.allNames.forEach(function (savedName) {
            if (savedName.name.toLowerCase() === name && savedName.gender === gender) {
                isNewName = false;
            }
        });
        // If it's a new name, capitalize it's first letter and add it to the list of names.
        if (isNewName) {
            var nameInitialCase = name.charAt(0).toUpperCase() + name.slice(1);
            var newName = {
                name: nameInitialCase,
                gender: gender
            };
            this.allNames.push(newName);
            return this.writeNamesToDB().then(function () {
                return true;
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    return NamesController;
}());
exports.default = NamesController;
