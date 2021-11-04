/*
 * @Author: XunL
 * @LastEditTime: 2021-11-03 17:01:03
 * @Description: file content
 */


import AppleStore from "./appleStore";

import { createContext, useContext } from "react";

class RootStore {
  constructor() {
    this.appleStore = new AppleStore()
  }
}

const rootStore = new RootStore();

const RootStoreContext = createContext();

export const RootStoreProvider = ({ children }) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};

export const useRootStore = ()=>{
  return useContext(RootStoreContext)
}
