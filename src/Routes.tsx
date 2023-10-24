import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { endroutes } from "./constant/endroutes";
import { LoginContainer } from "./containers/LoginContainer";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LoginContainer />}></Route>
        <Route path={endroutes.login} element={<LoginContainer />}></Route>
        <Route path={endroutes.platform} element={<div>customers</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
