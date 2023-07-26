import { makeAutoObservable } from "mobx";

class Head {
  color = 'white'
  constructor() {
    makeAutoObservable(this);
  }

  changeColor(color: string) {
    this.color = color
  }
}

export default new Head;
