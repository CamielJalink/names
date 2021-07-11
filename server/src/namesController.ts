import { readFile, writeFile } from "fs";
import { promisify } from "util";

interface Name {
  name: string,
  gender: string
}

export default class NamesController {
  allNames: Name[] = [];
  promisifiedReadFile = promisify(readFile);
  promisifiedWriteFile = promisify(writeFile);

  constructor() {
    this.getAllNames();
  }

  // Reads json "database"
  getAllNames() {
    return this.promisifiedReadFile("./src/dummyDB.json", "utf8")
      .then((input: any) => {
        if (input && input.length > 0) {
          this.allNames = JSON.parse(input);
        }
      })
      .catch((error: Error) => {
        throw (error);
      })
  }

  // writes names array to the json "database"
  writeNamesToDB() {
    return this.promisifiedWriteFile("./src/dummyDB.json", JSON.stringify(this.allNames), 'utf8');
  }

  // Check if a name isn't on the list yet, and then add it. 
  addName(name: string, gender: string) {
    let isNewName: boolean = true;
    name = name.toLowerCase();

    this.allNames.forEach((savedName: Name) => {
      if(savedName.name.toLowerCase() === name && savedName.gender === gender) {
        isNewName = false;
      }
    })

    // If it's a new name, capitalize it's first letter and add it to the list of names.
    if(isNewName) {
      const nameInitialCase = name.charAt(0).toUpperCase() + name.slice(1);
      const newName: Name = {
        name: nameInitialCase,
        gender
      };
      this.allNames.push(newName);

      return this.writeNamesToDB().then(() => {
        return true;
      });
    }
    else {
      return Promise.resolve(false);
    }
  }
}