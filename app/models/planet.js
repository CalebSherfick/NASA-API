export default class Planet {
  constructor(data) {
    this.title = data.title
    this.explanation = data.explanation
    this.url = data.url
  }




  getTemplate() {
    return `
    <h1>${this.title}</h1>
    <h6>${this.explanation}</h6>
    <img src="${this.url}">
    `
  }


}

