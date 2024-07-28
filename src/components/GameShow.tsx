import { Divider, useDisclosure } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { useState } from "react";
import { useParams } from "react-router-dom";
import games from "../data/games";
import StepperPhase from "./StepperPhase";
import PlayGame from "./PlayGame";
import Congratulation from "./Congratulation";

const GameShow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { id } = useParams();
  const gameId = id || "0";

  const [phaseNumber, setPhaseNumber] = useState(0);

  const game = games.find((g) => g.id === parseInt(gameId));

  const gameTime = game?.time;

  const goNextLevel = () => {
    if (phaseNumber + 1 === game?.totalPhase) onOpen();
    else setPhaseNumber(phaseNumber + 1);
  };

  return (
    <>
      <Navbar />
      <Divider />
      <StepperPhase steps={game?.phases} activeStep={phaseNumber} />
      <PlayGame
        goNextLevel={goNextLevel}
        phaseNumber={phaseNumber + 1}
        phaseQuestion={game?.phases[phaseNumber].question || ""}
        phaseAnswer={game?.phases[phaseNumber].answer || "00000"}
        time={gameTime || 0}
      />
      <Congratulation isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};

export default GameShow;
