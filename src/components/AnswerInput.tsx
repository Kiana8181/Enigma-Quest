import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import { pinInputS } from "./AnswerInputStyle";

interface Props {
  pin: string;
  setPin: (pin: string) => void;
  status: string[];
}

const AnswerInput = ({ pin, setPin, status }: Props) => {
  return (
    <HStack>
      <PinInput
        value={pin}
        onChange={(v) => {
          setPin(v);
        }}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <PinInputField
            key={index}
            sx={{ borderColor: status[index], ...pinInputS }}
          />
        ))}
      </PinInput>
    </HStack>
  );
};

export default AnswerInput;
