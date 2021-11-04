/*
 * @Author: XunL
 * @Description:
 */

import { action, makeObservable, observable } from "mobx";

export default class Apple {
  constructor({ id, weight, isEaten = false }) {
    this.id = id;
    this.weight = weight;
    this.isEaten = isEaten;
  
    makeObservable(this, {
      isEaten: observable,
      eatApple: action.bound,
    });
  }


  eatApple() {
    this.isEaten = true
  }
 
}
