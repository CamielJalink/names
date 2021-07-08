import { readFile } from "fs";
import { promisify } from "util";

export default class NamesController {
  allNames: any[] = [];

  constructor() {
    this.getAllNames().then((names: any[]) => {
      this.allNames = names;
      console.log(this.allNames);
    });
  }

  getAllNames() {
    let promisifyReadFile = promisify(readFile);
    let names: any[] = [];

    return promisifyReadFile("./src/dummyDB.json", "utf8")
      .then((input: any) => {
        if (input && input.length > 0) {
          console.log(input);
        }
        return names;
      })
      .catch((error: Error) => {
        throw (error);
      })
  }

  writeName() {
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
  }

  addName(name: string, gender: string) {
    // uppercase the name
    // try to put the name in the database, or check if there's a duplicate
    let isValidName: boolean = false;
    return isValidName;
  }
}