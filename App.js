import React from "react";
import { NativeRouter, Route } from "react-router-native";
import Login from "./views/Login";
import Home from "./views/Home";

export default function App() {
  return (
    <NativeRouter>
      <Route path="/" exact component={Login} />
      <Route path="/Home" component={Home} />
    </NativeRouter>
  );
}
