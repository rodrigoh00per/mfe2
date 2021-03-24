import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

//Mount function to start up the app
const mount = (el, { onNavigate, onSignIn, defaultHistory, initialPath }) => {
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });
  /* esta funcion es para informarle al papa de hey cambie ! */
  if (onNavigate) history.listen(onNavigate);
  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

  return {
    /* esta es para que los cambios del papa se vean reflejados en los hijos */
    onParentNavigate: ({ pathname: nexPathname }) => {
      const { pathname } = history.location;
      if (nexPathname !== pathname) history.push(nexPathname);
    },
  };
};

//If we are in development and in isolation call mount inmediatily

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");

  if (devRoot) mount(devRoot, { defaultHistory: createBrowserHistory() });
}
/* we are running through container
and we should export the mount function
*/
export { mount };
