import React from "react"
import ReactDOM from "react-dom"
import "src/assets/scss/index.scss"
import App from "./App/App"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import { store } from "./store/store"

import { Server } from "miragejs";
import { getMockLogin, getMockProducts } from "../src/proxy/mock.api";

if (process.env.REACT_APP_MODE === "local"){
  new Server({
    routes() {
      this.namespace = "proxy";
  
      this.get("/login", () => getMockLogin())
      this.get("/products", () => getMockProducts())
    }
  });  
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
