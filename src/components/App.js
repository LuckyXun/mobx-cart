import  AppleBasket from "./AppleBasket";

import { RootStoreProvider } from "../Store";




function App() {
  return (
    <RootStoreProvider>
        <AppleBasket></AppleBasket>
    </RootStoreProvider>
  );
}

export default App;


