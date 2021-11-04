import React from "react";

import { observer } from "mobx-react";

import "../styles/appleItem.scss";

function AppleItem({ apple }) {
  return (
    <div className="appleItem">
      <div className="apple">
        <img src={require("../images/apple.png")} alt="" />
      </div>
      <div className="info">
        <div className="name">红苹果 - {apple.id}号</div>
        <div className="weight">{apple.weight}克</div>
      </div>
      <div className="btn-div">
        <button onClick={() => apple.eatApple()}> 吃掉 </button>
      </div>
    </div>
  );
}

export default observer(AppleItem);
