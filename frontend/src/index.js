import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";

import { SoftUIControllerProvider } from "context";
import { AuthProvider } from "contexts/AuthContext";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <BrowserRouter>
    <CookiesProvider>
      <AuthProvider>
        <SoftUIControllerProvider>
          <App />
        </SoftUIControllerProvider>
      </AuthProvider>
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
