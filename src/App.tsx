import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import GameShow from "./components/GameShow";
import GamesList from "./components/GamesList";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <main>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/games" element={<GamesList />} />
            <Route path="/games/:id" element={<GameShow />} />
            <Route path="/notFound" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/notFound" />} />
          </Routes>
        </HashRouter>
      </main>
    </>
  );
}

export default App;
