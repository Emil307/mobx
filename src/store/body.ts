import { makeAutoObservable } from "mobx";

class Body {
  color = 'white'
  constructor() {
    makeAutoObservable(this);
  }

  changeColor(color: string) {
    this.color = color
  }
}

export default new Body;