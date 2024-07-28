import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import GameShow from "./components/GameShow";
import GamesList from "./components/GamesList";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route
              path="/Enigma-Quest/"
              element={<Navigate to="/Enigma-Quest/home" />}
            />
            <Route path="/Enigma-Quest/home" element={<HomePage />} />
            <Route path="/Enigma-Quest/games" element={<GamesList />} />
            <Route path="/Enigma-Quest/games/:id" element={<GameShow />} />
            <Route path="/Enigma-Quest/notFound" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/Enigma-Quest/" />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
