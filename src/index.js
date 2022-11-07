import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import ApiRest from "./ApiRest";
import TodoApp from "./TodoApp";
import Task from "./Task";
import NoPage from "./NoPage";
import Chat from "./Chat";
import LaunchesApp from "./LaunchesApp";
// opcion añadida *****
import Opc1 from "./Opc1";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="apirest" element={<ApiRest />} />
          <Route path="todoapp" element={<TodoApp />} />
          <Route path="task" element={<Task />} />
          <Route path="chat" element={<Chat />} />
          <Route path="launchesApp" element={<LaunchesApp />} />
          <Route path="opc1" element={<Opc1 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
