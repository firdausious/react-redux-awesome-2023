import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//store.subscribe(() => console.log(JSON.stringify(store.getState())));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
