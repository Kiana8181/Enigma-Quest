import AnswerInput from "./AnswerInput";
import { Button, Center, Text } from "@chakra-ui/react";
import { useState } from "react";
import Timer from "./Timer";

interface Props {
  goNextLevel: () => void;
  phaseNumber: number;
  phaseQuestion: string;
  phaseAnswer: string;
  time: number;
}

const PlayGame = ({
  goNextLevel,
  phaseNumber,
  phaseQuestion,
  phaseAnswer,
  time,
}: Props) => {
  const [pin, setPin] = useState("");

  const [borderColors, setBorderColors] = useState(["", "", "", "", ""]);

  const compareCodes = () => {
    const newBorderColors = ["", "", "", "", ""];

    for (let i = 0; i < pin.length; i++) {
      if (pin[i] === phaseAnswer[i]) {
        newBorderColors[i] = "green";
      } else {
        for (let j = i; j < pin.length; j++) newBorderColors[j] = "red";
        break;
      }
    }

    setBorderColors(newBorderColors);
    clearInputAfterDelay();
  };

  const clearInputAfterDelay = () => {
    setTimeout(() => {
      setPin("");
      setBorderColors(["", "", "", "", ""]);
    }, 2000);
  };

  return (
    <>
      <Center marginY={5}>
        <Timer time={time} />
      </Center>
      <Center mb={10}>
        <Text width="80%" textAlign="center">
          {phaseQuestion}
        </Text>
      </Center>
      <Center>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            compareCodes();
            if (pin === phaseAnswer) goNextLevel();
          }}
        >
          <AnswerInput pin={pin} setPin={setPin} status={borderColors} />
          <Center>
            <Button
              isDisabled={pin.length < 5}
              type="submit"
              size="lg"
              marginTop={10}
            >
              GO!!!
            </Button>
          </Center>
        </form>
      </Center>
    </>
  );
};

export default PlayGame;
