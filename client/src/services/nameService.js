export default class NameService {
  url = 'http://localhost:9000/';  // ToDo: this should become some sort of ENV var
  
  constructor() {}

  addName(name, gender) {
    const data = {
      'name': name,
      'gender': gender
    }
    return this.postData(data, this.url + 'addName')
      .then((responseData) => {
        return responseData;
      });
  }

  async postData(data, url){
    const postResponse = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return postResponse.json();
  }
}