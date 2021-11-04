/*
 * @Author: XunL
 * @Description:
 */

import { action, computed, flow, makeObservable, observable } from "mobx";
import axios from "axios";
import Apple from "./apple";

export default class TodoStore {
  constructor() {
    this.apples = [];
    this.isPicking = false;

    makeObservable(this, {
      apples: observable,
      loadApples: flow,
      isPicking:observable,
      pickApple:action.bound,
      changeStatus:action.bound,
      notEatenQuantity: computed,
      EatenQuantity: computed,
      notEatenWeight: computed,
      EatenWeight: computed,
   
    });
    this.loadApples();
  }
  *loadApples() {
    let remoteApples = yield axios
      .get("http://117.50.92.194:1337/apples")
      .then((res) => res.data);
      remoteApples.forEach((apple) => {
      this.apples.push(new Apple(apple));
    });
  }

  pickApple(){
    if(this.isPicking){
      return
    }

    this.isPicking = true
    setTimeout(()=>{
      this.apples.push(new Apple({
        id:this.createId(),
        weight: Math.floor(Math.random() * 1000)
      }))
      this.changeStatus()
    },500)
  }

  changeStatus(){
    this.isPicking = false
  }
  createId(){
    return this.apples.reduce((max,apple)=>Math.max(max,apple.id),0)+1


  }
  get buttonText(){
     if(this.isPicking){
       return  '正在采摘...'
     }
     return '摘苹果'

  }


  get notEatenQuantity() {
    return this.apples.filter((n) => !n.isEaten).length;
  }
  get EatenQuantity(){
    return this.apples.filter(n=>n.isEaten).length;
  }
  get notEatenWeight(){
    return this.apples.filter((n) => !n.isEaten).reduce((total,apple)=>total+apple.weight,0)
  }
  get EatenWeight(){
    return this.apples.filter((n) => n.isEaten).reduce((total,apple)=>total+apple.weight,0)
  }

}
