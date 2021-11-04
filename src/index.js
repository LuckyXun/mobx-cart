import ReactDOM from "react-dom";
import App from "./components/App";
import { Global } from "@emotion/react";
import styles from "./styles";
// import { Provider } from "react-redux"
// import store from "./Store"

ReactDOM.render(
  <div>
    <Global styles={styles} />
    <App />
  </div>,
  document.getElementById("root")
);
