import React from "react";
import Button from "@mui/material/Button";
import { createDockerDesktopClient } from "@docker/extension-api-client";
import { Stack, TextField, Typography } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./pages/main";

export function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}
