import React from "react";
import AppleItem from "./AppleItem";
import "../styles/appleBasket.scss";
import { observer } from "mobx-react";
import { useRootStore } from "../Store";


function AppleBusket() {
  const { appleStore } = useRootStore();
  const { notEatenQuantity, notEatenWeight, EatenQuantity, EatenWeight,buttonText,isPicking,pickApple} = appleStore;
  return (
    <div className="appleBusket">
      <div className="title">苹果篮子</div>

      <div className="stats">
        <div className="section">
          <div className="head">当前</div>
          <div className="content">
            {notEatenQuantity}个苹果，{notEatenWeight}克
          </div>
        </div>
        <div className="section">
          <div className="head">已吃掉</div>
          <div className="content">
            {EatenQuantity}个苹果，{EatenWeight}克
          </div>
        </div>
      </div>

      <div className="appleList">{getAppleItem()}</div>

      <div className="btn-div">
        <button
          className={isPicking ? "disabled" : ""}
          onClick={() => pickApple()}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );

  function getAppleItem() {
    let data = [];
    appleStore.apples.forEach((apple) => {
      if (!apple.isEaten) {
        data.push(
          <AppleItem
            apple={apple}
            key={apple.id}
          />
        );
      }
    });
  
    if (!data.length)
      data.push(
        <div className="empty-tip" key="empty">
          苹果篮子空空如也
        </div>
      );
  
    return data;
  }
}

export default observer(AppleBusket);
