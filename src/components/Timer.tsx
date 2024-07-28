import { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Box,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiSolidTimer } from "react-icons/bi";

interface Props {
  time: number;
}

const Timer = ({ time }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCountingUp, setIsCountingUp] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(time); // Initial time in milliseconds (5 minutes)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isCountingUp) {
        setTimeRemaining((prevTime) => prevTime + 1000);
      } else {
        setTimeRemaining((prevTime) => prevTime - 1000);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) {
      onOpen();
    }
  }, [timeRemaining, onOpen, isCountingUp]);

  const formatTime = (milliseconds: number): string => {
    const absoluteMilliseconds = Math.abs(milliseconds);
    const hours = Math.floor(absoluteMilliseconds / 3600000);
    const minutes = Math.floor((absoluteMilliseconds % 3600000) / 60000);
    const seconds = Math.floor((absoluteMilliseconds % 60000) / 1000);

    return `${isCountingUp ? "-" : ""}${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleContinue = () => {
    setIsCountingUp(true);
    onClose();
  };

  return (
    <div>
      <Box p={5}>
        <HStack>
          <BiSolidTimer color={isCountingUp ? "red" : ""} size="60px" />
          <Text fontSize="60px" color={isCountingUp ? "red" : ""}>
            {formatTime(timeRemaining)}
          </Text>
        </HStack>
        {timeRemaining <= 0 && (
          <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Time's Up!</ModalHeader>
              <ModalBody>Do you want to continue?</ModalBody>
              <ModalFooter>
                <Button colorScheme="green" onClick={handleContinue}>
                  Yes
                </Button>
                <Button colorScheme="red" ml={3}>
                  <Link to="/">No</Link>
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Box>
    </div>
  );
};

export default Timer;
