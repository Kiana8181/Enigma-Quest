import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { ColorModeSwitch } from "./components/ColorModeSwitch";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import GamesList from "./components/GamesList";
import PlayGame from "./components/PlayGame";
import GameShow from "./components/GameShow";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/games" element={<GamesList />} />
            <Route path="/games/:id" element={<GameShow />} />
            <Route path="/notFound" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/notFound" />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
